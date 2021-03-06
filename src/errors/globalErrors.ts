import { Request, Response, NextFunction } from 'express';

import AppError from './AppError';

interface IErrorsResponse {
  status: string;
  message: string;
}

export default function globalErrors(
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
): Response<IErrorsResponse> {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
}

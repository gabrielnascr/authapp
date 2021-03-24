import { ApiError } from "./ApiError";

function errorHandler(error, req, res, next) {
  if (error instanceof ApiError) {
    return res.status(error.getCode()).json({
      error: {
        status: error.getCode(),
        message: error.message,
      },
    });
  }

  return res.status(500).json({
    error: {
      status: 500,
      message: error.message,
    },
  });
}

export default errorHandler;

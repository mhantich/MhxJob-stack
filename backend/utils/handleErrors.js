export const errorHandler = (statusCode, message,err) => {
    const error = new Error() ;
    error.statusCode = statusCode;
    error.message = message;
    error.err=err
    return error;
  };
  



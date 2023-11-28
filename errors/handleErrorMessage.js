const handleErrorMessage = (err) => {
  const statusCode = 400;

  return {
    statusCode,
    message: "VadidationError",
  };
};

module.exports = handleErrorMessage;

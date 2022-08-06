const errorHandler = (err, req, res, next) => {
	const statusCode = res.statusCode

	console.log(err.code)

	if(err.code==11000){
		err.message="email exists"
		statusCode=404
	  }


	  
	res.status(statusCode).json({
		status: false,
		message: err.message
	});
};

module.exports={errorHandler}
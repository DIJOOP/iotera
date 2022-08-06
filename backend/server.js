const app = require('./app');
const connectDataBase = require('./config/database');
const dotenv = require('dotenv');
const cloudinary=require("cloudinary")
const { errorHandler } = require('./middleware/errorMiddleware');

// confige
dotenv.config({ path: 'backend/config/.env' });


const PORT=process.env.PORT||8082;
// DATABASE
connectDataBase();

// cCLOUDINARY

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
  })

// ERRORHANDLER
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`server is working on ${PORT}`);
});

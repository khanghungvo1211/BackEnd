const express = require('express');
const dbConnect = require('./config/dbConnect');
const bodyParser = require("body-parser");
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const app = express();
const dotenv = require('dotenv').config();
const PORT = 5002;
const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoute');
const blogRouter = require("./routes/blogRoute");
const categoryRouter = require("./routes/categoryRoute");
const brandRouter = require("./routes/brandRoute");
const couponRouter = require("./routes/couponRoute");
const uploadRouter = require("./routes/uploadRoute");
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger'); // Import your Swagger configuration
dbConnect();

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api/user', authRouter);
app.use('/api/product', productRouter);
app.use("/api/blog", blogRouter);
app.use("/api/category", categoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/upload", uploadRouter);
// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
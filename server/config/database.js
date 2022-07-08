import mongoose from 'mongoose';

const connectDB = async (cb) => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/Book-e-Sell", {
      useNewUrlParser : true,
      useUnifiedTopology : true,
  });
  console.log(`MongoDB Connected : ${conn.connection.host}`);
    cb();
  } catch (error) { console.log(error); }
};

export default connectDB;

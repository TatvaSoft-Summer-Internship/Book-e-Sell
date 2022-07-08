import mongoose from 'mongoose';

const Schema = mongoose.Schema;



const productSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
  }
);

const Product = mongoose.model('Product', productSchema);

export default Product;

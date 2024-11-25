import React, { useState } from 'react';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';

const ProductInfo = () => {
  const [product, setProduct] = useState({
    name: 'Iphone 15',
    price: 50000,
    description: 'An old version of iPhone.',
  });

  function updateProduct() {
    const newProduct = {
      name: 'Iphone 16',
      price: 67000,
      description: 'A new and updated version of iPhone.',
    };
    setProduct(newProduct);
    validateProps(newProduct);
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 p-5">
      <div className="text-center m-3 font-bold text-3xl text-blue-700">
        <h1>QUESTION 2</h1>
      </div>
      <div className="m-5">
        <h1 className="font-bold text-2xl text-gray-800 mb-5">Product Information</h1>
        <ProductDetails product={product} updateProduct={updateProduct} />
        <Toaster />
      </div>
    </div>
  );
};

function validateProps(product) {
  if (typeof product.name !== 'string') {
    toast.error('Proptype Error: Product name must be a string!');
  } else if (typeof product.price !== 'number') {
    toast.error('Proptype Error: Product price must be a number!');
  } else if (typeof product.description !== 'string') {
    toast.error('Proptype Error: Product description must be a string!');
  } else {
    toast.success('Product updated successfully!');
  }
}

const ProductDetails = ({ product, updateProduct }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
      <div className="border-b border-gray-300 pb-4 mb-4">
        <p className="text-lg font-semibold text-gray-700">
          <span className="font-bold text-gray-900">Name:</span> {product.name}
        </p>
        <p className="text-lg font-semibold text-gray-700">
          <span className="font-bold text-gray-900">Price:</span> Rs. {product.price}
        </p>
        <p className="text-lg font-semibold text-gray-700">
          <span className="font-bold text-gray-900">Description:</span> {product.description}
        </p>
      </div>
      <button
        onClick={updateProduct}
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Update Product
      </button>
    </div>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  updateProduct: PropTypes.func.isRequired,
};

export default ProductInfo;

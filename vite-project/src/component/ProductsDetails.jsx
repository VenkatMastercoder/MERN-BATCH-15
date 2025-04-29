import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProductDetails from "../hooks/useProductDetails";

const ProductsDetails = () => {
  const { product_id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  const { data, loading } = useProductDetails(product_id);

  useEffect(() => {
    // Set the initial selected image when data is loaded
    if (data?.thumbnail) {
      setSelectedImage(data.thumbnail);
    }
  }, [data]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>No product data available</p>;
  }

  // Calculate discounted price
  const discountedPrice =
    data.price - (data.price * data.discountPercentage) / 100;

  return (
    <>
      <section className="py-8 antialiased bg-white md:py-16 dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="max-w-md mx-auto shrink-0 lg:max-w-lg">
              {/* Main Image */}
              <div className="relative mb-4 aspect-square">
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src={selectedImage || data.thumbnail}
                  alt={data.title}
                />
              </div>
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2 mt-4">
                <div
                  className={`cursor-pointer rounded-lg overflow-hidden border-2 ${
                    selectedImage === data.thumbnail
                      ? "border-primary-700"
                      : "border-transparent"
                  }`}
                  onClick={() => handleImageClick(data.thumbnail)}>
                  <img
                    className="object-cover w-full h-24"
                    src={data.thumbnail}
                    alt={`${data.title} - thumbnail`}
                  />
                </div>
                {data.images?.map((image, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer rounded-lg overflow-hidden border-2 ${
                      selectedImage === image
                        ? "border-primary-700"
                        : "border-transparent"
                    }`}
                    onClick={() => handleImageClick(image)}>
                    <img
                      className="object-cover w-full h-24"
                      src={image}
                      alt={`${data.title} - ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                {data.title}
              </h1>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                  ${discountedPrice.toFixed(2)}
                  {data.discountPercentage > 0 && (
                    <span className="ml-2 text-sm text-red-500">
                      ({data.discountPercentage}% off)
                    </span>
                  )}
                </p>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`w-4 h-4 ${
                          index < Math.round(data.rating)
                            ? "text-yellow-300"
                            : "text-gray-300"
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                    ({data.rating})
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-gray-500 dark:text-gray-400">
                  {data.description}
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">
                    Brand:
                  </span>
                  <span className="font-medium">{data.brand}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">
                    Category:
                  </span>
                  <span className="font-medium capitalize">
                    {data.category}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">SKU:</span>
                  <span className="font-medium">{data.sku}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">
                    Stock:
                  </span>
                  <span className="font-medium">{data.stock} units</span>
                </div>
              </div>

              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                <button
                  className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                  disabled={data.stock === 0}>
                  {data.stock > 0 ? "Add to Cart" : "Out of Stock"}
                </button>
              </div>

              <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-800" />

              <div className="space-y-4">
                <h2 className="text-lg font-semibold">
                  Product Specifications
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium">Dimensions</h3>
                    <p className="text-sm text-gray-600">
                      {data.dimensions.width}W x {data.dimensions.height}H x{" "}
                      {data.dimensions.depth}D
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">Weight</h3>
                    <p className="text-sm text-gray-600">{data.weight} kg</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium">Tags</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {data.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-gray-100 rounded-full dark:bg-gray-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium">Shipping Information</h3>
                  <p className="text-sm text-gray-600">
                    {data.shippingInformation}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Warranty</h3>
                  <p className="text-sm text-gray-600">
                    {data.warrantyInformation}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Return Policy</h3>
                  <p className="text-sm text-gray-600">{data.returnPolicy}</p>
                </div>
              </div>

              {/* Reviews Section */}
              <div className="mt-8">
                <h2 className="mb-4 text-lg font-semibold">Customer Reviews</h2>
                <div className="space-y-4">
                  {data.reviews.map((review, index) => (
                    <div key={index} className="pb-4 border-b border-gray-200">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "text-yellow-300"
                                  : "text-gray-300"
                              }`}
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 24 24">
                              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm font-medium">
                          {review.reviewerName}
                        </span>
                      </div>
                      <p className="mt-2 text-gray-600">{review.comment}</p>
                      <p className="mt-1 text-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsDetails;

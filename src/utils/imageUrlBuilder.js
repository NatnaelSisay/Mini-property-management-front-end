const  imageUrlBuilder = (image) => {
  return `https://mini-property-management-images-bucket.s3.us-east-2.amazonaws.com/${image}`;
};


export default imageUrlBuilder;
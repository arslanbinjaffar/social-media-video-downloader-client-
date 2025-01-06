// Function to return the image path based on the index
const getImagePath = (index) => {
  if (index < 1 || index > 29) {
    throw new Error("Index out of range. Valid range is 1 to 29.");
  }

  const extension = index === 1 ? "jpg" : "avif"; // Use .jpg for the first image, .avif for others
  return require(`../../../assets/${index}.${extension}`);
};

try {
  const imagePath = getImagePath(5); // Pass the desired index
  console.log(imagePath); // Logs the path to the console
} catch (error) {
  console.error(error.message);
}

export default getImagePath;

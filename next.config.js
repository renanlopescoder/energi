const withImages = require("next-images");

module.exports = withImages({
  images: {
    domains: ["storage.googleapis.com", "firebasestorage.googleapis.com"],
    disableStaticImages: true,
  },
});

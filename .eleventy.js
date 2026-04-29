module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/documents");


  // Use JSON data files from _data directory
  eleventyConfig.addDataExtension("json", (contents) => JSON.parse(contents));

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
      data: "_data"
    }
  };
};

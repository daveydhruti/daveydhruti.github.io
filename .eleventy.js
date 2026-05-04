const markdownIt = require("markdown-it");
const markdownItMathjax3 = require("markdown-it-mathjax3");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/documents");

  let markdownLibrary = markdownIt({
    html: true,
    linkify: true,
  }).use(markdownItMathjax3);

  eleventyConfig.setLibrary("md", markdownLibrary);

  eleventyConfig.addCollection("notes", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/_notes/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });

  eleventyConfig.addFilter("formatDate", function(date) {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

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

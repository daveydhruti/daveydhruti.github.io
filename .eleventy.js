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

  eleventyConfig.addFilter("formatAuthors", function(authors) {
    const shorten = this.ctx?.site?.shortenAuthors ?? this.page?.site?.shortenAuthors;
    if (!shorten) return authors.join(', ');
    
    return authors.map(name => {
      const parts = name.trim().split(/\s+/);
      const last = parts.pop();
      const initials = parts.map(p => p[0] + '.').join(' ');
      return initials ? `${initials} ${last}` : last;
    }).join(', ');
  });

  // Also add a single-name shortener for use in prose
  eleventyConfig.addFilter("formatName", function(name) {
    const shorten = this.ctx?.site?.shortenAuthors ?? this.page?.site?.shortenAuthors;
    if (!shorten) return name;

    const parts = name.trim().split(/\s+/);
    const last = parts.pop();
    const initials = parts.map(p => p[0] + '.').join(' ');
    return initials ? `${initials} ${last}` : last;
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

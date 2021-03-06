/**
 * @author Maria Fernanda Serna
 * Main application routes
 */

const rp = require("request-promise");
const cheerio = require("cheerio");

function find(name, res) {
  const options = {
    uri: `https://slides.com/${name}`,
    transform: body => {
      return cheerio.load(body);
    }
  };
  let presentations = [];
  return new Promise((success, reject) => {
    rp(options)
      .then($ => {
        $("li").each((i, elem) => {
          const imageStyle = $(elem)
            .find($(".deck-image"))
            .attr("style");
          const imageData = $(elem)
            .find($(".deck-image"))
            .data();
          let pre = {
            ...($(elem).data().id && $(elem).data()),
            imageUrl:
              (imageStyle &&
                imageStyle.match(/url\(["']?([^"']*)["']?\)/)[1]) ||
              (imageData && imageData.imageUrl),
            name: $(elem)
              .find($(".deck-title-value"))
              .text()
          };
          presentations.push(pre);
        });
        success(presentations.filter(pre => pre.id));
      })
      .catch(err => {
        reject(err);
      });
  });
}

module.exports = {
  find
};

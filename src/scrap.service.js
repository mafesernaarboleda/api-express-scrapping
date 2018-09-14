/**
 * @author Maria Fernanda Serna
 * Main application routes
 */

const rp = require('request-promise');
const cheerio = require('cheerio');

function find(name, res) {
    const options = {
        uri: `https://slides.com/${name}`,
        transform: (body) => {
            return cheerio.load(body);
        }
    };
    let presentations = []
    return new Promise((success, reject) => {
        rp(options)
            .then(($) => {
                $('li').each((i, elem) => {
                    let pre = {
                        ...$(elem).data().id && $(elem).data(),
                        ...$(elem).find($('.deck-image')).data() 
                    }
                    presentations.push(pre)
                });
                success(presentations.filter(pre => pre.id))
            })
            .catch((err) => {
                reject(err);
            });
    });
}

module.exports = {
    find
};
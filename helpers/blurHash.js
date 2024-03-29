const sharp = require('sharp');
const { encode } = require('blurhash');

const encodeImageToBlurhash = (path) => {
    return new Promise((resolve, reject) => {
        sharp(path)
            .resize(400, 300)
            .raw()
            .ensureAlpha()
            .toBuffer((err, buffer, { width, height }) => {
                if (err) return reject(err);
                resolve(encode(new Uint8ClampedArray(buffer), width, height, 4, 3));
            });
    });
};

module.exports = { encodeImageToBlurhash };
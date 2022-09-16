const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}

const withFonts = require('next-fonts');
module.exports = withFonts({
    webpack(config, options) {
        return config;
    }
});
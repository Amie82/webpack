const CommonConfig = require('./webpack.common.config.js');
const ProductionConfig = require('./webpack.production.config.js');
const DevelopmentConfig = require('./webpack.development.config.js');
const { merge } = require('webpack-merge');

module.exports = function (env) {
    switch(env) {
        case 'development':
            return merge(CommonConfig, DevelopmentConfig);
        case 'production':
            return merge(CommonConfig, ProductionConfig);
        default:
            throw new Error('No matching configuration was found');
    }
}
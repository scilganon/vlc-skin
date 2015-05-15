/**
 *
 * @param config
 * @returns {{base, command}}
 * @constructor
 */
var Uri = function(config){
    /**
     * @var config
     */
    config = angular.extend({
        format: 'json',
        service: null,
        schema: 'http',
        host: null,
        port: null
    },config, window.uri || {});

    if(!config.schema || !config.host || !config.port){
        throw new Error('config was not specified');
    }

    return {
        decorateWithFormat: function(url){
            return url+ '.' + config.format;
        },

        get base(){
            return [config.schema, '://',config.host,':',config.port,'/requests'].join('');
        },

        get command(){
            return [this.base,this.decorateWithFormat('status'),].join('/');
        },

        get config(){
            return config;
        }
    };
};
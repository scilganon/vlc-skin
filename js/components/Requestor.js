/**
 * @param config
 * @returns {{base, command, playlist: Function, play: Function, stop: Function}}
 * @constructor
 *
 * available formats are xml / json
 */
var Requestor = function(config){
    /**
     * @var config
     */
    config = angular.extend({
        format: 'json',
        service: null,
        schema: 'http',
        host: null,
        port: null
    },config);

    if(!config.schema || !config.host || !config.port){
        throw new Error('config was not specified');
    }

    if(!config.service){
        throw new Error('was not specified transport');
    }

    return {
        get base(){
            return [config.schema, '://',config.host,':',config.port,'/requests/'].join('');
        },

        get command(){
            return [this.base,'status.xml'].join('/');
        },

        /**
         * @param {Function} handler
         */
        playlist: function(handler){
            config.service
                .get([this.base,'playlist.xml'].join('/'),{
                    headers: {
                        'Authorization': "Basic :0000"
                    }
                })
                .success(function(data){
                    return handler(data);
                });
        },
        play: function(id, handler){
            config.service
                .get([this.command, '?', 'command=pl_play', '&', 'input=', id].join(''))
                .success(function(data){
                    return handler(data);
                });
        },
        stop: function(handler){
            config.service
                .get([this.command,'status.xml', '?', 'command=pl_stop'].join(''))
                .success(function(data){
                    return handler(data);
                });
        }
    };
};
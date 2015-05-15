/**
 * @param config
 * @returns {{base, command, playlist: Function, play: Function, stop: Function}}
 * @constructor
 *
 * available formats are xml / json
 */
var Requestor = function(config){
    /**
     * @type {Object} config
     * @property {Uri} uriService
     */
    config = angular.extend({
        uriService: null,
        format: 'json',
        service: null
    },config);


    if(!config.service){
        throw new Error('was not specified transport');
    }

    if(!config.uriService){
        throw new Error('could not create uri');
    }

    return {
        /**
         * @param {Function} handler
         */
        playlist: function(handler){
            config.service
                .get([config.uri.base,'playlist.xml'].join('/'),{
                    headers: {
                        'Authorization': "Basic :0000"
                    }
                })
                .success(function(data){
                    return handler &&  handler(data);
                });
        },
        play: function(id, handler){
            config.service
                .get([config.uri.command, '?', 'command=pl_play', '&', 'input=', id].join(''))
                .success(function(data){
                    return handler && handler(data);
                });
        },
        stop: function(handler){
            config.service
                .get([config.uri.command,'status.xml', '?', 'command=pl_stop'].join(''))
                .success(function(data){
                    return handler &&  handler(data);
                });
        }
    };
};
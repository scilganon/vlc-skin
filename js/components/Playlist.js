/**
 * @typedef {Object} VlcResponsePlaylistChildren
 * @property {String} name
 * @property {String} leaf
 * @property {String} type
 * @property {String} ro
 * @property {String} duration
 * @property {String} uri
 * @property {String} id
 */
/**
 * @typedef {Object} PlaylistConfig
 * @property {Requestor} api
 */
/**
 * @param {PlaylistConfig} config
 * @returns {{refresh: Function}}
 * @constructor
 */
var Playlist = function(config){
    config = angular.extend({
        api: null
    },config);

    var map = {};

    return {
        refresh: function () {
            config.api.playlist(function(data){
                /** @type {VlcResponsePlaylistChildren[]} **/
                var children = data.children;

                angular.each(
                    children,
                    /**
                     * @param {VlcResponsePlaylistChildren} item
                     * @param index
                     */
                    function(item, index){
                        map[item.id] = item;
                    });

                console.log(map);
            });
        }
    };
};
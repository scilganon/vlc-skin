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
 * @param {PlaylistConfig} [config]
 * @returns {{refresh: Function}}
 * @constructor
 */
var Playlist = function(config){
    config = angular.extend({
        api: null
    },config);

    function refreshMap(data)
    {
        var map = [];

        angular.each(
            data,
            /**
             * @param {VlcResponsePlaylistChildren} item
             * @param index
             */
            function(item, index){
                map[item.id] = item;
            });

        return map;
    }

    return {
        get sections()
        {
            return config.children;
        },

        getLeafs: function(data)
        {
            data = data || this.sections;

            var result = [];

            angular.forEach(data, function(item, index){
                if(item.type === 'leaf')
                {
                    result.push(item);
                }
                else if(item.type === 'node' && (item.children && item.children.length))
                {
                    result = result.concat(this.getLeafs(item.children));
                }
            }.bind(this));

            return result;
        }
    };
};

var ControllCollection = function(config){
    config = angular.extend({
        'prev': true,
        'play': true,
        'stop': true,
        'next': true,
        'about': true
    }, config);

    /**
     * @type {Control[]}
     */
    var map = {};

    return {
        add:function(config){
            var el = new Control(config);
            map[el.config.elClass] = el;
        },
        getItem: function(id){
            return map[id];
        },
        addDefault: function(){
            angular.forEach(config, $.proxy(function(item, index){
                return item && this.add({
                    elClass: index,
                    handler: function () {
                        console.log('was clicked ' + this.config.elClass);
                    }
                });
            }, this));
        },
        render: function (container) {
            if(!container){
                throw new Error('was not specified contaner');
            }

            container = $(container);
            container.empty();

            angular.forEach(
                map,
                /**
                 * @param {Control} btn
                 * @param key
                 */
                function(btn, key){
                    container.append(btn.render());
                });
        }
    };
};
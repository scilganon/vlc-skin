var Control = function(config){

    config = angular.extend({
        elClass: null,
        handler: null
    }, config);

    if(!config.elClass){
        throw new Error('no name was specified for button');
    }

    if(!config.handler){
        config.warn('no handler was attached to newly created control');
    }

    return {
        get config(){
            return config;
        },

        render: function(){
            var el = $('<button />');

            el.addClass(config.elClass);
            el.text(config.elClass);

            el.on('click', config.handler.bind(this));

            return el;
        }
    };
};
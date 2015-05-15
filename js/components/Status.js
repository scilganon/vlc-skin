var Status = function(config){
    return {
        get meta(){
            return config['information']['category']['meta'];
        },

        get duration(){
            return Math.ceil((config.time || 0) / 60) + ':' + (config.time % 60);
        },

        get pageTitle (){
            return 'VLC: ' + this.meta.title;
        }
    };
};
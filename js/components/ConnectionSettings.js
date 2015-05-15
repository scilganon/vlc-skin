var ConnectionSettings = function(config){

    return {
        get password(){
            return config.password;
        },
        get host(){
            return config.host;
        },
        get port(){
            return config.port;
        }
    };
};

ConnectionSettings.INDEX = 'connectionSettings';
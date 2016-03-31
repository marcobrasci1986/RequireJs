require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery.min'
    }
});

require(['app'], function (app) {
    app.init();
});
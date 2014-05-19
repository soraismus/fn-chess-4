// Generated by CoughSyrup 0.1.0
(function() {
  require.config({
    shim: {
      jqueryUi: {
        deps: ['jquery'],
        exports: 'jqueryUi'
      }
    },
    paths: {
      jquery: 'http://code.jquery.com/jquery-1.9.1',
      jqueryUi: 'http://code.jquery.com/ui/1.10.3/jquery-ui',
      react: 'http://fb.me/react-0.10.0'
    }
  });

  require(['constants', 'fen-service', 'game-ui'], function(c, fs, game) {
    var slice_hyphen__octothorpe_;
    game.render(c.initial_hyphen_context);
    slice_hyphen__octothorpe_ = function(str) {
      return str.slice(1);
    };
    return window.addEventListener('popstate', function() {
      return (function(__i) {
        return game.render(fs.decode_hyphen_fen(slice_hyphen__octothorpe_(decodeURI(__i))));
      })(window.location.hash);
    });
  });

}).call(this);

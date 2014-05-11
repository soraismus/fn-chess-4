// Generated by CoughSyrup 0.1.0
(function() {
  define(['jFns', 'constants', 'assertions'], function(j, c, v) {
    var contravenes, descr, each_hyphen_contravenes, each_hyphen_satisfies, each_hyphen_throws, gen_hyphen_pred_hyphen_guards, satisfies, t, test_hyphen_predicate, test_hyphen_spec, test_hyphen_throwing_hyphen_transformation, test_hyphen_transformation, throws, to_hyphen_be, to_hyphen_be_hyphen_false, to_hyphen_be_hyphen_fn, to_hyphen_be_hyphen_true, to_hyphen_equal, to_hyphen_throw, xdescr, xt;
    descr = j.descr, xdescr = j.xdescr, t = j.t, xt = j.xt, test_hyphen_spec = j.test_hyphen_spec, to_hyphen_throw = j.to_hyphen_throw, to_hyphen_be = j.to_hyphen_be, to_hyphen_equal = j.to_hyphen_equal, to_hyphen_be_hyphen_true = j.to_hyphen_be_hyphen_true, to_hyphen_be_hyphen_false = j.to_hyphen_be_hyphen_false, satisfies = j.satisfies, contravenes = j.contravenes, throws = j.throws, each_hyphen_satisfies = j.each_hyphen_satisfies, each_hyphen_contravenes = j.each_hyphen_contravenes, each_hyphen_throws = j.each_hyphen_throws, to_hyphen_be_hyphen_fn = j.to_hyphen_be_hyphen_fn, test_hyphen_predicate = j.test_hyphen_predicate, test_hyphen_transformation = j.test_hyphen_transformation, test_hyphen_throwing_hyphen_transformation = j.test_hyphen_throwing_hyphen_transformation, gen_hyphen_pred_hyphen_guards = j.gen_hyphen_pred_hyphen_guards;
    return descr('test assertions.cough')(function() {
      var bd, chart, ctx, passant, path, rts, src, tgt;
      bd = '--------------------Q-------------------------------------------';
      rts = c.full_hyphen_castling_hyphen_rts;
      passant = c.unset_hyphen_passant_hyphen_pos;
      ctx = {
        board: bd,
        castlingRights: rts,
        passantPosition: passant
      };
      src = [2, 4];
      tgt = [5, 4];
      path = [tgt, src];
      chart = [ctx, path];
      t('test v.vow-board')(function() {
        var fn;
        fn = v.vow_hyphen_board;
        to_hyphen_throw(fn)(ctx);
        return to_hyphen_equal(bd)(fn(bd));
      });
      t('test v.vow-bounded')(function() {
        var fn;
        fn = v.vow_hyphen_bounded;
        to_hyphen_throw(fn)(10);
        return to_hyphen_equal(4)(fn(4));
      });
      t('test v.castling-right')(function() {
        var fn;
        fn = v.vow_hyphen_castling_hyphen_right;
        to_hyphen_throw(fn)('X');
        return to_hyphen_equal('K')(fn('K'));
      });
      t('test v.castling-righ-set')(function() {
        var fn;
        fn = v.vow_hyphen_castling_hyphen_right_hyphen_set;
        to_hyphen_throw(fn)('KQxkq');
        return to_hyphen_equal('KQk')(fn('KQk'));
      });
      t('test v.chart')(function() {
        var fn;
        fn = v.vow_hyphen_chart;
        to_hyphen_throw(fn)(bd);
        return to_hyphen_equal(chart)(fn(chart));
      });
      t('test v.vow-chessman')(function() {
        var fn;
        fn = v.vow_hyphen_chessman;
        to_hyphen_throw(fn)('X');
        return to_hyphen_equal(c.white_hyphen_knight)(fn(c.white_hyphen_knight));
      });
      t('test v.vow-chessman-type')(function() {
        var fn;
        fn = v.vow_hyphen_chessman_hyphen_type;
        to_hyphen_throw(fn)(c.white_hyphen_knight);
        return to_hyphen_equal(c.knight)(fn(c.knight));
      });
      t('test v.vow-color')(function() {
        var fn;
        fn = v.vow_hyphen_color;
        to_hyphen_throw(fn)('x');
        return to_hyphen_equal(c.white)(fn(c.white));
      });
      t('test v.vow-color-pair')(function() {
        var color_hyphen_pair, fn;
        fn = v.vow_hyphen_color_hyphen_pair;
        to_hyphen_throw(fn)(['x', c.white]);
        color_hyphen_pair = [c.white, c.black];
        return to_hyphen_equal(color_hyphen_pair)(fn(color_hyphen_pair));
      });
      t('test v.vow-context')(function() {
        var fn;
        fn = v.vow_hyphen_context;
        to_hyphen_throw(fn)(bd);
        return to_hyphen_equal(ctx)(fn(ctx));
      });
      t('test v.vow-index')(function() {
        var fn;
        fn = v.vow_hyphen_index;
        to_hyphen_throw(fn)(100);
        return to_hyphen_equal(62)(fn(62));
      });
      t('test v.vow-integral-pair')(function() {
        var fn, i_hyphen_pair;
        fn = v.vow_hyphen_integral_hyphen_pair;
        to_hyphen_throw(fn)([5, 5.5]);
        i_hyphen_pair = [7, 4];
        return to_hyphen_equal(i_hyphen_pair)(fn(i_hyphen_pair));
      });
      t('test v.vow-map')(function() {
        var fn, map;
        fn = v.vow_hyphen_map;
        to_hyphen_throw(fn)(ctx);
        map = [bd, path];
        return to_hyphen_equal(map)(fn(map));
      });
      t('test v.vow-pair')(function() {
        var fn, pair;
        fn = v.vow_hyphen_pair;
        to_hyphen_throw(fn)([1, 'a', true]);
        pair = [1, 'a'];
        return to_hyphen_equal(pair)(fn(pair));
      });
      t('test v.vow-passant-position')(function() {
        var fn;
        fn = v.vow_hyphen_passant_hyphen_position;
        to_hyphen_throw(fn)([1, 8]);
        return to_hyphen_equal(passant)(fn(passant));
      });
      t('test v.vow-path')(function() {
        var fn;
        fn = v.vow_hyphen_path;
        to_hyphen_throw(fn)([1, 2, 3]);
        path = [[4, 2], [1, 5]];
        return to_hyphen_equal(path)(fn(path));
      });
      t('test v.vow-player')(function() {
        var fn, player;
        fn = v.vow_hyphen_player;
        to_hyphen_throw(fn)('x');
        player = c.white;
        return to_hyphen_equal(player)(fn(player));
      });
      t('test v.vow-position')(function() {
        var fn;
        fn = v.vow_hyphen_position;
        to_hyphen_throw(fn)(passant);
        return to_hyphen_equal(src)(fn(src));
      });
      t('test v.vow-rook')(function() {
        var fn;
        fn = v.vow_hyphen_rook;
        to_hyphen_throw(fn)(c.white_hyphen_king);
        return to_hyphen_equal(c.white_hyphen_rook)(fn(c.white_hyphen_rook));
      });
      t('test v.vow-setting')(function() {
        var fn, invalid_hyphen_bd, setting;
        fn = v.vow_hyphen_setting;
        invalid_hyphen_bd = '-------------';
        to_hyphen_throw(fn)([invalid_hyphen_bd, tgt]);
        setting = [bd, src];
        return to_hyphen_equal(setting)(fn(setting));
      });
      t('test v.vow-square')(function() {
        var fn;
        fn = v.vow_hyphen_square;
        to_hyphen_throw(fn)('x');
        to_hyphen_equal(c.empty_hyphen_square)(fn(c.empty_hyphen_square));
        return to_hyphen_equal(c.black_hyphen_bishop)(fn(c.black_hyphen_bishop));
      });
      return t('test v.vow-chessman-type')(function() {
        var fn;
        fn = v.vow_hyphen_chessman_hyphen_type;
        to_hyphen_throw(fn)('x');
        return to_hyphen_equal(c.pawn)(fn(c.pawn));
      });
    });
  });

}).call(this);

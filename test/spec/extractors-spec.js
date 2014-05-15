// Generated by CoughSyrup 0.1.0
(function() {
  define(['mydash', 'jFns', 'constants', 'constructors', 'extractors', 'specConstants'], function(_, j, c, g, x, sc) {
    var contravenes, descr, each_hyphen_contravenes, each_hyphen_fn_hyphen_result_hyphen_equals, each_hyphen_satisfies, each_hyphen_throws, gen_hyphen_pred_hyphen_guards, implement_hyphen_specs, implement_hyphen_specs2, implement_hyphen_specs3, satisfies, t, test_hyphen_predicate, test_hyphen_spec, test_hyphen_throwing_hyphen_transformation, test_hyphen_transformation, throws, to_hyphen_be, to_hyphen_be_hyphen_array, to_hyphen_be_hyphen_false, to_hyphen_be_hyphen_fn, to_hyphen_be_hyphen_nbr, to_hyphen_be_hyphen_string, to_hyphen_be_hyphen_true, to_hyphen_equal, to_hyphen_have_hyphen_length, to_hyphen_throw, xdescr, xt;
    descr = j.descr, xdescr = j.xdescr, t = j.t, xt = j.xt, test_hyphen_spec = j.test_hyphen_spec, to_hyphen_throw = j.to_hyphen_throw, to_hyphen_be = j.to_hyphen_be, to_hyphen_equal = j.to_hyphen_equal, to_hyphen_be_hyphen_true = j.to_hyphen_be_hyphen_true, to_hyphen_be_hyphen_false = j.to_hyphen_be_hyphen_false, satisfies = j.satisfies, contravenes = j.contravenes, throws = j.throws, each_hyphen_satisfies = j.each_hyphen_satisfies, each_hyphen_contravenes = j.each_hyphen_contravenes, each_hyphen_throws = j.each_hyphen_throws, to_hyphen_be_hyphen_fn = j.to_hyphen_be_hyphen_fn, test_hyphen_predicate = j.test_hyphen_predicate, test_hyphen_transformation = j.test_hyphen_transformation, test_hyphen_throwing_hyphen_transformation = j.test_hyphen_throwing_hyphen_transformation, gen_hyphen_pred_hyphen_guards = j.gen_hyphen_pred_hyphen_guards, implement_hyphen_specs = j.implement_hyphen_specs, implement_hyphen_specs2 = j.implement_hyphen_specs2, implement_hyphen_specs3 = j.implement_hyphen_specs3;
    to_hyphen_be_hyphen_array = function(val) {
      return to_hyphen_equal(jasmine.any(Array))(val);
    };
    to_hyphen_be_hyphen_string = function(val) {
      return to_hyphen_equal(jasmine.any(String))(val);
    };
    to_hyphen_be_hyphen_nbr = function(val) {
      return to_hyphen_equal(jasmine.any(Number))(val);
    };
    to_hyphen_have_hyphen_length = function(length) {
      return function(val) {
        return to_hyphen_equal(length)(_.length(val));
      };
    };
    each_hyphen_fn_hyphen_result_hyphen_equals = function(expected) {
      return function(fn) {
        return function(val) {
          return _.each(function(val) {
            return to_hyphen_equal(expected)(fn(val));
          })(val);
        };
      };
    };
    return descr('test extractors.cough')(function() {
      var bd, initial_hyphen_board, invalid_hyphen_chessman, invalid_hyphen_pos, passant, pos0_hyphen_0, pos1, pos2, pos4_hyphen_5, rts, src, tgt;
      bd = sc.boards[0];
      passant = sc.passant_hyphen_positions[0];
      pos1 = sc.positions[0];
      pos2 = sc.positions[1];
      pos0_hyphen_0 = g.generate_hyphen_position(0, 0);
      pos4_hyphen_5 = g.generate_hyphen_position(4, 5);
      initial_hyphen_board = sc.initial_hyphen_board;
      invalid_hyphen_chessman = sc.invalid_hyphen_chessmen[0];
      invalid_hyphen_pos = sc.invalid_hyphen_positions[0];
      rts = sc.castling_hyphen_rights[0];
      src = sc.positions[0];
      tgt = sc.positions[1];
      t('test x.to-1d')(function() {
        var fn;
        fn = x.to_hyphen_1d;
        to_hyphen_equal(13)(fn(pos1));
        to_hyphen_equal(61)(fn(pos2));
        return to_hyphen_throw(fn)(invalid_hyphen_pos);
      });
      t('test x.corresponding-black-chessman')(function() {
        var fn;
        fn = x.corresponding_hyphen_black_hyphen_chessman;
        to_hyphen_equal(c.black_hyphen_knight)(fn(c.white_hyphen_knight));
        to_hyphen_equal(c.black_hyphen_rook)(fn(c.black_hyphen_rook));
        return to_hyphen_throw(fn)(invalid_hyphen_chessman);
      });
      t('test x.chessman-type-at')(function() {
        var fn;
        fn = x.chessman_hyphen_type_hyphen_at;
        to_hyphen_equal(c.rook)(fn(initial_hyphen_board)(pos0_hyphen_0));
        return to_hyphen_throw(fn(pos1))(pos2);
      });
      t('text x.chessman-type-of')(function() {
        var fn;
        fn = x.chessman_hyphen_type_hyphen_of;
        to_hyphen_equal(c.king)(fn(c.black_hyphen_king));
        to_hyphen_equal(c.king)(fn(c.white_hyphen_king));
        to_hyphen_equal(c.bishop)(fn(c.black_hyphen_bishop));
        return each_hyphen_throws(fn)([c.king, bd]);
      });
      t('test x.color-at')(function() {
        var fn;
        fn = x.color_hyphen_at;
        to_hyphen_equal(c.black)(fn(initial_hyphen_board)(pos0_hyphen_0));
        return to_hyphen_throw(fn(pos0_hyphen_0))(pos0_hyphen_0);
      });
      t('test x.color-of')(function() {
        var fn;
        fn = x.color_hyphen_of;
        to_hyphen_equal(c.black)(fn(c.black_hyphen_king));
        to_hyphen_equal(c.white)(fn(c.white_hyphen_king));
        to_hyphen_equal(c.black)(fn(c.black_hyphen_bishop));
        return each_hyphen_throws(fn)([c.king, bd]);
      });
      t('test x.file-of')(function() {
        var fn;
        fn = x.file_hyphen_of;
        to_hyphen_equal(0)(fn(pos0_hyphen_0));
        to_hyphen_equal(5)(fn(pos4_hyphen_5));
        return to_hyphen_throw(fn)(bd);
      });
      t('test x.rank-&-file-from')(function() {
        var fn;
        fn = x.rank_hyphen__ampersand__hyphen_file_hyphen_from;
        to_hyphen_equal([0, 0])(fn(pos0_hyphen_0));
        to_hyphen_equal([4, 5])(fn(pos4_hyphen_5));
        return to_hyphen_throw(fn)(bd);
      });
      t('test x.rank-of')(function() {
        var fn;
        fn = x.rank_hyphen_of;
        to_hyphen_equal(0)(fn(pos0_hyphen_0));
        to_hyphen_equal(4)(fn(pos4_hyphen_5));
        return each_hyphen_throws(fn)([bd, void 0]);
      });
      return t('test x.square-at')(function() {
        var fn, local_hyphen_pos;
        fn = x.square_hyphen_at;
        local_hyphen_pos = g.generate_hyphen_position(2, 0);
        to_hyphen_equal(c.black_hyphen_rook)(fn(initial_hyphen_board)(pos0_hyphen_0));
        to_hyphen_equal(c.empty_hyphen_square)(fn(initial_hyphen_board)(local_hyphen_pos));
        return to_hyphen_throw(fn(pos0_hyphen_0))(pos0_hyphen_0);
      });
    });
  });

}).call(this);

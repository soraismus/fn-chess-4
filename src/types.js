// Generated by CoughSyrup 0.1.0
(function() {
  define(['mydash', 'constants'], function(_, c) {
    var black_question_, board_question_, bounded_question_, castling_hyphen_right_hyphen_set_question_, castling_hyphen_right_question_, chart2_question_, chessman_hyphen_type_question_, chessman_question_, color_hyphen_pair_question_, color_question_, context_question_, empty_question_, has, inessent_question_, integral_hyphen_pair_question_, pair_question_, passant_hyphen_position_question_, path_question_, pawn_hyphen_direction_question_, position_hyphen_component_question_, position_question_, satisfies_hyphen_regex_question_, square_question_, unset_hyphen_passant_hyphen_position_question_;
    has = function(owner) {
      var fn;
      fn = Object.hasOwnProperty.bind(owner);
      return function(prop) {
        return fn(prop);
      };
    };
    satisfies_hyphen_regex_question_ = function(regex) {
      return function(val) {
        if (_.isString(val)) {
          return _.regexTest(regex)(val);
        } else {
          return false;
        }
      };
    };
    bounded_question_ = function(intg) {
      _.vowInt(intg);
      return _.iBtw(0)(7)(intg);
    };
    empty_question_ = function(square) {
      return square === c.empty_hyphen_square;
    };
    inessent_question_ = function(pos) {
      return _.both(bounded_question_)(pos);
    };
    black_question_ = function(color) {
      return color === c.black;
    };
    board_question_ = function(val) {
      return satisfies_hyphen_regex_question_(/^[kqrbnp-]{64,64}$/i)(val);
    };
    castling_hyphen_right_question_ = function(val) {
      return satisfies_hyphen_regex_question_(/^[KQkq]$/)(val);
    };
    castling_hyphen_right_hyphen_set_question_ = function(val) {
      return satisfies_hyphen_regex_question_(/(^-$)|(^K?Q?k?q?$)/)(val);
    };
    chart2_question_ = function(val) {
      return _.isHash(val) && (function(has) {
        return has('board') && has('source') && has('castlingRights') && has('passantPosition');
      })(has(val));
    };
    chessman_question_ = function(val) {
      return satisfies_hyphen_regex_question_(/^[kqrbnp]$/i)(val);
    };
    chessman_hyphen_type_question_ = function(val) {
      return _.contains(c.chessman_hyphen_types)(val);
    };
    color_question_ = function(val) {
      return _.contains(c.colors)(val);
    };
    color_hyphen_pair_question_ = function(val) {
      return pair_question_(val) && _.both(color_question_)(val);
    };
    context_question_ = function(val) {
      return board_question_(val['board']) && castling_hyphen_right_hyphen_set_question_(val['castlingRights']) && passant_hyphen_position_question_(val['passantPosition']);
    };
    integral_hyphen_pair_question_ = function(val) {
      return pair_question_(val) && _.both(_.isInteger)(val);
    };
    pair_question_ = function(val) {
      return _.isArray(val) && _.length(val) === 2;
    };
    passant_hyphen_position_question_ = function(pos) {
      return unset_hyphen_passant_hyphen_position_question_(pos) || position_question_(pos);
    };
    path_question_ = function(val) {
      return pair_question_(val) && _.both(position_question_)(val);
    };
    pawn_hyphen_direction_question_ = function(val) {
      return val === 1 || val === -1;
    };
    position_question_ = function(val) {
      return integral_hyphen_pair_question_(val) && inessent_question_(val);
    };
    position_hyphen_component_question_ = function(val) {
      return bounded_question_(val) && _.isInteger(val);
    };
    square_question_ = function(val) {
      return chessman_question_(val) || empty_question_(val);
    };
    unset_hyphen_passant_hyphen_position_question_ = function(val) {
      return val === c.unset_hyphen_passant_hyphen_pos;
    };
    return {
      black_question_: black_question_,
      board_question_: board_question_,
      bounded_question_: bounded_question_,
      castling_hyphen_right_question_: castling_hyphen_right_question_,
      castling_hyphen_right_hyphen_set_question_: castling_hyphen_right_hyphen_set_question_,
      chart2_question_: chart2_question_,
      chessman_question_: chessman_question_,
      chessman_hyphen_type_question_: chessman_hyphen_type_question_,
      color_question_: color_question_,
      color_hyphen_pair_question_: color_hyphen_pair_question_,
      context_question_: context_question_,
      empty_question_: empty_question_,
      inessent_question_: inessent_question_,
      integral_hyphen_pair_question_: integral_hyphen_pair_question_,
      passant_hyphen_position_question_: passant_hyphen_position_question_,
      path_question_: path_question_,
      pawn_hyphen_direction_question_: pawn_hyphen_direction_question_,
      position_question_: position_question_,
      position_hyphen_component_question_: position_hyphen_component_question_,
      square_question_: square_question_,
      unset_hyphen_passant_hyphen_position_question_: unset_hyphen_passant_hyphen_position_question_
    };
  });

}).call(this);

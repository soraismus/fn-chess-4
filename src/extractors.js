// Generated by CoughSyrup 0.1.0
(function() {
  define(['mydash', 'constants', 'types', 'assertions'], function(_, c, y, v) {
    var chessman_hyphen_positions_hyphen_from, chessman_hyphen_type_hyphen_at, chessman_hyphen_type_hyphen_of, color_hyphen_at, color_hyphen_of, colors_hyphen_at, corresponding_hyphen_black_hyphen_chessman, file_hyphen_of, of_hyphen_color_question_, rank_hyphen__ampersand__hyphen_file_hyphen_from, rank_hyphen_of, square_hyphen_at, to_hyphen_1d, to_hyphen_2d;
    to_hyphen_1d = function(pos) {
      var file, rank;
      v.vow_hyphen_position(pos);
      rank = rank_hyphen_of(pos);
      file = file_hyphen_of(pos);
      return 8 * rank + file;
    };
    to_hyphen_2d = function(idx) {
      return [_.floor(idx / 8), idx % 8];
    };
    corresponding_hyphen_black_hyphen_chessman = function(chessman) {
      v.vow_hyphen_chessman(chessman);
      if (_.isUC(chessman)) {
        return _.toLC(chessman);
      } else {
        return chessman;
      }
    };
    of_hyphen_color_question_ = function(color) {
      return function(square) {
        v.vow_hyphen_color(color);
        v.vow_hyphen_square(square);
        return color === color_hyphen_of(square);
      };
    };
    chessman_hyphen_positions_hyphen_from = function(board, color) {
      var get_hyphen_pos, i, positions, split_hyphen_board;
      v.vow_hyphen_board(board);
      v.vow_hyphen_color(color);
      i = -1;
      split_hyphen_board = board.split('');
      positions = [];
      get_hyphen_pos = function(color) {
        var color_hyphen_pred;
        color_hyphen_pred = of_hyphen_color_question_(color);
        return function(sq) {
          i += 1;
          if (color_hyphen_pred(sq)) {
            return positions.push(to_hyphen_2d(i));
          }
        };
      };
      _.each(get_hyphen_pos(color))(split_hyphen_board);
      return positions;
    };
    chessman_hyphen_type_hyphen_at = function(board) {
      return function(pos) {
        v.vow_hyphen_board(board);
        v.vow_hyphen_position(pos);
        return chessman_hyphen_type_hyphen_of(square_hyphen_at(board)(pos));
      };
    };
    chessman_hyphen_type_hyphen_of = function(chessman) {
      var abbrev, type_hyphen_of;
      v.vow_hyphen_chessman(chessman);
      abbrev = corresponding_hyphen_black_hyphen_chessman(chessman);
      type_hyphen_of = _.zipAssign(c.black_hyphen_chessmen)(c.chessman_hyphen_types);
      return type_hyphen_of[abbrev];
    };
    color_hyphen_at = function(board) {
      return function(pos) {
        v.vow_hyphen_board(board);
        v.vow_hyphen_position(pos);
        return color_hyphen_of(square_hyphen_at(board)(pos));
      };
    };
    color_hyphen_of = function(square) {
      v.vow_hyphen_square(square);
      return _.switchWith(c.absent_hyphen_color)([_.isLC, _.isUC])([c.black, c.white])(square);
    };
    colors_hyphen_at = function(board) {
      return function(positions) {
        v.vow_hyphen_board(board);
        v.vow_hyphen_all_hyphen_positions(positions);
        return _.map(color_hyphen_at(board))(positions);
      };
    };
    file_hyphen_of = function(val) {
      var evaluators;
      _.vowStruct([y.position_question_, y.setting_question_])(val);
      evaluators = [
        function(_arg) {
          var file, rank;
          rank = _arg[0], file = _arg[1];
          return file;
        }, function(_arg) {
          var board, file, rank, _ref;
          board = _arg[0], (_ref = _arg[1], rank = _ref[0], file = _ref[1]);
          return file;
        }
      ];
      return _["switch"]([y.position_question_, y.setting_question_])(evaluators)(val);
    };
    rank_hyphen__ampersand__hyphen_file_hyphen_from = function(val) {
      v.vow_hyphen_integral_hyphen_pair(val);
      return val;
    };
    rank_hyphen_of = function(val) {
      var evaluators;
      _.vowStruct([y.position_question_, y.setting_question_])(val);
      evaluators = [
        function(_arg) {
          var file, rank;
          rank = _arg[0], file = _arg[1];
          return rank;
        }, function(_arg) {
          var board, file, rank, _ref;
          board = _arg[0], (_ref = _arg[1], rank = _ref[0], file = _ref[1]);
          return rank;
        }
      ];
      return _["switch"]([y.position_question_, y.setting_question_])(evaluators)(val);
    };
    square_hyphen_at = function(board) {
      return function(pos) {
        v.vow_hyphen_board(board);
        v.vow_hyphen_position(pos);
        return _.charAt(to_hyphen_1d(pos))(board);
      };
    };
    return {
      chessman_hyphen_positions_hyphen_from: chessman_hyphen_positions_hyphen_from,
      chessman_hyphen_type_hyphen_at: chessman_hyphen_type_hyphen_at,
      chessman_hyphen_type_hyphen_of: chessman_hyphen_type_hyphen_of,
      corresponding_hyphen_black_hyphen_chessman: corresponding_hyphen_black_hyphen_chessman,
      color_hyphen_at: color_hyphen_at,
      color_hyphen_of: color_hyphen_of,
      colors_hyphen_at: colors_hyphen_at,
      file_hyphen_of: file_hyphen_of,
      rank_hyphen__ampersand__hyphen_file_hyphen_from: rank_hyphen__ampersand__hyphen_file_hyphen_from,
      rank_hyphen_of: rank_hyphen_of,
      square_hyphen_at: square_hyphen_at,
      to_hyphen_1d: to_hyphen_1d,
      to_hyphen_2d: to_hyphen_2d
    };
  });

}).call(this);

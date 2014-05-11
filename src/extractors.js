// Generated by CoughSyrup 0.1.0
(function() {
  define(['mydash', 'constants', 'types', 'assertions'], function(_, c, y, v) {
    var board_hyphen_from, castling_hyphen_rights_hyphen_from, chessman_hyphen_type_hyphen_at, chessman_hyphen_type_hyphen_of, chessmen_hyphen_from, color_hyphen_at, color_hyphen_of, colors_hyphen_at, corresponding_hyphen_black_hyphen_chessman, file_hyphen_of, map_hyphen_from, passant_hyphen_from, path_hyphen_from, position_hyphen_from, rank_hyphen__ampersand__hyphen_file_hyphen_from, rank_hyphen_of, split_hyphen__ampersand__hyphen_indexify, square_hyphen_at, src_hyphen_from, src_hyphen_setting_hyphen_from, tgt_hyphen_from, tgt_hyphen_setting_hyphen_from, to_hyphen_1d;
    split_hyphen__ampersand__hyphen_indexify = function(str) {
      var array, i, indexify;
      array = _.split('')(str);
      i = -1;
      indexify = function(component) {
        i += 1;
        return [component, i];
      };
      return _.map(indexify)(array);
    };
    to_hyphen_1d = function(pos) {
      var file, rank;
      v.vow_hyphen_position(pos);
      rank = rank_hyphen_of(pos);
      file = file_hyphen_of(pos);
      return 8 * rank + file;
    };
    corresponding_hyphen_black_hyphen_chessman = function(chessman) {
      v.vow_hyphen_chessman(chessman);
      if (_.isUC(chessman)) {
        return _.toLC(chessman);
      } else {
        return chessman;
      }
    };
    board_hyphen_from = function(val) {
      var evaluators;
      _.vowStruct([y.setting_question_, y.map_question_, y.chart_question_, y.chart2_question_])(val);
      evaluators = [
        function(_arg) {
          var board, pos;
          board = _arg[0], pos = _arg[1];
          return board;
        }, function(_arg) {
          var board, path;
          board = _arg[0], path = _arg[1];
          return board;
        }, function(_arg) {
          var board, path, _ref;
          (_ref = _arg[0], board = _ref.board), path = _arg[1];
          return board;
        }, function(_arg) {
          var board;
          board = _arg.board;
          return board;
        }
      ];
      return _["switch"]([y.setting_question_, y.map_question_, y.chart_question_, y.chart2_question_])(evaluators)(val);
    };
    castling_hyphen_rights_hyphen_from = function(val) {
      var evaluators;
      _.vowStruct([y.chart_question_, y.chart2_question_])(val);
      evaluators = [
        function(_arg) {
          var castlingRights;
          castlingRights = _arg[0].castlingRights;
          return castlingRights;
        }, function(_arg) {
          var castlingRights;
          castlingRights = _arg.castlingRights;
          return castlingRights;
        }
      ];
      return _["switch"]([y.chart_question_, y.chart2_question_])(evaluators)(val);
    };
    chessmen_hyphen_from = function(board, color) {
      var chessmen_hyphen_of_hyphen_specified_hyphen_color, color_hyphen_predicate, squares;
      squares = split_hyphen__ampersand__hyphen_indexify(-1)(board);
      color_hyphen_predicate = function(_arg) {
        var idx, sq;
        sq = _arg[0], idx = _arg[1];
        return of_hyphen_color_question_(color)(sq);
      };
      return chessmen_hyphen_of_hyphen_specified_hyphen_color = _.filter(color_hyphen_predicate)(squares);
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
    map_hyphen_from = function(chart) {
      var board, path, _ref;
      v.vow_hyphen_chart(chart);
      (_ref = chart[0], board = _ref.board), path = chart[1];
      return [board, path];
    };
    path_hyphen_from = function(val) {
      _.vowStruct([y.map_question_, y.chart_question_])(val);
      return val[1];
    };
    passant_hyphen_from = function(val) {
      var evaluators;
      _.vowStruct([y.chart_question_, y.chart2_question_])(val);
      evaluators = [
        function(_arg) {
          var passantPosition;
          passantPosition = _arg[0].passantPosition;
          return passantPosition;
        }, function(_arg) {
          var passantPosition;
          passantPosition = _arg.passantPosition;
          return passantPosition;
        }
      ];
      return _["switch"]([y.chart_question_, y.chart2_question_])(evaluators)(val);
    };
    position_hyphen_from = function(val) {
      var evaluators;
      _.vowStruct([y.setting_question_, y.map_question_, y.chart2_question_])(val);
      evaluators = [
        function(_arg) {
          var board, pos;
          board = _arg[0], pos = _arg[1];
          return pos;
        }, function(_arg) {
          var board, src, tgt, _ref;
          board = _arg[0], (_ref = _arg[1], tgt = _ref[0], src = _ref[1]);
          return src;
        }, function(_arg) {
          var source;
          source = _arg.source;
          return source;
        }
      ];
      return _["switch"]([y.setting_question_, y.map_question_, y.chart2_question_])(evaluators)(val);
    };
    rank_hyphen__ampersand__hyphen_file_hyphen_from = function(val) {
      var evaluators, types;
      _.vowStruct([y.position_question_, y.integral_hyphen_pair_question_, y.setting_question_, y.chart2_question_])(val);
      types = [y.position_question_, y.integral_hyphen_pair_question_, y.setting_question_, y.chart2_question_];
      evaluators = [
        _.identity, _.identity, _.second, function(_arg) {
          var source;
          source = _arg.source;
          return source;
        }
      ];
      return _["switch"](types)(evaluators)(val);
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
    src_hyphen_from = function(val) {
      var evaluators;
      _.vowStruct([y.path_question_, y.map_question_, y.chart_question_, y.chart2_question_])(val);
      evaluators = [
        function(_arg) {
          var src, tgt;
          tgt = _arg[0], src = _arg[1];
          return src;
        }, function(_arg) {
          var board, src, tgt, _ref;
          board = _arg[0], (_ref = _arg[1], tgt = _ref[0], src = _ref[1]);
          return src;
        }, function(_arg) {
          var board, src, tgt, _ref, _ref1;
          (_ref = _arg[0], board = _ref.board), (_ref1 = _arg[1], tgt = _ref1[0], src = _ref1[1]);
          return src;
        }, function(_arg) {
          var source;
          source = _arg.source;
          return source;
        }
      ];
      return _["switch"]([y.path_question_, y.map_question_, y.chart_question_, y.chart_question_])(evaluators)(val);
    };
    src_hyphen_setting_hyphen_from = function(val) {
      var evaluators;
      _.vowStruct([y.map_question_, y.chart_question_, y.chart2_question_])(val);
      evaluators = [
        function(_arg) {
          var board, src, tgt, _ref;
          board = _arg[0], (_ref = _arg[1], tgt = _ref[0], src = _ref[1]);
          return [board, src];
        }, function(_arg) {
          var board, src, tgt, _ref, _ref1;
          (_ref = _arg[0], board = _ref.board), (_ref1 = _arg[1], tgt = _ref1[0], src = _ref1[1]);
          return [board, src];
        }, function(_arg) {
          var board, source;
          board = _arg.board, source = _arg.source;
          return g.generate_hyphen_setting(board, source);
        }
      ];
      return _["switch"]([y.map_question_, y.chart_question_, y.chart_question_])(evaluators)(val);
    };
    tgt_hyphen_from = function(val) {
      var evaluators;
      _.vowStruct([y.path_question_, y.map_question_, y.chart_question_])(val);
      evaluators = [
        function(_arg) {
          var src, tgt;
          tgt = _arg[0], src = _arg[1];
          return tgt;
        }, function(_arg) {
          var board, src, tgt, _ref;
          board = _arg[0], (_ref = _arg[1], tgt = _ref[0], src = _ref[1]);
          return tgt;
        }, function(_arg) {
          var board, src, tgt, _ref, _ref1;
          (_ref = _arg[0], board = _ref.board), (_ref1 = _arg[1], tgt = _ref1[0], src = _ref1[1]);
          return tgt;
        }
      ];
      return _["switch"]([y.path_question_, y.map_question_, y.chart_question_])(evaluators)(val);
    };
    tgt_hyphen_setting_hyphen_from = function(val) {
      var evaluators;
      _.vowStruct([y.map_question_, y.chart_question_])(val);
      evaluators = [
        function(_arg) {
          var board, src, tgt, _ref;
          board = _arg[0], (_ref = _arg[1], tgt = _ref[0], src = _ref[1]);
          return [board, tgt];
        }, function(_arg) {
          var board, src, tgt, _ref, _ref1;
          (_ref = _arg[0], board = _ref.board), (_ref1 = _arg[1], tgt = _ref1[0], src = _ref1[1]);
          return [board, tgt];
        }
      ];
      return _["switch"]([y.map_question_, y.chart_question_])(evaluators)(val);
    };
    return {
      board_hyphen_from: board_hyphen_from,
      castling_hyphen_rights_hyphen_from: castling_hyphen_rights_hyphen_from,
      chessman_hyphen_type_hyphen_at: chessman_hyphen_type_hyphen_at,
      chessman_hyphen_type_hyphen_of: chessman_hyphen_type_hyphen_of,
      corresponding_hyphen_black_hyphen_chessman: corresponding_hyphen_black_hyphen_chessman,
      color_hyphen_at: color_hyphen_at,
      color_hyphen_of: color_hyphen_of,
      colors_hyphen_at: colors_hyphen_at,
      file_hyphen_of: file_hyphen_of,
      map_hyphen_from: map_hyphen_from,
      chessmen_hyphen_from: chessmen_hyphen_from,
      path_hyphen_from: path_hyphen_from,
      passant_hyphen_from: passant_hyphen_from,
      position_hyphen_from: position_hyphen_from,
      rank_hyphen__ampersand__hyphen_file_hyphen_from: rank_hyphen__ampersand__hyphen_file_hyphen_from,
      rank_hyphen_of: rank_hyphen_of,
      split_hyphen__ampersand__hyphen_indexify: split_hyphen__ampersand__hyphen_indexify,
      square_hyphen_at: square_hyphen_at,
      src_hyphen_from: src_hyphen_from,
      src_hyphen_setting_hyphen_from: src_hyphen_setting_hyphen_from,
      tgt_hyphen_from: tgt_hyphen_from,
      tgt_hyphen_setting_hyphen_from: tgt_hyphen_setting_hyphen_from,
      to_hyphen_1d: to_hyphen_1d
    };
  });

}).call(this);

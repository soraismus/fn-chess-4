// Generated by CoughSyrup 0.1.0
(function() {
  define(['mydash', 'constructors', 'extractors', 'types', 'utilities', 'piece', 'assertions'], function(_, g, x, y, u, piece_hyphen_fns, v) {
    var accumulate_hyphen_till_hyphen_blocked, getPotentialKingAttacks, getPotentialMoves, public_hyphen_fns;
    accumulate_hyphen_till_hyphen_blocked = function(board, color1) {
      return function(rank, file, dir) {
        var color2, color_hyphen_at, empty_hyphen_at_question_, file_hyphen_diff, gen_hyphen_pos, inessent_question_, new_hyphen_pos, possible_hyphen_moves, rank_hyphen_diff, _ref, _ref1;
        possible_hyphen_moves = [];
        _ref = x.rank_hyphen__ampersand__hyphen_file_hyphen_from(dir), rank_hyphen_diff = _ref[0], file_hyphen_diff = _ref[1];
        gen_hyphen_pos = g.generate_hyphen_position_bang_;
        inessent_question_ = u.inessent_question_;
        empty_hyphen_at_question_ = u.empty_hyphen_at_question_(board);
        color_hyphen_at = x.color_hyphen_at(board);
        while (true) {
          _ref1 = [rank + rank_hyphen_diff, file + file_hyphen_diff], rank = _ref1[0], file = _ref1[1];
          new_hyphen_pos = gen_hyphen_pos(rank, file);
          if (!inessent_question_(new_hyphen_pos)) {
            break;
          }
          if (empty_hyphen_at_question_(new_hyphen_pos)) {
            possible_hyphen_moves.push(new_hyphen_pos);
          } else {
            color2 = color_hyphen_at(new_hyphen_pos);
            if (u.opponent_question_([color1, color2])) {
              possible_hyphen_moves.push(new_hyphen_pos);
            }
            break;
          }
        }
        return possible_hyphen_moves;
      };
    };
    getPotentialMoves = function(chart2, chessman_hyphen_type) {
      var accumulate, board, color, dir, file, offsets, potential_hyphen_moves, rank, src, _i, _len, _ref;
      v.vow_hyphen_chart2(chart2);
      v.vow_hyphen_chessman_hyphen_type(chessman_hyphen_type);
      potential_hyphen_moves = [];
      board = x.board_hyphen_from(chart2);
      src = x.position_hyphen_from(chart2);
      offsets = u.offsets_hyphen_for(chessman_hyphen_type);
      color = x.color_hyphen_at(board)(src);
      accumulate = accumulate_hyphen_till_hyphen_blocked(board, color);
      _ref = x.rank_hyphen__ampersand__hyphen_file_hyphen_from(src), rank = _ref[0], file = _ref[1];
      for (_i = 0, _len = offsets.length; _i < _len; _i++) {
        dir = offsets[_i];
        potential_hyphen_moves = potential_hyphen_moves.concat(accumulate(rank, file, dir));
      }
      return potential_hyphen_moves;
    };
    getPotentialKingAttacks = getPotentialMoves;
    public_hyphen_fns = _.defaults([piece_hyphen_fns])({
      getPotentialKingAttacks: getPotentialKingAttacks,
      getPotentialMoves: getPotentialMoves
    });
    public_hyphen_fns.move = public_hyphen_fns.basicMove;
    return public_hyphen_fns;
  });

}).call(this);

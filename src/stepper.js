// Generated by CoughSyrup 0.1.0
(function() {
  define(['base-helpers', 'extractors', 'utilities', 'constructors', 'piece', 'assertions'], function(_, x, u, g, piece_hyphen_fns, v) {
    var getBasicPotentialMoves, public_hyphen_fns;
    getBasicPotentialMoves = function(bd, src, rts, passant, type) {
      var available_question_, dir, file, file_hyphen_diff, gen_hyphen_pos_bang_, inessent_question_, moves, new_hyphen_file, new_hyphen_rank, offsets, rank, rank_hyphen__ampersand__hyphen_file_hyphen_from, rank_hyphen_diff, tgt, _i, _len, _ref, _ref1;
      v.vow_hyphen_board(bd);
      v.vow_hyphen_position(src);
      v.vow_hyphen_chessman_hyphen_type(type);
      moves = [];
      rank_hyphen__ampersand__hyphen_file_hyphen_from = x.rank_hyphen__ampersand__hyphen_file_hyphen_from;
      _ref = rank_hyphen__ampersand__hyphen_file_hyphen_from(src), rank = _ref[0], file = _ref[1];
      offsets = u.offsets_hyphen_for(type);
      inessent_question_ = u.inessent_question_;
      gen_hyphen_pos_bang_ = g.generate_hyphen_position_bang_;
      available_question_ = u.available_question_(bd, src);
      for (_i = 0, _len = offsets.length; _i < _len; _i++) {
        dir = offsets[_i];
        _ref1 = rank_hyphen__ampersand__hyphen_file_hyphen_from(dir), rank_hyphen_diff = _ref1[0], file_hyphen_diff = _ref1[1];
        new_hyphen_rank = rank + rank_hyphen_diff;
        new_hyphen_file = file + file_hyphen_diff;
        tgt = gen_hyphen_pos_bang_(new_hyphen_rank, new_hyphen_file);
        if (inessent_question_(tgt) && available_question_(tgt)) {
          moves.push(tgt);
        }
      }
      return moves;
    };
    public_hyphen_fns = _.defaults(piece_hyphen_fns)({
      getBasicPotentialMoves: getBasicPotentialMoves
    });
    return public_hyphen_fns;
  });

}).call(this);

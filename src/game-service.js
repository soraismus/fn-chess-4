// Generated by CoughSyrup 0.1.0
(function() {
  define(['base-helpers', 'constants', 'utilities', 'extractors', 'slider', 'king', 'rook', 'knight', 'pawn', 'assertions'], function(_, c, u, x, slider_hyphen_fns, king_hyphen_fns, rook_hyphen_fns, knight_hyphen_fns, pawn_hyphen_fns, v) {
    var add_hyphen_msg, call, checkmate_question_, contains, dispatch_hyphen_table, extract_hyphen_props, game_hyphen_completed_hyphen_response, game_hyphen_continues_hyphen_response, generate_hyphen_new_hyphen_ctx, getPotentialKingAttacks, getPotentialMoves, in_hyphen_check_question_, king_hyphen_position_hyphen_for, king_hyphen_safe_hyphen_response, king_hyphen_unsafe_hyphen_response, modifyCastlingRights, move, move_hyphen_illegal_hyphen_response, move_hyphen_legal_hyphen_response, move_hyphen_legal_question_, opponent_hyphen_in_hyphen_check_question_, possible_hyphen_checkmate_hyphen_response, query_hyphen_game_hyphen_service, setPassantPosition, setPromotionPosition, test_hyphen_mode, vulnerable_hyphen_positions_hyphen_for;
    dispatch_hyphen_table = {};
    dispatch_hyphen_table[c.king] = king_hyphen_fns;
    dispatch_hyphen_table[c.queen] = slider_hyphen_fns;
    dispatch_hyphen_table[c.rook] = rook_hyphen_fns;
    dispatch_hyphen_table[c.bishop] = slider_hyphen_fns;
    dispatch_hyphen_table[c.knight] = knight_hyphen_fns;
    dispatch_hyphen_table[c.pawn] = pawn_hyphen_fns;
    add_hyphen_msg = function(ctx, msg) {
      var board, castlingRights, passantPosition, player;
      board = ctx.board, player = ctx.player, castlingRights = ctx.castlingRights, passantPosition = ctx.passantPosition;
      return {
        board: board,
        player: player,
        castlingRights: castlingRights,
        passantPosition: passantPosition,
        message: msg
      };
    };
    call = function(fn_hyphen_name) {
      return function(chessman_hyphen_type) {
        v.vow_hyphen_string(fn_hyphen_name);
        v.vow_hyphen_chessman_hyphen_type(chessman_hyphen_type);
        return dispatch_hyphen_table[chessman_hyphen_type][fn_hyphen_name];
      };
    };
    checkmate_question_ = function(bd, passant, color) {
      var ally_hyphen_pos, ally_hyphen_positions, new_hyphen_bd, potential_hyphen_moves, potential_hyphen_mv, _i, _j, _len, _len1;
      v.vow_hyphen_board(bd);
      v.vow_hyphen_passant_hyphen_position(passant);
      v.vow_hyphen_color(color);
      ally_hyphen_positions = x.chessman_hyphen_positions_hyphen_from(bd, color);
      for (_i = 0, _len = ally_hyphen_positions.length; _i < _len; _i++) {
        ally_hyphen_pos = ally_hyphen_positions[_i];
        potential_hyphen_moves = getPotentialMoves(bd, ally_hyphen_pos, c.no_hyphen_castling_hyphen_rts, passant);
        for (_j = 0, _len1 = potential_hyphen_moves.length; _j < _len1; _j++) {
          potential_hyphen_mv = potential_hyphen_moves[_j];
          new_hyphen_bd = move(bd, ally_hyphen_pos, passant)(potential_hyphen_mv);
          if (!in_hyphen_check_question_(new_hyphen_bd, color)) {
            return false;
          }
        }
      }
      return true;
    };
    contains = function(potential_hyphen_positions, tgt) {
      return potential_hyphen_positions.some(u.same_hyphen_position_question_(tgt));
    };
    extract_hyphen_props = function(ctx) {
      var board, castlingRights, passantPosition, player;
      board = ctx.board, player = ctx.player, castlingRights = ctx.castlingRights, passantPosition = ctx.passantPosition;
      return [board, player, castlingRights, passantPosition];
    };
    game_hyphen_completed_hyphen_response = function() {
      return {
        message: 'checkmate'
      };
    };
    game_hyphen_continues_hyphen_response = function(new_hyphen_ctx) {
      return add_hyphen_msg(new_hyphen_ctx, 'check');
    };
    generate_hyphen_new_hyphen_ctx = function(new_hyphen_bd, orig_hyphen_ctx, src, tgt) {
      var orig_hyphen_bd, player, rts, _ref;
      _ref = extract_hyphen_props(orig_hyphen_ctx), orig_hyphen_bd = _ref[0], player = _ref[1], rts = _ref[2];
      return {
        board: new_hyphen_bd,
        player: u.opposing_hyphen_color(player),
        castlingRights: modifyCastlingRights(orig_hyphen_bd, src, rts),
        passantPosition: setPassantPosition(orig_hyphen_bd, src, tgt),
        promotionPosition: setPromotionPosition(orig_hyphen_bd, src, tgt)
      };
    };
    getPotentialKingAttacks = function(bd, src) {
      var type;
      v.vow_hyphen_board(bd);
      v.vow_hyphen_position(src);
      type = x.chessman_hyphen_type_hyphen_at(bd)(src);
      return call('getPotentialKingAttacks')(type)(bd, src, type);
    };
    getPotentialMoves = function(bd, src, rts, passant) {
      var type;
      v.vow_hyphen_board(bd);
      v.vow_hyphen_position(src);
      v.vow_hyphen_castling_hyphen_right_hyphen_set(rts);
      v.vow_hyphen_passant_hyphen_position(passant);
      type = x.chessman_hyphen_type_hyphen_at(bd)(src);
      return call('getPotentialMoves')(type)(bd, src, rts, passant, type);
    };
    in_hyphen_check_question_ = function(board, color) {
      var king_hyphen_pos, vuln_hyphen_positions;
      v.vow_hyphen_board(board);
      v.vow_hyphen_color(color);
      king_hyphen_pos = king_hyphen_position_hyphen_for(board, color);
      vuln_hyphen_positions = vulnerable_hyphen_positions_hyphen_for(board, color);
      return contains(vuln_hyphen_positions, king_hyphen_pos);
    };
    king_hyphen_position_hyphen_for = function(board, color) {
      var king;
      v.vow_hyphen_board(board);
      v.vow_hyphen_color(color);
      king = u.black_question_(color) ? c.black_hyphen_king : c.white_hyphen_king;
      return u.to_hyphen_2d(board.indexOf(king));
    };
    king_hyphen_safe_hyphen_response = function(new_hyphen_ctx) {
      var board, player;
      board = new_hyphen_ctx.board, player = new_hyphen_ctx.player;
      if (opponent_hyphen_in_hyphen_check_question_(board, player)) {
        return possible_hyphen_checkmate_hyphen_response(new_hyphen_ctx);
      } else {
        return new_hyphen_ctx;
      }
    };
    king_hyphen_unsafe_hyphen_response = function(ctx) {
      return add_hyphen_msg(ctx, 'illegal move');
    };
    modifyCastlingRights = function(bd, src, rts) {
      var type;
      v.vow_hyphen_board(bd);
      v.vow_hyphen_position(src);
      v.vow_hyphen_castling_hyphen_right_hyphen_set(rts);
      type = x.chessman_hyphen_type_hyphen_at(bd)(src);
      return call('modifyCastlingRights')(type)(rts, src);
    };
    move = function(bd, src, passant) {
      return function(tgt) {
        var type;
        v.vow_hyphen_board(bd);
        v.vow_hyphen_all_hyphen_positions([src, tgt]);
        v.vow_hyphen_passant_hyphen_position(passant);
        type = x.chessman_hyphen_type_hyphen_at(bd)(src);
        return call('move')(type)(bd, src, passant)(tgt);
      };
    };
    move_hyphen_illegal_hyphen_response = function(ctx) {
      return add_hyphen_msg(ctx, 'illegal move');
    };
    move_hyphen_legal_question_ = function(bd, src, rts, passant) {
      return function(tgt) {
        var potential_hyphen_tgts, type;
        v.vow_hyphen_board(bd);
        v.vow_hyphen_all_hyphen_positions([src, tgt]);
        v.vow_hyphen_castling_hyphen_right_hyphen_set(rts);
        v.vow_hyphen_passant_hyphen_position(passant);
        type = x.chessman_hyphen_type_hyphen_at(bd)(src);
        potential_hyphen_tgts = getPotentialMoves(bd, src, rts, passant);
        return contains(potential_hyphen_tgts, tgt);
      };
    };
    move_hyphen_legal_hyphen_response = function(orig_hyphen_ctx, src, tgt) {
      var bd, new_hyphen_bd, new_hyphen_ctx, passant, player, rts, _ref;
      _ref = extract_hyphen_props(orig_hyphen_ctx), bd = _ref[0], player = _ref[1], rts = _ref[2], passant = _ref[3];
      new_hyphen_bd = move(bd, src, passant)(tgt);
      if (in_hyphen_check_question_(new_hyphen_bd, player)) {
        return king_hyphen_unsafe_hyphen_response(orig_hyphen_ctx);
      } else {
        new_hyphen_ctx = generate_hyphen_new_hyphen_ctx(new_hyphen_bd, orig_hyphen_ctx, src, tgt);
        return king_hyphen_safe_hyphen_response(new_hyphen_ctx);
      }
    };
    opponent_hyphen_in_hyphen_check_question_ = in_hyphen_check_question_;
    possible_hyphen_checkmate_hyphen_response = function(new_hyphen_ctx) {
      var board, passantPosition, player;
      board = new_hyphen_ctx.board, player = new_hyphen_ctx.player, passantPosition = new_hyphen_ctx.passantPosition;
      if (checkmate_question_(board, passantPosition, player)) {
        return game_hyphen_completed_hyphen_response();
      } else {
        return game_hyphen_continues_hyphen_response(new_hyphen_ctx);
      }
    };
    query_hyphen_game_hyphen_service = function(ctx, src, tgt) {
      var bd, passant, player, rts, _ref;
      _ref = extract_hyphen_props(ctx), bd = _ref[0], player = _ref[1], rts = _ref[2], passant = _ref[3];
      if (move_hyphen_legal_question_(bd, src, rts, passant)(tgt)) {
        return move_hyphen_legal_hyphen_response(ctx, src, tgt);
      } else {
        return move_hyphen_illegal_hyphen_response(ctx);
      }
    };
    setPassantPosition = function(bd, src, tgt) {
      var chessman, color, type;
      v.vow_hyphen_board(bd);
      v.vow_hyphen_all_hyphen_positions([src, tgt]);
      chessman = x.square_hyphen_at(bd)(src);
      type = x.chessman_hyphen_type_hyphen_of(chessman);
      color = x.color_hyphen_of(chessman);
      return call('setPassantPosition')(type)(color, src, tgt);
    };
    setPromotionPosition = function(bd, src, tgt) {
      var chessman, color, type;
      v.vow_hyphen_board(bd);
      v.vow_hyphen_all_hyphen_positions([src, tgt]);
      chessman = x.square_hyphen_at(bd)(src);
      type = x.chessman_hyphen_type_hyphen_of(chessman);
      color = x.color_hyphen_of(chessman);
      return call('setPromotionPosition')(type)(color, tgt);
    };
    vulnerable_hyphen_positions_hyphen_for = function(board, color) {
      var foe_hyphen_color, foe_hyphen_positions, get_hyphen_potential_hyphen_king_hyphen_attacks;
      v.vow_hyphen_board(board);
      v.vow_hyphen_color(color);
      foe_hyphen_color = u.opposing_hyphen_color(color);
      foe_hyphen_positions = x.chessman_hyphen_positions_hyphen_from(board, foe_hyphen_color);
      get_hyphen_potential_hyphen_king_hyphen_attacks = function(pos) {
        return getPotentialKingAttacks(board, pos);
      };
      return Array.concat.apply(null, foe_hyphen_positions.map(get_hyphen_potential_hyphen_king_hyphen_attacks));
    };
    test_hyphen_mode = {
      call: call,
      checkmate_question_: checkmate_question_,
      getPotentialKingAttacks: getPotentialKingAttacks,
      getPotentialMoves: getPotentialMoves,
      in_hyphen_check_question_: in_hyphen_check_question_,
      king_hyphen_position_hyphen_for: king_hyphen_position_hyphen_for,
      modifyCastlingRights: modifyCastlingRights,
      move: move,
      move_hyphen_legal_question_: move_hyphen_legal_question_,
      query_hyphen_game_hyphen_service: query_hyphen_game_hyphen_service,
      setPassantPosition: setPassantPosition,
      setPromotionPosition: setPromotionPosition,
      vulnerable_hyphen_positions_hyphen_for: vulnerable_hyphen_positions_hyphen_for
    };
    return test_hyphen_mode;
  });

}).call(this);

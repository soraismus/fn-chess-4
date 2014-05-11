// Generated by CoughSyrup 0.1.0
(function() {
  define(['mydash', 'stepper', 'assertions'], function(_, stepper_hyphen_fns, v) {
    var getPotentialKingAttacks, get_hyphen_potential_hyphen_castling_hyphen_moves, public_hyphen_fns;
    get_hyphen_potential_hyphen_castling_hyphen_moves = function(setting, castling_hyphen_rights) {
      v.vow_hyphen_setting(setting);
      return v.vow_hyphen_castling_hyphen_rights(castling_hyphen_rights);
    };
    getPotentialKingAttacks = void 0;
    public_hyphen_fns = _.defaults([stepper_hyphen_fns])({
      getPotentialKingAttacks: getPotentialKingAttacks
    });
    public_hyphen_fns.getPotentialMoves = function(chessman_hyphen_type, setting, castling_hyphen_rights) {
      var basic_hyphen_potential_hyphen_moves;
      v.vow_hyphen_chessman_hyphen_type(chessman_hyphen_type);
      v.vow_hyphen_setting(setting);
      v.vow_hyphen_castling_hyphen_rights(castling_hyphen_rights);
      basic_hyphen_potential_hyphen_moves = public_hyphen_fns.getBasicPotentialMoves(chessman_hyphen_type, setting);
      return basic_hyphen_potential_hyphen_moves.concat(get_hyphen_potential_hyphen_castling_hyphen_moves(setting, castling_hyphen_rights));
    };
    return public_hyphen_fns;
  });

}).call(this);

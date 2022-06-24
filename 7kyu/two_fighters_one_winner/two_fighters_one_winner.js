function declareWinner(fighter1, fighter2, firstAttacker) {
  let attackCount1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  let attackCount2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
 
  while (true) {
    if (attackCount1 < attackCount2) {
      return fighter2.name;
    } else if (attackCount1 > attackCount2) {
      return fighter1.name;
    } else return firstAttacker;
  }
}

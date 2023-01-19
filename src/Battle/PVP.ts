import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(player: Fighter, private playerTwo: Fighter) {
    super(player);
  }

  fight(): number {
    if (this.player.lifePoints > 0 && this.playerTwo.lifePoints > 0) {
      this.player.attack(this.playerTwo);
      this.playerTwo.attack(this.player);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}
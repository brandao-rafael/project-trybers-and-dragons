import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(player: Fighter, private _playerTwo: Fighter) {
    super(player);
  }

  fight(): number {
    if (this.player.lifePoints > 0 && this._playerTwo.lifePoints > 0) {
      this.player.attack(this._playerTwo);
      this._playerTwo.attack(this.player);
    }
    return super.fight();
  }
}
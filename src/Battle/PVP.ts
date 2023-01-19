import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(player: Fighter, private _playerTwo: Fighter) {
    super(player);
  }

  fight(): number {
    while (this.player.lifePoints !== -1 && this._playerTwo.lifePoints !== -1) {
      this.player.attack(this._playerTwo);
      if (this._playerTwo.lifePoints !== -1) {
        this._playerTwo.attack(this.player);
      }
    }
    return super.fight();
  }
}
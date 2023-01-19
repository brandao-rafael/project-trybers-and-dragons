import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(player: Fighter, private _monsters: SimpleFighter[]) {
    super(player);
  }

  fight(): number {
    while (this.player.lifePoints !== -1
      && this._monsters.some((monster) => monster.lifePoints !== -1)) {
      this._monsters.forEach((monster) => {
        this.player.attack(monster);
        monster.attack(this.player);
      });
    }
    return super.fight();
  }
}
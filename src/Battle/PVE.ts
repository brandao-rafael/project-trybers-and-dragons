import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(player: Fighter, private _monsters: SimpleFighter[] | Fighter[]) {
    super(player);
  }

  fight():number {
    this._monsters.map((monster) => {
      if (this.player.lifePoints > 0 && monster.lifePoints > 0) {
        this.player.attack(monster);
        monster.attack(this.player);
      }
      return this.player.lifePoints === -1 ? -1 : 1;
    });
    return super.fight();
  }
}
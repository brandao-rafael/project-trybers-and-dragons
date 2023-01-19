import Monster from './Monster';

export default class Dragon extends Monster {
  constructor(
    protected _lifePoints: number = 999,
  ) { 
    super();
  }

  // get lifePoints():number {
  //   return this._lifePoints;
  // }

  // receiveDamage(attackPoints: number): number {
  //   this._lifePoints -= attackPoints;
  //   if (this._lifePoints <= 0) this._lifePoints = -1;
    
  //   return this._lifePoints;
  // }
}
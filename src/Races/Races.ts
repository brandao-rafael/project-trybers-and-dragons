export default abstract class Races {
  // public name:string;
  // public dexterity: number;
  constructor(
    private readonly _name: string,
    private readonly _dexterity: number,
  ) { }

  get name():string { return this._name; }

  get dexterity():number { return this._dexterity; }

  static createdRacesInstances():number { throw new Error('Not implemented'); }

  abstract get maxLifePoints():number;
}
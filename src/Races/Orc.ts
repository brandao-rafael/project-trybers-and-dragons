import Race from './Race';

export default class Orc extends Race {
  static instances = 0;

  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints:number = 74,
  ) {
    super(name, dexterity);
    Orc.instances += 1;
  }

  static createdRacesInstances(): number {
    return Orc.instances;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }
}
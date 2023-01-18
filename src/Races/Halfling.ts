import Race from './Race';

export default class Halfling extends Race {
  static instances = 0;

  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints:number = 60,
  ) {
    super(name, dexterity);
    Halfling.instances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.instances;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }
}

// 16.14
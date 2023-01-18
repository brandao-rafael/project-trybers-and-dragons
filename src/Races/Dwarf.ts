import Race from './Race';

export default class Dwarf extends Race {
  static instances = 0;
  private _maxLifePoints = 80;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    Dwarf.instances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.instances;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }
}
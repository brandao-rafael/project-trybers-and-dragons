import Race from './Race';

export default class Elf extends Race {
  static instances = 0;

  constructor(
    name: string,
    dexterity: number,
    private _maxLifePoints:number = 99,
  ) {
    super(name, dexterity);
    Elf.instances += 1;
  }

  static createdRacesInstances(): number {
    return Elf.instances;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }
}
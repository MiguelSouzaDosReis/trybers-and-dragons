import Race from './Race';

class Dwarf extends Race {
  _life:number;
  static _QunatityOfInstance = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._life = 80;
    Dwarf._QunatityOfInstance += 1;
  }

  get maxLifePoints(): number {
    return this._life;
  }

  static createdRacesInstances() {
    return Dwarf._QunatityOfInstance;
  }
}

export default Dwarf;
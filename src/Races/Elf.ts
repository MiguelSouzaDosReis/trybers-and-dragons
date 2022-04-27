import Race from './Race';

class Elf extends Race {
  _life:number;
  static _QunatityOfInstance = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._life = 99;
    Elf._QunatityOfInstance += 1;
  }
  
  get maxLifePoints(): number {
    return this._life;
  }
  
  static createdRacesInstances() {
    return Elf._QunatityOfInstance;
  }
}

export default Elf;
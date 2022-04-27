import Race from './Race';

class Orc extends Race {
  _life:number;
  static _QunatityOfInstance = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._life = 74;
    Orc._QunatityOfInstance += 1;
  }
  
  get maxLifePoints(): number {
    return this._life;
  }
  
  static createdRacesInstances() {
    return Orc._QunatityOfInstance;
  }
}

export default Orc;
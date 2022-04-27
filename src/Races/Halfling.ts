import Race from './Race';

class Halfling extends Race {
  _life:number;
  static _QunatityOfInstance = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._life = 60;
    Halfling._QunatityOfInstance += 1;
  }
  
  get maxLifePoints(): number {
    return this._life;
  }
  
  static createdRacesInstances() {
    return Halfling._QunatityOfInstance;
  }
}

export default Halfling;
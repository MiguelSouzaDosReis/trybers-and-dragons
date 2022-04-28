import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  static _QunatityOfInstance = 0;
  _stamina: EnergyType;
  constructor(name:string) {
    super(name);
    Warrior._QunatityOfInstance += 1;
    this._stamina = 'stamina';
  }

  get energyType(): EnergyType {
    return this._stamina;
  }

  static createdArchetypeInstances() {
    return Warrior._QunatityOfInstance;
  }
}

export default Warrior;
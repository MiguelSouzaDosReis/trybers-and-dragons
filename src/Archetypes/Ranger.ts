import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  static _QunatityOfInstance = 0;
  _stamina: EnergyType;
  constructor(name:string) {
    super(name);
    Ranger._QunatityOfInstance += 1;
    this._stamina = 'stamina';
  }

  get energyType(): EnergyType {
    return this._stamina;
  }

  static createdArchetypeInstances() {
    return Ranger._QunatityOfInstance;
  }
}

export default Ranger;
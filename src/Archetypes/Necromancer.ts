import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  static _QunatityOfInstance = 0;
  _mana: EnergyType;
  constructor(name:string) {
    super(name);
    Necromancer._QunatityOfInstance += 1;
    this._mana = 'mana';
  }

  get energyType(): EnergyType {
    return this._mana;
  }

  static createdArchetypeInstances() {
    return Necromancer._QunatityOfInstance;
  } 
}

export default Necromancer;
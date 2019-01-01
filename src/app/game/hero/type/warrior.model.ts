import { Hero } from '../hero.model';
import { ItemType } from '../../item/item-type.enum';
import { StatsBase } from '../stats-base.model';

export class Warrior extends Hero<ItemType.PLATE> {

    constructor() {
        super();
        this.setInitialStats(this.baseStats);
    }

    get baseStats() {
        const stats = new StatsBase();
        stats.strength = 18 + (this.stats.level * 2);
        stats.dexterity = 12 + (this.stats.level * 0.7);
        stats.intellect = 7;
        stats.wisdom = 7;
        stats.damage = 0;
        stats.defense = 0;
        stats.life = 100 * (this.stats.level * 2);
        return stats;
    }

    setStats() {
        this.stats.strength = this.stats.strength * 3;
        this.stats.damage = this.stats.strength * (this.stats.dexterity * 0.2);

        this.stats.block;
        this.stats.evasion = this.stats.dexterity * 0.01;
        this.stats.physicalResist = this.stats.strength * 0.05;
        this.stats.magicResist;
    }
    
}
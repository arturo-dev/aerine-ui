
import { Spell } from '../spell/spell.model';
import { StatsBase } from './stats-base.model';
import { Equipment } from './equipment.model';

export class Hero<ItemType> {
    name: string;
    stats: StatsBase;
    items: Equipment<ItemType>;
    spells: Spell[];

    constructor() {}

    setInitialStats(base: StatsBase) {
        const stats: StatsBase = this.readStatsItems();

        return StatsBase.mergeStats(base, stats);
    }

    private readStatsItems(): StatsBase {
        const stats = new StatsBase;

        for (var i in this.items) {
            StatsBase.mergeStats(stats, this.items[i]);
        }

        return stats;
    }

    doAttack(hero: Hero<ItemType>): void {

    }

    receiveAttack(spell: Spell): void {
        
    }
    
}
export class StatsBase {
    level: number;
    experience: number;

    strength: number;
    dexterity: number;
    intellect: number;
    wisdom: number;

    damage: number;
    defense: number;

    life: number;

    block: number; // %
    hit: number; // Not used
    evasion: number; // %
    physicalResist: number; // %
    magicResist: number; // %
    temple: number; // %

    critical: number; // %
    criticalDamage: number; // %
    haste: number; // %

    static mergeStats(to: StatsBase, add: StatsBase) {
        to.strength = to.strength + add.strength || 0;
        to.dexterity = to.dexterity + add.dexterity || 0;
        to.intellect = to.intellect + add.intellect || 0;
        to.wisdom = to.wisdom + add.intellect || 0;
        to.damage = to.damage + add.damage || 0;
        to.defense = to.defense + add.defense || 0;
        to.life = to.life + add.life || 0;
    }

}
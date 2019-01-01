import { Spell } from '../spell.model';
import { Hero } from '../../hero/hero.model';
import { SpellType } from '../spell-type.enum';
import { ItemType } from '../../item/item-type.enum';

export class PhysicalAttack implements Spell {
    description = 'Spell.PhysicalAttack.Description'
    damage = 1;
    hit = 95;
    cooldown = 0;
    range = 0;
    targets = 1;
    type = SpellType.PHYSICAL;

    usage(heroFrom: Hero<ItemType>, heroTo: Hero<ItemType>): void {
        this.damage = this.damage + (heroFrom.stats.level * 3) + heroFrom.stats.damage;
        heroTo.receiveAttack(this);
    }
}
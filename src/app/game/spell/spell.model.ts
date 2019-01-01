import { SpellType } from './spell-type.enum';
import { Hero } from '../hero/hero.model';
import { ItemType } from '../item/item-type.enum';

export interface Spell {
    description: string;
    damage: number;
    hit: number;
    range: number;
    targets: number;
    cooldown: number;
    type: SpellType;

    usage(heroFrom: Hero<ItemType>, heroTo: Hero<ItemType>): void;
}
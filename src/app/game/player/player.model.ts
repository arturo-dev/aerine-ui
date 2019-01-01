import { ItemType } from '../item/item-type.enum';
import { Hero } from '../hero/hero.model';
import { Item } from '../item/item.model';
import { Village } from '../village/village.model';

export class Player {
    currency: number;
    heros: Hero<ItemType>[];
    villages: Village[];
    bag: Item<ItemType>[];

    loadPlayer(): void {

    }
}
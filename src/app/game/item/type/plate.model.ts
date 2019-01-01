import { ItemType } from '../item-type.enum';
import { Item } from '../item.model';

export class Plate extends Item<ItemType.PLATE> {
    
    constructor(name: string, description: string) {
        super();
    }
}
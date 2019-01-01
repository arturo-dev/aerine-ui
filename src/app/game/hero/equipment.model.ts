import { Item } from '../item/item.model';

export class Equipment<T> {
    weaponLeft: Item<T>;
    weaponRight: Item<T>;
    head: Item<T>;
    body: Item<T>;
    trouser: Item<T>;
    boots: Item<T>;
    amulet: Item<void>;
    ringLeft: Item<void>;
    ringRight: Item<void>;
}
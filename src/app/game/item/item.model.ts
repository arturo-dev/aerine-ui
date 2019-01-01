import { StatsBase } from "../hero/stats-base.model";

export class Item<T> {
    name: string;
    description: string;
    type: T;
    stats: StatsBase;

    usage(): void {

    }
}
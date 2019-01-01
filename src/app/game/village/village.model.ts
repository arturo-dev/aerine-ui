import { Coordinates } from './coordinates.model';
import { Build } from './build/build.model';

export class Village {
    id: number;
    name: string;
    coordinates: Coordinates;
    builds: Build[];
}
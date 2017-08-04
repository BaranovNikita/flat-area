import { Common } from '../utils/common';

export class Aperture {
    _width: number;
    _height: number;
    _id: string;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
        this._id = Common.guidGenerator();
    }
}

export class Wall {
    _id: string;
    _width: number;
    _height: number;
    _apertures: Aperture[];

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
        this._id = Common.guidGenerator();
    }

    addAperture(aperture: Aperture): void {
        this._apertures.push(aperture);
    }
}

export class Room {
    _walls: Wall[];
    _area: number;
    _id: string;
    _name: string;

    constructor() {
        this._id = Common.guidGenerator();
    }

    get walls(): Wall[] {
        return this._walls;
    }

    get id(): string {
        return this._id;
    }

    addWall(wall: Wall): void {
        this._walls.push(wall);
    }

    get area(): number {
        return this._area;
    }

    set area(area: number) {
        this._area = area;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }
}

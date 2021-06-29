import Cap from "./Cap";
import PointGPS from "./PointGPS";

export default class Bateau {
    private _id : string;
    private _cap : Cap;
    private _position : PointGPS | undefined;

    constructor(id : string) {
        this._id = id;
        this._cap = new Cap("N");
    }

    get id() {
        return this._id;
    }

    get cap() {
        return this._cap;
    }

    get position() {
        return this._position;
    }

    changerDeCap(nouveauCap : Cap) {
        this._cap = nouveauCap;
    }

    definirPosition(nouvellePosition : PointGPS) {
        this._position = nouvellePosition;
    }

    equals(other : any) : boolean {
        return other instanceof Bateau && other.id === this._id;
    }
}
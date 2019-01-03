export class ApiUri {

    private static _SEARCH = '/search';
    static get      SEARCH(): string {
        return this._SEARCH;
    }

    private static _USER = '/users';
    static get      USER(): string {
        return this._USER;
    }


    private static _SERVER = '/servers';
    static get      SERVER(): string {
        return this._SERVER;
    }

    private static _PLAYER = '/players';
    static get      PLAYER(): string {
        return this._PLAYER;
    }

}
export interface IUser {

    id?: number;
    username?: string;
    firstname?: string;
    expireDate?: number;
    locked?: boolean;
    lastname?: string;
    enable?: boolean;
    authorities?: Authority[];

}
export enum Authority {
    ROLE_USER = 'ROLE_USER',
    ROLE_ADMIN = 'ROLE_ADMIN'
}

export class User implements IUser {
    id?: number;
    username?: string;
    firstname?: string;
    expireDate?: number;
    locked?: boolean;
    lastname?: string;
    enable?: boolean;
    authorities?: Authority[];

    public static initialize(): IUser {
        const result = new User();
        result.id = 0;
        result.username = '';
        result.firstname = '';
        result.expireDate = 0;
        result.locked = true;
        result.lastname = '';
        result.enable = false;
        result.authorities = [];
        return result;
    }
}


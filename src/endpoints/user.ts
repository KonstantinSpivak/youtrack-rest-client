import {BaseEndpoint} from "./base";
import {ReducedUserImpl, ReducedUser, User, UserImpl} from "..";

export namespace UserPaths {
    export const current = '/admin/users/me';
    export const users = '/admin/users';
    export const user = '/admin/users/{userId}';
}

export class UserEndpoint extends BaseEndpoint {

    public current(): Promise<User> {
        return this.getResourceWithFields<User>(UserPaths.current, UserImpl);
    }

    public all(): Promise<ReducedUser[]> {
        return this.getResourceWithFields<ReducedUser[]>(UserPaths.users, ReducedUserImpl);
    }

    public byId(userId: string): Promise<User> {
        return this.getResourceWithFields<User>(this.format(UserPaths.user, {userId}), UserImpl);
    }
}

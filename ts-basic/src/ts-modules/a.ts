interface IUser {
    id: string,
    username: string,
    password: string,
    description?: string
}

class User {
    id: string;
    username: string;
    password: string;
    description?: string;

    constructor(id: string, username: string, password: string, description?: string) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.description = description;
    }
}

export {
    IUser,
    User
}

export default User;

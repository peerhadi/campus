import { User } from './domain'

function authHeaders(): Partial<AuthHeader> {
    let userAsString = window.localStorage.getItem("user");
    if (!userAsString)
        return {};
    const user = JSON.parse(userAsString);
    if (!user.userId)
        return {};

    return {
        "Authorization": user.userId
    };
}


export async function login(user: User) {
    return await fetch("/login", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(user),
    })
}

export async function ForgotPassword(user: User) {
    return await fetch("/login", {
        method: "",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(user),
    })
}


export async function signup(user: User) {
    return await fetch('/api/users/create', {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(user),
    })
}

export async function getUsers() {
    return await fetch("/users");
}

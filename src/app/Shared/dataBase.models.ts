export interface admins {
    username: string;
    password: string;
}

export interface cards {

}

export interface diplomas {

}

export interface saemenus {
    name: string;
    icon: string;
    link: string;
    submenu?: saemenus[]
}
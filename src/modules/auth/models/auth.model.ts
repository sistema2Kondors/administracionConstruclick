export interface LoginUser {
    code: Code;
    data: Data;
}

export interface Code {
    code:    number;
    message: string;
}

export interface Data {
    user:         User;
    token:        string;
    refreshToken: string;
}

export interface User {
    _id:         string;
    name:        string;
    lastname:    string;
    email:       string;
    password:    string;
    typeUser:    string;
    _personUser: PersonUser;
    state:       string;
    dateCreate:  Date;
    __v:         number;
}

export interface PersonUser {
    _id:             string;
    numberCellphone: string;
    numberPhone:     string;
    extPhone:        string;
    docNumber:       string;
    docType:         string;
    address:         string;
    occupancy:       string;
    __v:             number;
}



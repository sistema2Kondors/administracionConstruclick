export interface GetCategories {
    code: Code;
    data: Datum[];
}

export interface Code {
    code:    number;
    message: string;
}

export interface Datum {
    _id:      string;
    name:     string;
    slug:     string;
    children: any[];
    image:    string[];
}

export interface PostRegisterCategories {
    code: Code;
    data: Data;
}

export interface Code {
    code:    number;
    message: string;
}

export interface Data {
    name:       string;
    slug:       string;
    parentId:   string;
    image:      string[];
    _id:        string;
    dateCreate: Date;
    __v:        number;
}



// export interface ICategoriesModel {
//     code: Code;
//     data: DataModel[];
// }

// export interface Code {
//     code:    number;
//     message: string;
// }

// export interface DataModel {
//     _id:      string;
//     name:     string;
//     slug:     string;
//     image:     string
//     children: DataModel[];
// }
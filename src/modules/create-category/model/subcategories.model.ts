export interface Subcategoriesmodel {
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

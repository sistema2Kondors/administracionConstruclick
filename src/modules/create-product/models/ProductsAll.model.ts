export interface ProductsAllModel {
    code: Code;
    data: Datum[];
}

export interface Code {
    code:    number;
    message: string;
}

export interface Datum {
    _id:             string;
    name:            string;
    longDescription: string;
    sku:             string;
    images:          string[];
    brand:           string;
    category:        Category;
    scoreValue:      number;
    scoreOverall:    number;
    scoreMade:       number;
    quantity:        number;
    price:           number;
    coverImage:      string[];
    slug:            string;
    valueSale:       number;
    discountRate:    number;
    idProvider:      string;
    dataSheet:       string;
    safetySheet:     string;
    specifications:  any[];
    reviews:         Review[];
    dateCreate:      Date;
    __v:             number;
}

export interface Category {
    _id:        string;
    name:       string;
    slug:       string;
    parentId:   string;
    image:      string[];
    dateCreate: Date;
    __v:        number;
}

export interface Review {
    title:        string;
    detailReview: string;
    emailOwner:   string;
    _id:          string;
}

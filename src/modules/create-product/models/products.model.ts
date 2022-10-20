export interface PostProducts {
    code: Code;
    data: Data;
}

export interface Code {
    code:    number;
    message: string;
}

export interface Data {
    name:            string;
    longDescription: string;
    sku:             number;
    images:          string[];
    brand:           string;
    category:        string;
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
    _id:             string;
    specifications:  any[];
    reviews:         any[];
    dateCreate:      Date;
    __v:             number;
}

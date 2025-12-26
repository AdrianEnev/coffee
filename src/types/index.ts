export interface ProductOrigin {
    country: string;
    region: string;
    farm: string;
    altitude: string;
    process: string;
    harvest: string;
}

export interface BrewingParams {
    temperature: string;
    ratio: string;
    method: string;
}

export interface ProductLinks {
    amazon: string;
    etsy: string;
}

export interface Product {
    id: string;
    name: string;
    variant: string;
    price: number;
    shortDescription: string;
    longDescription: string;
    origin: ProductOrigin;
    roastLevel: string;
    tastingNotes: string[];
    brewingParams: BrewingParams;
    links: ProductLinks;
}

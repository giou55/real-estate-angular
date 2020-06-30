// export interface Test {
//         id: number;
//         title: string;
//         description: string;
//         price: number;
//         location: string;
//         created_at: string;
//         updated_at: string;
// }

export interface Test {
        propID: string,
        title: string,
        description: string,
        location: string,
        featured: boolean,
        area_size: number,
        year_built: number,
        beds: number,
        baths: number,
        garages: number,
        features: string[],
        imageSm_Path: string,
        imageLg_Path: string,
        lat: number,
        lng: number,
        priceSale: number,
        priceRent: number
}

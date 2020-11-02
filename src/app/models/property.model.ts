export interface Property {
    prop_id: string;
    title: string;
    description: string;
    location: string;
    featured: boolean;
    recent: boolean;
    area: number;
    year_built: number;
    beds: number;
    baths: number;
    imageSm_Path: string;
    imageLg_Path: string;
    lat: number;
    lng: number;
    priceSale: number;
    priceRent: number;
    central_heating: boolean;
    central_cooling: boolean;
    fireplace: boolean;
    swimming_pool: boolean;
    rv_boat_parking: boolean;
    two_stories: boolean;
    deck_patio: boolean;
    favoriteBy: [];
    imageSmall: any;
    imageLarge: any;
}

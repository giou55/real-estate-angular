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
    image_small_url: string;
    image_large_url: string;
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
    agent: {
        name: string;
        imageurl: string;
        id: string;
    };
    gallery_images_url: { images: [] };
    gallery: [{ url: string }];
}

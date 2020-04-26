export class Property {
      constructor(
            public propID: string,
            public title: string,
            public description: string,
            public location: string,
            public area_size: number,
            public year_built: number,
            public beds: number,
            public baths: number,
            public garages: number,
            public features: string[],
            public imagePath: string,
            public price: number) { }
}
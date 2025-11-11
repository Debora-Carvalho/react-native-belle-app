export type RootStackParamList = {
  Home: undefined;
  ProductDetails: {
    id: number;
    title: string;
    image: string;
    price: number;
    favorite: boolean;
    genre: string;
    description: string;
    rating: number;
    items?: {
      id: number;
      name: string;
      icon: string;
      quantity: number;
      unitPrice: number;
    }[];
  };
};

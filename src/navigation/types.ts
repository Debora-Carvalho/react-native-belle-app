export type RootStackParamList = {
  Home: undefined;
  ProductDetails: {
    id: number;
    title: string;
    image: string;
    price: number;
    favorite: boolean;
  };
};

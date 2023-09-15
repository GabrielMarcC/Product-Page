export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  salePrice: number;
  sale?: number;
  imgProduct: string;
  amount: number;
}

export const Product: IProduct[] = [
  {
    id: 1,
    title: 'Fall Limited Edition Sneakers',
    description:
      ' These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    price: 250,
    salePrice: 125,
    sale: 50,
    imgProduct: 'assets/images/image-product-1-thumbnail.jpg',
    amount: 0,
  },
];

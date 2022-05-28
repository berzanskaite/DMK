export type Item = {
  id: string,
  title: string,
  description: string,
  price: number,
  weight: number,
  img: string,
  composition: string,
};

export type CreateItem = Omit<Item, 'id'>;

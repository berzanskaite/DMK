export type State = {
  items: Item[],
};

export type Action = {
  type: string,
  payload: any
};

export type Item = {
  id: string,
  title: string,
  description: string,
  price: number,
  weight: number,
  img: string,
};

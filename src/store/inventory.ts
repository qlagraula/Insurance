import { atom } from 'jotai'

type Item = {
  id: number;
  name: string;
  purchasePrice: number;
  description?: string;
  photo: string;
}

export const inventoryAtom = atom<Item[]>([
	{
	  "id": 1,
	  "name": "Cartier ring",
		"purchasePrice": 5780,
		"description": "Gift from my grandfather",
		"photo": "https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg"
  },
  {
	  "id": 2,
	  "name": "Guitar",
		"purchasePrice": 850,
		"photo": "https://i.ibb.co/4dfndL2/louis-hansel-M-d-J-Scwa-LE-unsplash.jpg"
  },
])
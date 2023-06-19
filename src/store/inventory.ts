import { atom } from "jotai";

export const VALUE_LIMIT = 40000;

export type Item = {
  id: number;
  name: string;
  purchasePrice: number;
  description?: string;
  photo: string;
};

const inventoryPrimitiveAtom = atom<Item[]>([
  {
    id: 1,
    name: "Cartier ring",
    purchasePrice: 5780,
    description: "Gift from my grandfather",
    photo: "https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg",
  },
  {
    id: 2,
    name: "Guitar",
    purchasePrice: 850,
    photo: "https://i.ibb.co/4dfndL2/louis-hansel-M-d-J-Scwa-LE-unsplash.jpg",
  },
]);

export const inventoryAtom = atom((get) => get(inventoryPrimitiveAtom));

export const newItemAtom = atom<Partial<Item>>({});

export const newIdAtom = atom(
  (get) =>
    get(inventoryAtom).reduce(
      (acc, item) => (acc > item.id ? acc : item.id),
      0
    ) + 1
);

export const addInventoryItem = atom(
  (get) => {
    const inventory = get(inventoryAtom);
    const newItem = get(newItemAtom);

    return addItemToInventoryGuardian(newItem, inventory);
  },
  (get, set) => {
    const inventory = get(inventoryAtom);
    const newItem = get(newItemAtom);
    const id = get(newItemAtom);
    const { canAdd } = get(addInventoryItem);
    if (canAdd)
      set(inventoryPrimitiveAtom, [...inventory, { ...newItem, id } as Item]);
  }
);

export const addItemToInventoryGuardian = (
  newItem: Partial<Item>,
  inventory: Item[]
) => {
  const totalValue = inventory.reduce(
    (acc, item) => acc + item.purchasePrice,
    0
  );
  const isLimitReached =
    totalValue + (newItem.purchasePrice || 0) > VALUE_LIMIT;
  const canAdd =
    !!(
      newItem.name &&
      newItem.purchasePrice &&
      !isNaN(newItem.purchasePrice) &&
      newItem.photo &&
      !isLimitReached
    ) || false;

  return { canAdd, isLimitReached };
};

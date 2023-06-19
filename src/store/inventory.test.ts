import { VALUE_LIMIT, addItemToInventoryGuardian } from "./inventory";
describe("Testing deepLinkIsValid", () => {
  it(`Should allow to add if value is inferior to the limit`, () => {
    const inventory = [
      {
        id: 1,
        name: "Cartier ring",
        purchasePrice: 5780,
        description: "Gift from my grandfather",
        photo:
          "https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg",
      },
      {
        id: 2,
        name: "Guitar",
        purchasePrice: 850,
        photo:
          "https://i.ibb.co/4dfndL2/louis-hansel-M-d-J-Scwa-LE-unsplash.jpg",
      },
    ];

    const newItem = {
      id: 3,
      name: "Guitar",
      purchasePrice: 2500,
      photo: "https://i.ibb.co/4dfndL2/louis-hansel-M-d-J-Scwa-LE-unsplash.jpg",
    };
    expect(addItemToInventoryGuardian(newItem, inventory)).toMatchInlineSnapshot(`
    Object {
      "canAdd": true,
      "isLimitReached": false,
    }
  `);

    const newItemExceed = {
      id: 3,
      name: "Guitar",
      purchasePrice: VALUE_LIMIT,
      photo: "https://i.ibb.co/4dfndL2/louis-hansel-M-d-J-Scwa-LE-unsplash.jpg",
    };
    expect(addItemToInventoryGuardian(newItemExceed, inventory))
      .toMatchInlineSnapshot(`
    Object {
      "canAdd": false,
      "isLimitReached": true,
    }
  `);
  });

  it(`Should allow to add if the item is complete`, () => {
    const inventory = [
      {
        id: 1,
        name: "Cartier ring",
        purchasePrice: 5780,
        description: "Gift from my grandfather",
        photo:
          "https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg",
      },
      {
        id: 2,
        name: "Guitar",
        purchasePrice: 850,
        photo:
          "https://i.ibb.co/4dfndL2/louis-hansel-M-d-J-Scwa-LE-unsplash.jpg",
      },
    ];

    const newCompleteItem = {
      id: 3,
      name: "Guitar",
      purchasePrice: 2500,
      photo: "https://i.ibb.co/4dfndL2/louis-hansel-M-d-J-Scwa-LE-unsplash.jpg",
    };
    expect(addItemToInventoryGuardian(newCompleteItem, inventory))
      .toMatchInlineSnapshot(`
    Object {
      "canAdd": true,
      "isLimitReached": false,
    }
  `);

    const newItemMissingPrice = {
      id: 3,
      name: "Guitar",
      photo: "https://i.ibb.co/4dfndL2/louis-hansel-M-d-J-Scwa-LE-unsplash.jpg",
    };
    expect(addItemToInventoryGuardian(newItemMissingPrice, inventory))
      .toMatchInlineSnapshot(`
    Object {
      "canAdd": false,
      "isLimitReached": false,
    }
  `);

    const newItemMissingName = {
      id: 3,
      purchasePrice: 2500,
      photo: "https://i.ibb.co/4dfndL2/louis-hansel-M-d-J-Scwa-LE-unsplash.jpg",
    };
    expect(addItemToInventoryGuardian(newItemMissingName, inventory))
      .toMatchInlineSnapshot(`
    Object {
      "canAdd": false,
      "isLimitReached": false,
    }
  `);

    const newItemMissingPhoto = {
      id: 3,
      name: "Guitar",
      purchasePrice: 2500,
    };
    expect(addItemToInventoryGuardian(newItemMissingPhoto, inventory))
      .toMatchInlineSnapshot(`
    Object {
      "canAdd": false,
      "isLimitReached": false,
    }
  `);
  });
});

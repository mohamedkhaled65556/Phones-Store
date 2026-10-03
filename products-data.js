if (!localStorage.getItem("products")) {
products = [
  {
    id: crypto.randomUUID(),

    name: "تليفون ملك",

    price: 2000,

    totalQty: 1,

    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZEB2PMai2NXWLp8XpTXKfB61VZUdIGQn5s6q-p0nyA&s=10",
  },
  {
    id: crypto.randomUUID(),

    name: "Samsung A13",

    price: 300,

    totalQty: 10,

    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSttTJWLajYboJMhLc8_eUMIJpy60Jt8UBsj7Fsb0O5eA&s=10",
  },

  {
    id: crypto.randomUUID(),

    name: "Iphone 18 Pro",

    price: 1500,

    totalQty: 8,

    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbg7MLyRF_220YF73NcUiFf6nGKU5S0ZXC0Iz-6Em7tQ&s",
  },

  {
    id: crypto.randomUUID(),

    name: "Iphone X",

    price: 400,

    totalQty: 6,

    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJjSJGlwJNJTrYwa8zzF87dIUzglwHZpsnGHp4DE6VFA&s=10",
  },

  {
    id: crypto.randomUUID(),

    name: "Oppo F9",

    price: 200,

    totalQty: 12,

    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaT3sqS93tEAx4DqHiAYOu2D8MGxe2YwFKsq2JbVxYpg&s=10",
  },
];

localStorage.setItem("products", JSON.stringify(products));
}
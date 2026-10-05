
products = JSON.parse(localStorage.getItem("products")) || [];

const tableBody = document.querySelector("#productsTableBody");

const newPhoneModal = document.querySelector("#newPhoneModal");

const editPhoneModal = document.querySelector("#editPhoneModal");


const phoneNameInput = document.querySelector("#phoneNameInput");

const phonePriceInput = document.querySelector("#phonePriceInput");

const phoneQtyInput = document.querySelector("#phoneQtyInput");

const phoneImageInput = document.querySelector("#phoneImageInput");


const phoneNameInputE = document.querySelector("#phoneNameInputE");

const phonePriceInputE = document.querySelector("#phonePriceInputE");

const phoneQtyInputE = document.querySelector("#phoneQtyInputE");

const phoneImageInputE = document.querySelector("#phoneImageInputE");


const searchInput = document.querySelector("#searchInput");

const searchListElement = document.querySelector("#list");


let globalIndex = null;


function saveProducts() {
  localStorage.setItem("products", JSON.stringify(products));
}


function showProducts() {
  tableBody.innerHTML = "";

  if (products.length === 0) {
    tableBody.innerHTML = `

            <tr>

                <td
                    colspan="6"
                    class="not-found"
                >
                    No products available
                </td>

            </tr>

        `;

    return;
  }

  products.forEach((product, index) => {
    tableBody.innerHTML += `

                <tr>

                    <td>
                        ${index + 1}
                    </td>


                    <td>

                        <img
                            src="${product.imgUrl}"
                            alt="${product.name}"
                            class="admin-product-image"
                        >

                    </td>


                    <td>
                        ${product.name}
                    </td>


                    <td class="price">
                        ${product.price}$
                    </td>


                    <td>
                        ${product.totalQty}
                    </td>


                    <td>

                        <button
                            class="btn edit-btn"
                            onclick="Edit(${index})"
                        >

                            <i
                                class="fa-regular fa-pen-to-square"
                            ></i>

                            Edit

                        </button>


                        <button
                            class="btn delete-btn"
                            onclick="Delete(${index})"
                        >

                            <i
                                class="fa-solid fa-trash-can"
                            ></i>

                            Delete

                        </button>

                    </td>

                </tr>

            `;
  });

  searchList();
}


function searchList() {
  searchListElement.innerHTML = "";

  const searchValue = searchInput.value.replace(/\s+/g, "").toLowerCase();

  if (searchValue === "") {
    return;
  }

  products.forEach((product) => {
    const productName = product.name.replace(/\s+/g, "").toLowerCase();

    if (productName.includes(searchValue)) {
      searchListElement.innerHTML += `

                    <option
                        value="${product.name}"
                    ></option>

                `;
    }
  });
}


function openModal() {
  newPhoneModal.style.display = "flex";
}


function closeModal() {
  newPhoneModal.style.display = "none";

  editPhoneModal.style.display = "none";

  clearAddInputs();

  clearEditInputs();

  globalIndex = null;
}


function clearAddInputs() {
  phoneNameInput.value = "";

  phonePriceInput.value = "";

  phoneQtyInput.value = "";

  phoneImageInput.value = "";
}


function clearEditInputs() {
  phoneNameInputE.value = "";

  phonePriceInputE.value = "";

  phoneQtyInputE.value = "";

  phoneImageInputE.value = "";
}


function addNewPhone() {
  const name = phoneNameInput.value.trim();

  const price = Number(phonePriceInput.value);

  const qty = Number(phoneQtyInput.value);

  const image = phoneImageInput.value.trim() || defaultImage;


  if (name === "") {
    alert("Phone name cannot be empty");

    return;
  }


  if (phonePriceInput.value === "" || price <= 0) {
    alert("Phone price must be greater than 0");

    return;
  }


  if (phoneQtyInput.value === "" || qty <= 0) {
    alert("Phone quantity must be greater than 0");

    return;
  }


  const product = {
    id: crypto.randomUUID(),

    name: name,

    price: price,

    totalQty: qty,

    imgUrl: image,
  };

  products.push(product);

  saveProducts();

  closeModal();

  showProducts();
}


function Delete(index) {
  const product = products[index];

  if (!product) {
    return;
  }

  const isConfirm = confirm(
    `Are you sure you want to delete "${product.name}"?`,
  );

  if (!isConfirm) {
    return;
  }

  const deletedId = product.id;


  products.splice(index, 1);

  saveProducts();


  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart = cart.filter((item) => item.id !== deletedId);

  localStorage.setItem("cart", JSON.stringify(cart));

  showProducts();
}


function Edit(index) {
  const product = products[index];

  if (!product) {
    return;
  }

  globalIndex = index;

  phoneNameInputE.value = product.name;

  phonePriceInputE.value = product.price;

  phoneQtyInputE.value = product.totalQty;

  phoneImageInputE.value = product.imgUrl;

  editPhoneModal.style.display = "flex";
}


function editPhone() {
  if (globalIndex === null) {
    return;
  }

  const product = products[globalIndex];

  const name = phoneNameInputE.value.trim();

  const price = Number(phonePriceInputE.value);

  const qty = Number(phoneQtyInputE.value);

  const image = phoneImageInputE.value.trim() || defaultImage;


  if (name === "") {
    alert("Phone name cannot be empty");

    return;
  }

  if (phonePriceInputE.value === "" || price <= 0) {
    alert("Phone price must be greater than 0");

    return;
  }

  if (phoneQtyInputE.value === "" || qty <= 0) {
    alert("Phone quantity must be greater than 0");

    return;
  }


  product.name = name;

  product.price = price;

  product.totalQty = qty;

  product.imgUrl = image;

  saveProducts();

  updateCartAfterEdit(product);

  closeModal();

  showProducts();
}


function updateCartAfterEdit(updatedProduct) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const cartIndex = cart.findIndex((item) => item.id === updatedProduct.id);

  if (cartIndex === -1) {
    return;
  }

  cart[cartIndex].name = updatedProduct.name;

  cart[cartIndex].price = updatedProduct.price;

  cart[cartIndex].totalQty = updatedProduct.totalQty;

  cart[cartIndex].imgUrl = updatedProduct.imgUrl;

  if (cart[cartIndex].qty > updatedProduct.totalQty) {
    cart[cartIndex].qty = updatedProduct.totalQty;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}


function searchByName() {
  const searchValue = searchInput.value.replace(/\s+/g, "").toLowerCase();

  if (searchValue === "") {
    showProducts();

    return;
  }

  const filteredProducts = products.filter((product) => {
    const name = product.name.replace(/\s+/g, "").toLowerCase();

    return name.includes(searchValue);
  });

  tableBody.innerHTML = "";

  filteredProducts.forEach((product) => {
    const index = products.indexOf(product);

    tableBody.innerHTML += `

                <tr>

                    <td>
                        ${index + 1}
                    </td>


                    <td>

                        <img
                            src="${product.imgUrl}"
                            alt="${product.name}"
                            class="admin-product-image"
                        >

                    </td>


                    <td>
                        ${product.name}
                    </td>


                    <td class="price">
                        ${product.price}$
                    </td>


                    <td>
                        ${product.totalQty}
                    </td>


                    <td>

                        <button
                            class="btn edit-btn"
                            onclick="Edit(${index})"
                        >

                            <i
                                class="fa-regular fa-pen-to-square"
                            ></i>

                            Edit

                        </button>


                        <button
                            class="btn delete-btn"
                            onclick="Delete(${index})"
                        >

                            <i
                                class="fa-solid fa-trash-can"
                            ></i>

                            Delete

                        </button>

                    </td>

                </tr>

            `;
  });

  if (filteredProducts.length === 0) {
    tableBody.innerHTML = `

            <tr>

                <td
                    colspan="6"
                    class="not-found"
                >
                    Product not found
                </td>

            </tr>

        `;
  }
}

window.addEventListener("click", (event) => {
  if (event.target === newPhoneModal) {
    closeModal();
  }

  if (event.target === editPhoneModal) {
    closeModal();
  }
});

showProducts();

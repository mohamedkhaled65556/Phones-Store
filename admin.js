// ==========================================
// PRODUCTS
// ==========================================

let products =
    JSON.parse(
        localStorage.getItem("products")
    ) || [];

// ==========================================
// INITIAL PRODUCTS
// ==========================================

if (products.length === 0) {

    products = [

        {
            id: crypto.randomUUID(),

            name: "Samsung A13",

            price: 300,

            totalQty: 10,

            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSttTJWLajYboJMhLc8_eUMIJpy60Jt8UBsj7Fsb0O5eA&s=10"
        },


        {
            id: crypto.randomUUID(),

            name: "Iphone 18 Pro",

            price: 1500,

            totalQty: 8,

            imgUrl: "data:image/webp;base64,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"
        },


        {
            id: crypto.randomUUID(),

            name: "Iphone X",

            price: 400,

            totalQty: 6,

            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJjSJGlwJNJTrYwa8zzF87dIUzglwHZpsnGHp4DE6VFA&s=10"
        },


        {
            id: crypto.randomUUID(),

            name: "Oppo F9",

            price: 200,

            totalQty: 12,

            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaT3sqS93tEAx4DqHiAYOu2D8MGxe2YwFKsq2JbVxYpg&s=10"
        }

    ];


    saveProducts();
}


// ==========================================
// DOM ELEMENTS
// ==========================================

const tableBody =
    document.querySelector(
        "#productsTableBody"
    );


const newPhoneModal =
    document.querySelector(
        "#newPhoneModal"
    );


const editPhoneModal =
    document.querySelector(
        "#editPhoneModal"
    );


// Add Inputs

const phoneNameInput =
    document.querySelector(
        "#phoneNameInput"
    );


const phonePriceInput =
    document.querySelector(
        "#phonePriceInput"
    );


const phoneQtyInput =
    document.querySelector(
        "#phoneQtyInput"
    );


const phoneImageInput =
    document.querySelector(
        "#phoneImageInput"
    );


// Edit Inputs

const phoneNameInputE =
    document.querySelector(
        "#phoneNameInputE"
    );


const phonePriceInputE =
    document.querySelector(
        "#phonePriceInputE"
    );


const phoneQtyInputE =
    document.querySelector(
        "#phoneQtyInputE"
    );


const phoneImageInputE =
    document.querySelector(
        "#phoneImageInputE"
    );


// Search

const searchInput =
    document.querySelector(
        "#searchInput"
    );


const searchListElement =
    document.querySelector(
        "#list"
    );


// Current Edit Index

let globalIndex = null;


// ==========================================
// SAVE PRODUCTS
// ==========================================

function saveProducts() {

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );
}


// ==========================================
// SHOW PRODUCTS
// ==========================================

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


    products.forEach(
        (product, index) => {

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
        }
    );


    searchList();
}


// ==========================================
// SEARCH LIST
// ==========================================

function searchList() {

    searchListElement.innerHTML = "";


    const searchValue =
        searchInput.value
            .replace(/\s+/g, "")
            .toLowerCase();


    if (searchValue === "") {
        return;
    }


    products.forEach(
        product => {

            const productName =
                product.name
                    .replace(/\s+/g, "")
                    .toLowerCase();


            if (
                productName.includes(
                    searchValue
                )
            ) {

                searchListElement.innerHTML += `

                    <option
                        value="${product.name}"
                    ></option>

                `;
            }

        }
    );
}


// ==========================================
// OPEN ADD MODAL
// ==========================================

function openModal() {

    newPhoneModal.style.display =
        "flex";
}


// ==========================================
// CLOSE MODALS
// ==========================================

function closeModal() {

    newPhoneModal.style.display =
        "none";


    editPhoneModal.style.display =
        "none";


    clearAddInputs();

    clearEditInputs();

    globalIndex = null;
}


// ==========================================
// CLEAR ADD INPUTS
// ==========================================

function clearAddInputs() {

    phoneNameInput.value = "";

    phonePriceInput.value = "";

    phoneQtyInput.value = "";

    phoneImageInput.value = "";
}


// ==========================================
// CLEAR EDIT INPUTS
// ==========================================

function clearEditInputs() {

    phoneNameInputE.value = "";

    phonePriceInputE.value = "";

    phoneQtyInputE.value = "";

    phoneImageInputE.value = "";
}


// ==========================================
// ADD NEW PHONE
// ==========================================

function addNewPhone() {

    const name =
        phoneNameInput.value.trim();


    const price =
        Number(
            phonePriceInput.value
        );


    const qty =
        Number(
            phoneQtyInput.value
        );


    const image =
        phoneImageInput.value.trim()
        || defaultImage;


    // Name validation

    if (name === "") {

        alert(
            "Phone name cannot be empty"
        );

        return;
    }


    // Price validation

    if (
        phonePriceInput.value === ""
        || price <= 0
    ) {

        alert(
            "Phone price must be greater than 0"
        );

        return;
    }


    // Quantity validation

    if (
        phoneQtyInput.value === ""
        || qty <= 0
    ) {

        alert(
            "Phone quantity must be greater than 0"
        );

        return;
    }


    // Create Product

    const product = {

        id: crypto.randomUUID(),

        name: name,

        price: price,

        totalQty: qty,

        imgUrl: image
    };


    products.push(product);


    saveProducts();


    closeModal();


    showProducts();
}


// ==========================================
// DELETE
// ==========================================

function Delete(index) {

    const product =
        products[index];


    if (!product) {
        return;
    }


    const isConfirm =
        confirm(
            `Are you sure you want to delete "${product.name}"?`
        );


    if (!isConfirm) {
        return;
    }


    const deletedId =
        product.id;


    // Delete product

    products.splice(
        index,
        1
    );


    saveProducts();


    // Remove from cart

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];


    cart =
        cart.filter(
            item =>
                item.id !== deletedId
        );


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    showProducts();
}


// ==========================================
// EDIT
// ==========================================

function Edit(index) {

    const product =
        products[index];


    if (!product) {
        return;
    }


    globalIndex = index;


    phoneNameInputE.value =
        product.name;


    phonePriceInputE.value =
        product.price;


    phoneQtyInputE.value =
        product.totalQty;


    phoneImageInputE.value =
        product.imgUrl;


    editPhoneModal.style.display =
        "flex";
}


// ==========================================
// EDIT PHONE
// ==========================================

function editPhone() {

    if (
        globalIndex === null
    ) {
        return;
    }


    const product =
        products[globalIndex];


    const name =
        phoneNameInputE.value.trim();


    const price =
        Number(
            phonePriceInputE.value
        );


    const qty =
        Number(
            phoneQtyInputE.value
        );


    const image =
        phoneImageInputE.value.trim()
        || defaultImage;


    // Validation

    if (name === "") {

        alert(
            "Phone name cannot be empty"
        );

        return;
    }


    if (
        phonePriceInputE.value === ""
        || price <= 0
    ) {

        alert(
            "Phone price must be greater than 0"
        );

        return;
    }


    if (
        phoneQtyInputE.value === ""
        || qty <= 0
    ) {

        alert(
            "Phone quantity must be greater than 0"
        );

        return;
    }


    // Update Product

    product.name = name;

    product.price = price;

    product.totalQty = qty;

    product.imgUrl = image;


    saveProducts();


    updateCartAfterEdit(
        product
    );


    closeModal();


    showProducts();
}


// ==========================================
// UPDATE CART AFTER EDIT
// ==========================================

function updateCartAfterEdit(
    updatedProduct
) {

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];


    const cartIndex =
        cart.findIndex(
            item =>
                item.id ===
                updatedProduct.id
        );


    if (
        cartIndex === -1
    ) {
        return;
    }


    cart[cartIndex].name =
        updatedProduct.name;


    cart[cartIndex].price =
        updatedProduct.price;


    cart[cartIndex].totalQty =
        updatedProduct.totalQty;


    cart[cartIndex].imgUrl =
        updatedProduct.imgUrl;


    // Fix quantity if stock decreased

    if (
        cart[cartIndex].qty >
        updatedProduct.totalQty
    ) {

        cart[cartIndex].qty =
            updatedProduct.totalQty;
    }


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}


// ==========================================
// SEARCH
// ==========================================

function searchByName() {

    const searchValue =
        searchInput.value
            .replace(/\s+/g, "")
            .toLowerCase();


    if (
        searchValue === ""
    ) {

        showProducts();

        return;
    }


    const filteredProducts =
        products.filter(
            product => {

                const name =
                    product.name
                        .replace(
                            /\s+/g,
                            ""
                        )
                        .toLowerCase();


                return name.includes(
                    searchValue
                );
            }
        );


    tableBody.innerHTML = "";


    filteredProducts.forEach(
        product => {

            const index =
                products.indexOf(
                    product
                );


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
        }
    );


    if (
        filteredProducts.length === 0
    ) {

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


// ==========================================
// CLICK OUTSIDE MODAL
// ==========================================

window.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            newPhoneModal
        ) {

            closeModal();
        }


        if (
            event.target ===
            editPhoneModal
        ) {

            closeModal();
        }

    }
);


// ==========================================
// INITIAL LOAD
// ==========================================

showProducts();

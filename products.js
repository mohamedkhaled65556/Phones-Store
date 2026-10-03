// ==========================================
// PRODUCTS
// ==========================================

let products =
    JSON.parse(
        localStorage.getItem("products")
    ) || [];


// ==========================================
// CART
// ==========================================

let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];


// ==========================================
// DOM ELEMENTS
// ==========================================

const totalCostElement =
    document.querySelector(
        "#TotalCost"
    );


const lengthElement =
    document.querySelector(
        "#Length"
    );


const productArea =
    document.querySelector(
        "#productArea"
    );


const cartContainer =
    document.querySelector(
        "#cartContainer"
    );


// ==========================================
// LOAD PRODUCTS
// ==========================================

function loadProducts() {

    products =
        JSON.parse(
            localStorage.getItem("products")
        ) || [];
}


// ==========================================
// SAVE CART
// ==========================================

function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}


// ==========================================
// SHOW PRODUCTS
// ==========================================

function showProducts() {

    loadProducts();


    productArea.innerHTML = "";


    if (
        products.length === 0
    ) {

        productArea.innerHTML = `

            <div
                class="alert alert-warning text-center w-100"
            >

                No products available.

            </div>

        `;

        return;
    }


    products.forEach(
        (product, index) => {

            productArea.innerHTML += `

                <div class="product-card">


                    <img
                        src="${product.imgUrl}"
                        alt="${product.name}"
                        class="product-image"
                    >


                    <div class="card-body">


                        <h3 class="card-title text-center">

                            ${product.name}

                        </h3>


                        <h5
                            class="card-text text-center price"
                        >

                            ${product.price}
                            USD

                        </h5>


                        <p class="card-text text-center">

                            Available:
                            ${product.totalQty}

                        </p>


                        <button
                            onclick="addToCart(${index})"
                            class="btn btn-primary w-100"
                        >

                            <i
                                class="fa-solid fa-cart-plus"
                            ></i>

                            Add To Cart

                        </button>

                    </div>

                </div>

            `;
        }
    );
}


// ==========================================
// ADD TO CART
// ==========================================

function addToCart(index) {

    loadProducts();


    const product =
        products[index];


    if (!product) {
        return;
    }


    if (
        product.totalQty <= 0
    ) {

        alert(
            "This product is out of stock."
        );

        return;
    }


    const indexInCart =
        cart.findIndex(
            item =>
                item.id ===
                product.id
        );


    // New Product

    if (
        indexInCart === -1
    ) {

        const cartProduct = {

            id: product.id,

            name: product.name,

            price: product.price,

            totalQty:
                product.totalQty,

            imgUrl:
                product.imgUrl,

            qty: 1
        };


        cart.push(
            cartProduct
        );


        saveCart();

        showCart();

        return;
    }


    // Already In Cart

    Increase(
        indexInCart
    );
}


// ==========================================
// SHOW CART
// ==========================================

function showCart() {

    cartContainer.innerHTML = "";


    if (
        cart.length === 0
    ) {

        cartContainer.innerHTML = `

            <div
                class="alert alert-secondary text-center"
            >

                <i
                    class="fa-solid fa-cart-shopping"
                ></i>

                Your cart is empty.

            </div>

        `;
    }


    cart.forEach(
        (product, index) => {

            cartContainer.innerHTML += `

                <div class="cart-item">


                    <img
                        src="${product.imgUrl}"
                        alt="${product.name}"
                    >


                    <div class="cart-item-content">


                        <h5>
                            ${product.name}
                        </h5>


                        <p>

                            Price:
                            ${
                                product.price *
                                product.qty
                            }
                            USD

                        </p>


                        <div
                            class="quantity-controls"
                        >


                            <button
                                class="btn btn-success"
                                onclick="Increase(${index})"
                            >
                                +
                            </button>


                            <span>
                                Qty:
                                ${product.qty}
                            </span>


                            <button
                                class="btn btn-danger"
                                onclick="Decrease(${index})"
                            >
                                -
                            </button>


                        </div>


                        <button
                            class="btn btn-outline-danger btn-sm mt-2"
                            onclick="removeFromCart(${index})"
                        >

                            <i
                                class="fa-solid fa-trash"
                            ></i>

                            Remove

                        </button>


                    </div>

                </div>

            `;
        }
    );


    calcTotal();

    updateCartLength();
}


// ==========================================
// INCREASE
// ==========================================

function Increase(index) {

    const product =
        cart[index];


    if (!product) {
        return;
    }


    // Refresh stock from products

    loadProducts();


    const realProduct =
        products.find(
            item =>
                item.id ===
                product.id
        );


    if (!realProduct) {

        cart.splice(
            index,
            1
        );

        saveCart();

        showCart();

        return;
    }


    product.totalQty =
        realProduct.totalQty;


    if (
        product.qty <
        product.totalQty
    ) {

        product.qty++;

    } else {

        alert(
            `Maximum available quantity is ${product.totalQty}`
        );

        return;
    }


    saveCart();

    showCart();
}


// ==========================================
// DECREASE
// ==========================================

function Decrease(index) {

    const product =
        cart[index];


    if (!product) {
        return;
    }


    if (
        product.qty > 1
    ) {

        product.qty--;

    } else {

        cart.splice(
            index,
            1
        );
    }


    saveCart();

    showCart();
}


// ==========================================
// REMOVE FROM CART
// ==========================================

function removeFromCart(index) {

    if (
        index < 0 ||
        index >= cart.length
    ) {
        return;
    }


    cart.splice(
        index,
        1
    );


    saveCart();

    showCart();
}


// ==========================================
// CALCULATE TOTAL
// ==========================================

function calcTotal() {

    let total = 0;


    cart.forEach(
        product => {

            total +=
                Number(
                    product.price
                ) *
                Number(
                    product.qty
                );

        }
    );


    totalCostElement.innerHTML =
        total.toFixed(2);
}


// ==========================================
// CART LENGTH
// ==========================================

function updateCartLength() {

    const totalItems =
        cart.reduce(
            (
                total,
                product
            ) => {

                return (
                    total +
                    Number(
                        product.qty
                    )
                );

            },
            0
        );


    lengthElement.innerHTML =
        totalItems;
}


// ==========================================
// INITIAL LOAD
// ==========================================

showProducts();

showCart();
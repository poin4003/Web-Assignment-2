const productData = {
    "Normal Eggs": [
        { name: 'Ampeel Egg', price: '2.000$', rating: '4.5', sold: '40', image: '../image/eggs/Ampeel Egg.jpg' }, 
        { name: 'Bone Shark Egg', price: '2.000$', rating: '4.5', sold: '40', image: '../image/eggs/Bone shark egg.jpg' }, 
        { name: 'Crabsnake Egg', price: '2.000$', rating: '4.5', sold: '40', image: '../image/eggs/crabsnake egg.jpg' }, 
        { name: 'Crabsquid Egg', price: '2.000$', rating: '4.5', sold: '40', image: '../image/eggs/crabsquid egg.jpg' }, 
        { name: 'Crashfish Egg', price: '200$', rating: '4.5', sold: '40', image: '../image/eggs/crash fish egg.jpg' }, 
        { name: 'Cuddle Fish Egg', price: '1.000$', rating: '4.5', sold: '40', image: '../image/eggs/cuddle fish egg.jpg' }, 
        { name: 'Gasopod Egg', price: '600$', rating: '4.5', sold: '40', image: '../image/eggs/gasopod egg.jpg' }, 
        { name: 'Jellyray Egg', price: '600$', rating: '4.5', sold: '40', image: '../image/eggs/jellyray.jpg' }, 
        { name: 'Lava Lizart Egg', price: '1.000$', rating: '4.5', sold: '40', image: '../image/eggs/lava lizard egg.jpg' }, 
        { name: 'Mesmer Egg', price: '1.000$', rating: '4.5', sold: '40', image: '../image/eggs/mesmer egg.jpg' }, 
        { name: 'Rabbitray Egg', price: '500$', rating: '4.5', sold: '40', image: '../image/eggs/rabbitray egg.jpg' }, 
        { name: 'Sand Shark Egg', price: '2.000$', rating: '4.5', sold: '40', image: '../image/eggs/sand shark egg.jpg' }, 
        { name: 'Spadefish Egg', price: '100$', rating: '4.5', sold: '40', image: '../image/eggs/spadefish egg.jpg' }, 
        { name: 'Stalker Egg', price: '2.000$', rating: '4.5', sold: '40', image: '../image/eggs/stalkter.jpg' }, 
    ],
    "Unique Eggs": [
        { name: 'Sea Dragon Leviathan Eggs', price: '30.000$', rating: '4.8', sold: '200', image: '../image/eggs/wea dagon egg.jpg' },
        { name: 'Sea Emperor Leviathan Eggs', price: '50.000$', rating: '4.8', sold: '200', image: '../image/eggs/sea emperer egg.jpg' },
        { name: 'Ghost Leviathan Eggs', price: '20.000$', rating: '4.8', sold: '200', image: '../image/eggs/ghost leviathan.jpg' },
    ]
};


function createProductBox(product) {
    const box = document.createElement('div');
    box.className = 'box';
    box.onclick = function() {
        loadProductDetails();
    }

    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    img.src = product.image;
    imgContainer.appendChild(img);
    imgContainer.className = 'imgContainer';

    const infoDiv = document.createElement('div');
    infoDiv.innerHTML = `
        <p class="name">${product.name}</p>
        <p class="price">${product.price}</p>
        <p class="rating" id="star">${product.rating}<i class="fa-solid fa-star"></i>rating<span id="rating"> (${product.sold})</span></p>
        <p class="sold">sold:<span id="sold">${product.sold}</span></p>
        <div class="btn-icon add-to-cart" id="add-to-cart">
            <i class="icon fa-solid fa-cart-plus"></i>
        </div>
    `;

    // Thêm event listener cho nút "add-to-cart"
    const addToCartButton = infoDiv.querySelector('#add-to-cart');
    addToCartButton.addEventListener('click', function(event) {
        // Ngăn chặn sự kiện click lan truyền lên đến phần tử cha (box)
        event.stopPropagation();
        // Thực hiện các xử lý khác nếu cần
    });

    box.appendChild(imgContainer);
    box.appendChild(infoDiv);

    return box;
}

function loadProductDetails() {
    window.location.href = '../html/product_details.html';
}

function loadCart() {
    window.location.href = '../html/cart.html';
}

function populateProducts(productCategory, containerId) {
    const productContainer = document.getElementById(containerId);

    const categoryHeading = document.createElement('h1');
    categoryHeading.innerText = productCategory.toUpperCase();
    categoryHeading.className = 'heading-category';
    productContainer.appendChild(categoryHeading);

    productData[productCategory].forEach(product => {
        productContainer.appendChild(createProductBox(product));
    });
}

populateProducts("Normal Eggs", "product-data");
populateProducts("Unique Eggs", "product-data");

function loadHomePage() {
    window.location.href = '../index.html';
}

document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartBadge = document.querySelector('.cart-badge');
    const cartCountElement = document.getElementById('cart-count');
    let cartCount = 0;

    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            cartBadge.style.display = 'block';
            cartCount++;
            cartCountElement.textContent = cartCount;
        });
    });
});

$(document).ready(function () {
    var isLoginLinkClicked = false;
    var isSignupLinkClicked = false;

    $(".login-link").click(function (event) {
        event.stopPropagation();
        $(".login-container").toggle();
        $(".sign-up-container").hide();
        $(".header, .container, .footer").toggleClass("blur-background", $(".login-container").is(":visible") || $(".sign-up-container").is(":visible"));
        isLoginLinkClicked = true;
        isSignupLinkClicked = false;
    });

    $(".login-container").click(function (event) {
        event.stopPropagation();
    });

    $(".sign-up-link").click(function (event) {
        event.stopPropagation();
        $(".sign-up-container").toggle();
        $(".login-container").hide();
        $(".header, .container, .footer").toggleClass("blur-background", $(".login-container").is(":visible") || $(".sign-up-container").is(":visible"));
        isSignupLinkClicked = true;
        isLoginLinkClicked = false;
    });

    $(".sign-up-container").click(function (event) {
        event.stopPropagation();
    });

    $(".create-account-link").click(function (event) {
        event.stopPropagation();
        $(".login-container").hide();
        $(".sign-up-container").toggle();
        $(".header, .container, .footer").toggleClass("blur-background", $(".login-container").is(":visible") || $(".sign-up-container").is(":visible"));
        isLoginLinkClicked = false;
        isSignupLinkClicked = true;
    });

    $("body").click(function () {
        if ($(".login-container").is(":visible")) {
            $(".login-container").hide();
        }
        if ($(".sign-up-container").is(":visible")) {
            $(".sign-up-container").hide();
        }
        $(".header, .container, .footer").removeClass("blur-background");
        isLoginLinkClicked = false;
        isSignupLinkClicked = false;
    });
});
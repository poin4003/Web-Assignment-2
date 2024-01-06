const productData = {
    "Fauna": [
        { name: 'Oculus', price: '2.000$', rating: '4.5', sold: '40', image: '../image/Fish images/Oculus.jpg' },
        { name: 'Spinefish', price: '500$', rating: '4.4', sold: '201', image: '../image/Fish images/spinefish.jpg' }, 
        { name: 'Crimson Ray', price: '10.000$', rating: '4.1', sold: '105', image: '../image/Fish images/crimson ray.jpg' },
        { name: 'Peeper', price: '2.000$', rating: '4.8', sold: '200', image: '../image/Fish images/peeper.jpg' },
        { name: 'Spadefish', price: '2.000$', rating: '4.8', sold: '200', image: '../image/Fish images/spadefish.jpg' },
        { name: 'Hoverfish', price: '2.000$', rating: '4.8', sold: '200', image: '../image/Fish images/hoverfish.jpg' },
        { name: 'Crashfish', price: '2.000$', rating: '4.8', sold: '200', image: '../image/Fish images/crashfish.jpg' },
        { name: 'Garryfish', price: '2.000$', rating: '4.8', sold: '200', image: '../image/Fish images/garryfish.jpg' },
    ],
    "Carnivores": [
        { name: 'Ampeel', price: '12.000$', rating: '4.8', sold: '200', image: '../image/Fish images/ampeel.jpg' },
        { name: 'Crab Squid', price: '2.000$', rating: '4.8', sold: '200', image: '../image/Fish images/crabsquid.jpg' },
        { name: 'Cave Crawler', price: '2.000$', rating: '4.8', sold: '200', image: '../image/Fish images/cave crawler.jpg' },
        { name: 'Sand Shark', price: '2.000$', rating: '4.8', sold: '200', image: '../image/Fish images/sand shark.jpg' },
        { name: 'Crocodie', price: '2.000$', rating: '4.8', sold: '200', image: '../image/Fish images/crocodie.jpg' },
    ],
    "Leviathan": [
        { name: 'Sea Dragon Leviathan', price: '200.000$', rating: '4.8', sold: '200', image: '../image/Fish images/sea dragon leviathan.jpg' },
        { name: 'Ghost Leviathan', price: '170.000$', rating: '4.8', sold: '200', image: '../image/Fish images/ghose leviathan.jpg' },
        { name: 'Reaper Leviathan', price: '120.000$', rating: '4.8', sold: '200', image: '../image/Fish images/reaper leviathan.jpg' },
        { name: 'Mouth Leviathan', price: '130.000$', rating: '4.8', sold: '200', image: '../image/Fish images/mouth leviathan.jpg' },
        { name: 'Reefback Leviathan', price: '80.000$', rating: '4.8', sold: '200', image: '../image/Fish images/reefback leviathan.jpg' },
    ],
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

populateProducts("Fauna", "product-data");
populateProducts("Carnivores", "product-data");
populateProducts("Leviathan", "product-data");

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

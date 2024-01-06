const productData = {
    "Coral": [
        { name: 'Brain Coral', price: '500$', rating: '5.0', sold: '233', image: '../image/Plant images/brain coral.jpg' },
        { name: 'Sell Plates', price: '500$', rating: '5.0', sold: '233', image: '../image/Plant images/shell plates.jpg' },      
    ],
    "Flora": [
        { name: 'Acid Mushroom', price: '500$', rating: '5.0', sold: '233', image: '../image/Plant images/acid mushroom.jpg' },
        { name: 'Bloodvine', price: '500$', rating: '5.0', sold: '233', image: '../image/Plant images/bloodvine.jpg' },
        { name: 'Blue Palm', price: '500$', rating: '5.0', sold: '233', image: '../image/Plant images/blue palm.jpg' },
        { name: 'Creepvine', price: '500$', rating: '5.0', sold: '233', image: '../image/Plant images/creepvine.jpg' },
        { name: 'Larntern Tree', price: '500$', rating: '5.0', sold: '233', image: '../image/Plant images/lantern tree.jpg' },
        { name: 'Sea Crown', price: '500$', rating: '5.0', sold: '233', image: '../image/Plant images/sea crown.jpg' },
        { name: 'Speckled Rattler', price: '500$', rating: '5.0', sold: '233', image: '../image/Plant images/speckled rattler.jpg' },
        { name: 'Violet Beau', price: '500$', rating: '5.0', sold: '233', image: '../image/Plant images/violet beau.jpg' },
        { name: 'Writhing Weeb', price: '500$', rating: '5.0', sold: '233', image: '../image/Plant images/writhing weeb.jpg' }, 
        { name: 'Giant Cove Tree', price: '90.000$', rating: '5.0', sold: '233', image: '../image/Plant images/giant cove tree.jpg' },
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

populateProducts("Coral", "product-data");
populateProducts("Flora", "product-data");

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

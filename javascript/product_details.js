const productData = {
    "Other product": [
        { name: 'Spinefish', price: '500$', rating: '4.4', sold: '201', image: '../image/Fish images/spinefish.jpg' }, 
        { name: 'Peeper', price: '2.000$', rating: '4.8', sold: '200', image: '../image/Fish images/peeper.jpg' },
        { name: 'Garryfish', price: '2.000$', rating: '4.8', sold: '200', image: '../image/Fish images/garryfish.jpg' },
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

populateProducts("Other product", "product-data");

function loadHomePage() {
    window.location.href = '../index.html';
}

function loadCart() {
    window.location.href = '../html/cart.html';
}

function changeImage(clickedImage) {
    var newSrc = clickedImage.src;
    document.getElementById("mainImage").src = newSrc;
}

document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const addToCartDetailButton = document.getElementById('add-to-cart-detail');
    const cartBadge = document.querySelector('.cart-badge');
    const cartCountElement = document.getElementById('cart-count');
    let cartCount = 0;

    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', handleAddToCart);
    });

    addToCartDetailButton.addEventListener('click', handleAddToCart);

    function handleAddToCart() {
        cartBadge.style.display = 'block';
        cartCount++;
        cartCountElement.textContent = cartCount;
    }
});



$(document).ready(function () {
    var isLoginLinkClicked = false;
    var isSignupLinkClicked = false;

    $(".login-link").click(function (event) {
        event.stopPropagation();
        $(".login-container").toggle();
        $(".sign-up-container").hide();
        $(".header, .container, .footer, .product-detail").toggleClass("blur-background", $(".login-container").is(":visible") || $(".sign-up-container").is(":visible"));
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
        $(".header, .container, .footer, .product-detail").toggleClass("blur-background", $(".login-container").is(":visible") || $(".sign-up-container").is(":visible"));
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
        $(".header, .container, .footer, .product-detail").toggleClass("blur-background", $(".login-container").is(":visible") || $(".sign-up-container").is(":visible"));
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
        $(".header, .container, .footer, .product-detail").removeClass("blur-background");
        isLoginLinkClicked = false;
        isSignupLinkClicked = false;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const plus = document.querySelector(".plus");
    const minus = document.querySelector(".minus");
    const num = document.querySelector(".num");

    let a = 1;

    plus.addEventListener("click", () => {
        a++;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a; 
    });

    minus.addEventListener("click", () => {
        if (a > 1) {
            a--;
            a = (a < 10) ? "0" + a : a;
            num.innerText = a;
        }
    });
});


$(document).ready(function() {
    $('.see-more-inf').on('click', function() {
        var contentDetail = $('.display');
        var seeMoreButton = $(this);

        if (contentDetail.is(':hidden')) {
            // Hiển thị nội dung
            contentDetail.show();
            // Xóa lớp see-more-inf và thêm lớp collapse
            seeMoreButton.removeClass('see-more-inf').addClass('collapse');
            // Thay đổi nội dung của nút
            seeMoreButton.text('Collapse');
        } else {
            // Ẩn nội dung
            contentDetail.hide();
            // Xóa lớp collapse và thêm lớp see-more-inf
            seeMoreButton.removeClass('collapse').addClass('see-more-inf');
            // Thay đổi nội dung của nút
            seeMoreButton.text('See more information...');
        }
    });
});

$(document).ready(function() {
    $('.see-all').on('click', function() {
        var contentDetail = $('.display-comment');
        var seeMoreButton = $(this);

        if (contentDetail.is(':hidden')) {
            // Hiển thị nội dung với display: grid
            contentDetail.css('display', 'grid');
            // Xóa lớp see-all và thêm lớp collapse
            seeMoreButton.removeClass('see-all').addClass('collapse');
            // Thay đổi nội dung của nút
            seeMoreButton.text('Collapse');
        } else {
            // Ẩn nội dung
            contentDetail.hide();
            // Xóa lớp collapse và thêm lớp see-all
            seeMoreButton.removeClass('collapse').addClass('see-all');
            // Thay đổi nội dung của nút
            seeMoreButton.text('See all Comment...');
        }
    });
});

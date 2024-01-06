const productData = {
    "Other product": [
        { name: 'Spinefish', price: '500$', rating: '4.4', sold: '201', image: '../image/Fish images/spinefish.jpg' }, 
        { name: 'Peeper', price: '2000$', rating: '4.8', sold: '200', image: '../image/Fish images/peeper.jpg' },
        { name: 'Garryfish', price: '2000$', rating: '4.8', sold: '200', image: '../image/Fish images/garryfish.jpg' },
    ],
    "cart product": [
        { name: 'Oculus', price: '2000$', rating: '4.4', sold: '201', image: '../image/Fish images/oculus.jpg' }, 
        { name: 'Spinefish', price: '500$', rating: '4.4', sold: '201', image: '../image/Fish images/spinefish.jpg' },
        { name: 'Sea Crown', price: '500$', rating: '4.8', sold: '200', image: '../image/Plant images/sea crown.jpg' },
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

    // Thêm event listener cho nút "add-to-cart"
    const addToCartButton1 = infoDiv.querySelector('#add-to-cart');
    addToCartButton1.addEventListener('click', function(event) {
        // Ngăn chặn sự kiện click lan truyền lên đến phần tử cha (box)
        event.stopPropagation();

        // Lấy thông tin sản phẩm từ phần tử box
        const productName = product.name;
        const productPrice = product.price;
        const productImage = product.image;

        // Thêm sản phẩm vào bảng
        addToCart(productName, productPrice, productImage);
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

populateProducts("Other product", "product-data");

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

// Function to populate the table
function populateTable(data) {
    const tbody = $('#productTable tbody');
    tbody.empty(); // Clear existing rows

    let subtotal = 0;

    data["cart product"].forEach(product => {
        const row = `
            <tr>
                <td><img class="product-img" src="${product.image}"></td>
                <td>
                    <div class="product-tool">
                        <h2>${product.name}</h2>
                        <p id="type">Type: small</p>
                        <div class="product-tool-btn">
                            <div class="btn-icon">
                                <img id="edit-type" class="img-icon" src="../image/icon/edit.png">
                            </div>
                            <div class="btn-icon">
                                <img id="cart-minus" class="img-icon" src="../image/icon/cart-minus.png">
                            </div>
                        </div>
                    </div>
                </td>
                <td><span class="product-para" id="product-price">${product.price}</span></td>
                <td>
                    <div class="Quantity">
                        <div class="wrapper">
                            <span class="minus"><img src="../image/icon/minus.png"></span>
                            <span class="num">01</span>
                            <span class="plus"><img src="../image/icon/plus.png"></span>
                        </div>
                    </div>
                </td>
                <td><span class="product-para" id="total-price-product">${product.price}</span></td>
            </tr>
        `;
        tbody.append(row);

        // Convert price to number and add to subtotal
        subtotal += parseInt(product.price);
    });

    // Update subtotal in the DOM
    $('#subtotal').text(subtotal + '$');
}

// Call the function with the initial data
populateTable(productData);

$(document).ready(function () {
    // Bắt sự kiện khi người dùng nhấn vào nút "minus"
    $(document).on('click', '.minus', function () {
        updateQuantity($(this), -1);
    });

    // Bắt sự kiện khi người dùng nhấn vào nút "plus"
    $(document).on('click', '.plus', function () {
        updateQuantity($(this), 1);
    });

    // Bắt sự kiện khi người dùng nhấn vào nút "cart-minus"
    $(document).on('click', '#cart-minus', function () {
        // Xác định hàng trong bảng chứa nút "cart-minus" đã được nhấn
        var row = $(this).closest('tr');

        // Lấy giá sản phẩm từ DOM
        var productPrice = parseInt(row.find('#total-price-product').text().replace('$', ''));

        // Cập nhật tổng giá trị
        updateTotalPriceTable(-productPrice);

        // Xóa hàng khỏi bảng
        row.remove();
    });

    // Hàm cập nhật số lượng và giá sản phẩm
    function updateQuantity(element, change) {
        // Tìm đến phần tử chứa số lượng (.num) trong cùng một hàng
        var quantityElement = element.closest('tr').find('.num');

        // Lấy giá trị hiện tại của số lượng
        var currentQuantity = parseInt(quantityElement.text());

        // Cập nhật số lượng
        var newQuantity = currentQuantity + change;

        // Đảm bảo số lượng không âm
        if (newQuantity < 0) {
            newQuantity = 0;
        }

        // Cập nhật giá trị số lượng trong DOM
        quantityElement.text(newQuantity);

        // Lấy giá sản phẩm từ DOM
        var productPrice = parseInt(element.closest('tr').find('#product-price').text().replace('$', ''));

        // Cập nhật tổng giá sản phẩm
        var totalPrice = newQuantity * productPrice;
        element.closest('tr').find('#total-price-product').text(totalPrice + '$');

        // Gọi hàm cập nhật tổng giá trị
        updateTotalPriceTable();
    }

    // Hàm cập nhật tổng giá trị trong bảng
    function updateTotalPriceTable(change) {
        var total = 0;

        // Duyệt qua tất cả các hàng trong bảng
        $('table tbody tr').each(function () {
            var totalPrice = parseInt($(this).find('#total-price-product').text().replace('$', ''));
            total += totalPrice;
        });

        // Cập nhật tổng giá trị trong DOM
        $('#subtotal').text(total + '$');
    }

    // Biến toàn cục để giữ giá trị tổng
    var currentTotal = 0;

    // Hàm cập nhật tổng giá trị chung
    function updateTotalPrice(change) {
        // Kiểm tra xem currentTotal có phải là một số hợp lệ hay không
        if (isNaN(currentTotal)) {
            // Nếu không phải là số hợp lệ, sử dụng giá trị mặc định (0)
            currentTotal = 0;
            console.error('Giá trị tổng không hợp lệ');
        }

        // Cập nhật giá trị tổng
        currentTotal += change;

        // Cập nhật tổng giá trị trong DOM
        $('#subtotal').text(currentTotal.toFixed(2) + '$');
    }

    // Nếu cần reset giá trị tổng (ví dụ: khi trang được tải lại), sử dụng hàm này
    function resetTotalPrice() {
        currentTotal = 0;
        $('#subtotal').text('0.00$');
    }
});


$(document).ready(function () {
    // Bắt sự kiện khi người dùng nhấn vào nút "cart-minus"
    $(document).on('click', '#cart-minus', function () {
        // Xác định hàng trong bảng chứa nút "cart-minus" đã được nhấn
        var row = $(this).closest('tr');

        // Lấy giá sản phẩm từ DOM
        var productPrice = parseInt(row.find('#total-price-product').text().replace('$', ''));

        // Cập nhật tổng giá trị
        updateTotalPrice(-productPrice);

        // Xóa hàng khỏi bảng
        row.remove();
    });

    // Hàm cập nhật tổng giá trị
    function updateTotalPrice(change) {
        var totalElement = $('#subtotal');
        var currentTotal = parseInt(totalElement.text().replace('$', ''));

        // Cập nhật tổng giá trị trong DOM
        totalElement.text(currentTotal + change + '$');
    }
});

$(document).ready(function () {
    // Bắt sự kiện khi người dùng nhấn vào nút "edit-type"
    $(document).on('click', '#edit-type', function () {
        // Xác định phần tử chứa loại ("Type: small" hoặc "Type: big")
        var typeElement = $(this).closest('tr').find('#type');

        // Chuyển đổi giữa "Type: small" và "Type: big"
        if (typeElement.text() === 'Type: small') {
            typeElement.text('Type: big');
        } else {
            typeElement.text('Type: small');
        }
    });
});

// Hàm thêm sản phẩm vào bảng
function addToCart(productName, productPrice, productImage) {
    // Tìm phần tử tbody trong bảng (điều này cần được điều chỉnh dựa trên HTML của bạn)
    const tbody = document.querySelector('.table-cart tbody');

    // Tạo một hàng mới
    const newRow = document.createElement('tr');

    // Thêm các cột vào hàng
    newRow.innerHTML = `
        <td><img class="product-img" src="${productImage}"></td>
        <td>
            <div class="product-tool">
                <h2>${productName}</h2>
                <p id="type">Type: small</p>
                <div class="product-tool-btn">
                    <div class="btn-icon">
                        <img id="edit-type" class="img-icon" src="../image/icon/edit.png">
                    </div>
                    <div class="btn-icon">
                        <img id="cart-minus" class="img-icon" src="../image/icon/cart-minus.png">
                    </div>
                </div>
            </div>
        </td>
        <td><span class="product-para" id="product-price">${productPrice}</span></td>
        <td>
            <div class="Quantity">
                <div class="wrapper">
                    <span class="minus"><img src="../image/icon/minus.png"></span>
                    <span class="num">01</span>
                    <span class="plus"><img src="../image/icon/plus.png"></span>
                </div>
            </div>
        </td>
        <td><span class="product-para" id="total-price-product">${productPrice}</span></td>
    `;

    // Thêm hàng mới vào tbody
    tbody.appendChild(newRow);

    // Gọi hàm cập nhật tổng giá trị nếu cần
    updateTotalPrice();
}

$(document).ready(function () {
    // Bắt sự kiện khi người dùng nhấn vào nút "checkout-btn"
    $(document).on('click', '.checkout-btn', function () {
        alert('Mua thành công');
        
        // Reset trang bằng cách tải lại nó
        location.reload();
    });
});

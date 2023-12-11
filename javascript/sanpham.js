// let sp={name: "Essentials Pants", img: "../image/product_44.jpg", price: 640000, id: "p42", quantity: 100,brand:"adidas",size:"L"};
let pants=[];
let shirt=[];
if (localStorage['arrSp'] == null) {
    const arrSp=
        [
            { id: 64 ,name: "Essentials Fleece Jogger Pants", img: "../image/product_64.jpg", price: 640000, tag: "p64", quantity: 0, brand:"adidas",size:"L"},
            { id: 65 ,name: "Adicolor SST Track Pants", img: "../image/product_65.jpg", price: 800000, tag: "p65", quantity: 0, brand:"adidas",size:"L"},
            { id: 68 ,name: "ID Pants", img: "../image/product_68.jpg", price: 900000, tag: "p68", quantity: 0, brand:"adidas",size:"L"},
            { id: 69 ,name: "Cross Up 365 Pants", img: "../image/product_69.jpg", price: 900000, tag: "p69", quantity: 0, brand:"adidas",size:"L"},
            { id: 32,name: "Pride Trefoil Flag Fill Tee", img: "../image/product_32.jpg", price: 600000, tag: "s32", quantity: 0, brand:"adidas",size:"L"},
            { id: 33 ,name: "Big Badge of Sport Boxy Tee", img: "../image/product_33.jpg", price: 600000, tag: "s33", quantity: 0, brand:"adidas",size:"L"},
            { id: 15 ,name: "Chile 20 Tee", img: "../image/product_15.jpg", price: 900000, tag: "s15", quantity: 0, brand:"adidas",size:"L"},
            { id: 16 ,name: "3D Trefoil Graphic Tee", img: "../image/product_16.jpg", price: 600000, tag: "s16", quantity: 0, brand:"adidas",size:"L"},
            { id: 0 ,name: "Trefoil Tee", img: "../image/product_0.jpg", price: 600000, tag: "s0", quantity: 0, brand:"adidas",size:"L"},
            { id: 1 ,name: "Short Sleeve Shmoo Tee", img: "../image/product_1.jpg", price: 700000, tag: "s1", quantity: 0, brand:"adidas",size:"L"},
            { id: 2 ,name: "Must Haves Stadium Tee", img: "../image/product_2.jpg", price: 560000, tag: "s2", quantity: 0, brand:"adidas",size:"L"},
            { id: 3 ,name: "Run It 3-Stripes PB Tee", img: "../image/product_3.jpg", price: 700000, tag: "s3", quantity: 0, brand:"adidas",size:"L"},
            { id: 4 ,name: "Own Long Sleeve Tee", img: "../image/product_4.jpg", price: 700000, tag: "s4", quantity: 0, brand:"adidas",size:"L"},
            { id: 5 ,name: "Own the Run Tee", img: "../image/product_5.jpg", price: 700000, tag: "s5" , quantity: 0, brand:"adidas",size:"L"},
            { id: 6 ,name: "3-Stripes Tee", img: "../image/product_6.jpg", price: 700000, tag: "s6", quantity: 0, brand:"adidas",size:"L"},
            { id: 7 ,name: "Chile 20 Tee", img: "../image/product_7.jpg", price: 800000, tag: "s7", quantity: 0, brand:"adidas",size:"L"},
            { id: 8 ,name: "Trefoil Tee", img: "../image/product_8.jpg", price: 600000, tag: "s8", quantity: 0, brand:"adidas",size:"L"},
            { id: 9 ,name: "Real Madrid Third Jersey", img: "../image/product_9.jpg", price: 1800000, tag: "s9", quantity: 0, brand:"adidas",size:"L"},
            { id: 10,name: "25/7 Primeblue Tee", img: "../image/product_10.jpg", price: 900000, tag: "s10", quantity: 0, brand:"adidas",size:"L"},
            { id: 11 ,name: "3-Stripes Tee", img: "../image/product_11.jpg", price: 800000, tag: "s11", quantity: 0, brand:"adidas",size:"L"},
            { id: 12,name: "NY Pigeon Tee", img: "../image/product_12.jpg", price: 600000, tag: "s12", quantity: 0, brand:"adidas",size:"L"},
            { id: 14 ,name: "Arsenal Third Jersey", img: "../image/product_14.jpg", price: 1800000, tag: "s14", quantity: 0, brand:"adidas",size:"L"},
            { id: 17 ,name: "Trefoil Tee", img: "../image/product_17.jpg", price: 600000, tag: "s17", quantity: 0, brand:"adidas",size:"L"},
            { id: 18 ,name: "3-Stripes Tee", img: "../image/product_18.jpg", price: 700000, tag: "s18", quantity: 0, brand:"adidas",size:"L"},
            { id: 19 ,name: "Adiprene Tee", img: "../image/product_19.jpg", price: 560000, tag: "s19", quantity: 0, brand:"adidas",size:"L"},
            { id: 20 ,name: "Chile 20 Tee", img: "../image/product_20.jpg", price: 800000, tag: "s20", quantity: 0, brand:"adidas",size:"L"},
            { id: 21,name: "M.U Long Sleeve Tee", img: "../image/product_21.jpg", price: 1400000, tag: "s21", quantity: 0, brand:"adidas",size:"L"},
            { id: 22 ,name: "R.Y.V. Graphic Tee", img: "../image/product_22.jpg", price: 800000, tag: "s22", quantity: 0, brand:"adidas",size:"L"},
            { id: 23 ,name: "New Stacked LA Trefoil Tee", img: "../image/product_23.jpg", price: 600000, tag: "s23", quantity: 0, brand:"adidas",size:"L"},
            { id: 24 ,name: "M.U Third Jersey", img: "../image/product_24.jpg", price: 1800000, tag: "s24", quantity: 0, brand:"adidas",size:"L"},
            { id: 26 ,name: "Badge of Sport Tee", img: "../image/product_26.jpg", price: 500000, tag: "s26", quantity: 0, brand:"adidas",size:"L"},
            { id: 27 ,name: "Own the Run Tee", img: "../image/product_27.jpg", price: 700000, tag: "s27", quantity: 0, brand:"adidas",size:"L"},
            { id: 29 ,name: "TAN Logo Tee", img: "../image/product_29.jpg", price: 800000, tag: "s29", quantity: 0, brand:"adidas",size:"L"},
            { id: 30 ,name: "Torsion Tee", img: "../image/product_30.jpg", price: 700000, tag: "s30", quantity: 0, brand:"adidas",size:"L"},
            { id: 31 ,name: "Big Trefoil Outline Tee", img: "../image/product_31.jpg", price: 600000, tag: "s31", quantity: 0, brand:"adidas",size:"L"},
            { id: 34 ,name: "Lil Stripe Splash Tee", img: "../image/product_34.jpg", price: 500000, tag: "s34", quantity: 0, brand:"adidas",size:"L"},
            { id: 35 ,name: "Adiprene Tee", img: "../image/product_35.jpg", price: 700000, tag: "s35", quantity: 0, brand:"adidas",size:"L"},
            { id: 36,name: "Juventus 20/21 Third Jersey", img: "../image/product_36.jpg", price: 1800000, tag: "s36", quantity: 0, brand:"adidas",size:"L"},
            { id: 37 ,name: "Real Madrid DNA Graphic Tee", img: "../image/product_37.jpg", price: 500000, tag: "s37", quantity: 0, brand:"adidas",size:"L"},
            { id: 38 ,name: "Captain Tsubasa Tee", img: "../image/product_38.jpg", price: 800000, tag: "s38", quantity: 0, brand:"adidas",size:"L"},
            { id: 39 ,name: "USA Volleyball 1/4 Zip Tee", img: "../image/product_39.jpg", price: 1100000, tag: "s39", quantity: 0, brand:"adidas",size:"L"},
            { id: 40 ,name: "Unity Tee", img: "../image/product_40.jpg", price: 800000, tag: "s40", quantity: 0, brand:"adidas",size:"L"},
            { id: 41 ,name: "R.Y.V. Tee", img: "../image/product_41.jpg", price: 600000, tag: "s41", quantity: 0, brand:"adidas",size:"L"},
            { id: 42 ,name: "Badge of Sport Tee", img: "../image/product_42.jpg", price: 600000, tag: "s42", quantity: 0, brand:"adidas",size:"L"},
            { id: 43 ,name: "New Stacked Trefoil Tee", img: "../image/product_43.jpg", price: 600000, tag: "s43", quantity: 0, brand:"adidas",size:"L"},
            { id: 44,name: "Essentials Pants", img: "../image/product_44.jpg", price: 640000, tag: "p44", quantity: 0, brand:"adidas",size:"L"},
            { id: 45 ,name: "Tiro 19 Training Pants", img: "../image/product_45.jpg", price: 800000, tag: "p45", quantity: 0, brand:"adidas",size:"L"},
            { id: 46,name: "3-Stripes Pants", img: "../image/product_46.jpg", price: 900000, tag: "p46", quantity: 0, brand:"adidas",size:"L"},
            { id: 47 ,name: "adidas Z.N.E. Pants", img: "../image/product_47.jpg", price: 640000, tag: "p47", quantity: 0, brand:"adidas",size:"L"},
            { id: 48 ,name: "Tiro 19 Training Pants", img: "../image/product_48.jpg", price: 800000, tag: "p48", quantity: 0, brand:"adidas",size:"L"},
            { id: 49 ,name: "Essentials 3-Stripes Wind Pants", img: "../image/product_49.jpg", price: 1200000, tag: "p49", quantity: 0, brand:"adidas",size:"L"},
            { id: 50 ,name: "Sport French Terry Pants", img: "../image/product_50.jpg", price: 1700000, tag: "p50", quantity: 0, brand:"adidas",size:"L"},
            { id: 51,name: "Woven Tape Pants", img: "../image/product_51.jpg", price: 900000, tag: "p51", quantity: 0, brand:"adidas",size:"L"},
            { id: 52 ,name: "Trefoil Essentials Pants", img: "../image/product_52.jpg", price: 640000, tag: "p52", quantity: 0, brand:"adidas",size:"L"},
            { id: 53 ,name: "3-Stripes Pants", img: "../image/product_53.jpg", price: 900000, tag: "p53", quantity: 0, brand:"adidas",size:"L"},
            { id: 54 ,name: "Run It 3-Stripes Astro Pants", img: "../image/product_54.jpg", price: 1000000, tag: "p54", quantity: 0, brand:"adidas",size:"L"},
            { id: 55 ,name: "Aeroready Knit Pants", img: "../image/product_55.jpg", price: 860000, tag: "p55", quantity: 0, brand:"adidas",size:"L"},
            { id: 56 ,name: "Outline Sweat Pants", img: "../image/product_56.jpg", price: 1240000, tag: "p56", quantity: 0, brand:"adidas",size:"L"},
            { id: 57 ,name: "3-Stripes Pants", img: "../image/product_57.jpg", price: 780000, tag: "p57", quantity: 0, brand:"adidas",size:"L"},
            { id: 58 ,name: "Tiro 19 Training Pants", img: "../image/product_58.jpg", price: 1100000, tag: "p58", quantity: 0, brand:"adidas",size:"L"},
            { id: 59 ,name: "Essentials Wind Pants", img: "../image/product_59.jpg", price: 1200000, tag: "p59", quantity: 0, brand:"adidas",size:"L"},
            { id: 60 ,name: "Tiro 19 Training Pants", img: "../image/product_60.jpg", price: 1200000, tag: "p60", quantity: 0, brand:"adidas",size:"L"},
            { id: 61 ,name: "French Terry Pants", img: "../image/product_61.jpg", price: 1600000, tag: "p61", quantity: 0, brand:"adidas",size:"L"},
            { id: 62 ,name: "Alphaskin 2.0 Sport Tights", img: "../image/product_62.jpg", price: 1120000, tag: "p62", quantity: 0, brand:"adidas",size:"L"},
            { id: 63 ,name: "Firebird Track Pants", img: "../image/product_63.jpg", price: 1400000, tag: "p63", quantity: 0, brand:"adidas",size:"L"},
            { id: 66 ,name: "Must Haves Primeblue Pants", img: "../image/product_66.jpg", price: 900000, tag: "p66", quantity: 0, brand:"adidas",size:"L"},
            { id: 67 ,name: "Classics Track Pants", img: "../image/product_67.jpg", price: 640000, tag: "p67", quantity: 0, brand:"adidas",size:"L"},
            { id: 70 ,name: "Bouclette Pants", img: "../image/product_70.jpg", price: 1000000, tag: "p70", quantity: 0, brand:"adidas",size:"L"},
            { id: 71 ,name: "Own the Run Astro Pants", img: "../image/product_71.jpg", price: 640000, tag: "p71", quantity: 0, brand:"adidas",size:"L"},
            { id: 72 ,name: "R.Y.V. Sweat Pants", img: "../image/product_72.jpg", price: 900000, tag: "p72", quantity: 0, brand:"adidas",size:"L"},
            { id: 73 ,name: "O Shape Pants", img: "../image/product_73.jpg", price: 1120000, tag: "p73", quantity: 0, brand:"adidas",size:"L"},
            { id: 74 ,name: "Must Haves Stadium Pants", img: "../image/product_74.jpg", price: 1400000, tag: "p74", quantity: 0, brand:"adidas",size:"L"},
            { id: 75 ,name: "3-Stripes Pants", img: "../image/product_75.jpg", price: 900000, tag: "p75", quantity: 0, brand:"adidas",size:"L"},
            { id: 76 ,name: "Essentials Tapered Pants", img: "../image/product_76.jpg", price: 1300000, tag: "p76", quantity: 0, brand:"adidas",size:"L"},
            { id: 77 ,name: "Brilliant Basics Pants", img: "../image/product_77.jpg", price: 840000, tag: "p77", quantity: 0, brand:"adidas",size:"L"},
            { id: 78 ,name: "adidas Z.N.E. Woven Pants", img: "../image/product_78.jpg", price: 1200000, tag: "p78", quantity: 0, brand:"adidas",size:"L"},
            { id: 79 ,name: "3-Stripes Tapered Pants", img: "../image/product_79.jpg", price: 1120000, tag: "p79", quantity: 0, brand:"adidas",size:"L"},
            { id: 80 ,name: "Camouflage Pants", img: "../image/product_80.jpg", price: 1400000, tag: "p80", quantity: 0, brand:"adidas",size:"L"},
            { id: 81 ,name: "Essentials Colorblock Pants", img: "../image/product_81.jpg", price: 840000, tag: "p81", quantity: 0, brand:"adidas",size:"L"},
            { id: 82 ,name: "Adventure Track Pants", img: "../image/product_82.jpg", price: 1200000, tag: "p82", quantity: 0, brand:"adidas",size:"L"},
            { id: 83 ,name: "Essentials 3-StripesPants", img: "../image/product_83.jpg", price: 1200000, tag: "p83", quantity: 0, brand:"adidas",size:"L"},
            { id: 84 ,name: "Adi Primeblue Track Pants", img: "../image/product_84.jpg", price: 1600000, tag: "p84", quantity: 0, brand:"adidas",size:"L"},
            { id: 85 ,name: "Tiro 19 Training Pants", img: "../image/product_85.jpg", price: 840000, tag: "p85", quantity: 0, brand:"adidas",size:"L"},
            { id: 86 ,name: "3D Trefoil Graphic Sweat Pants", img: "../image/product_86.jpg", price: 1200000, tag: "p86", quantity: 0, brand:"adidas",size:"L"}
              ];
        localStorage.setItem('arrSp', JSON.stringify(arrSp));
}
let arrSp = localStorage.getItem('arrSp') ? JSON.parse(localStorage.getItem('arrSp')) : [];

let currentCategory = "all";

function getCurrentCategoryList() {
    if (currentCategory === "all") {
        return arrSp;
    } else if (currentCategory === "pants") {
        return pants;
    } else if (currentCategory === "shirt") {
        return shirt;
    }
}

// Assign the function to a variable
//let getCurrentCategory = getCurrentCategoryList();

function listPage(items) {
    let count = Math.ceil(items.length / limit);
    document.querySelector('.pagination').innerHTML = '';

    if (count > 1) {
        if (thisPage !== 1) {
            appendPageItem('<<', thisPage - 1, items);
        }

        for (let i = 1; i <= count; i++) {
            appendPageItem(i, i, items);
        }

        if (thisPage !== count) {
            appendPageItem('>>', thisPage + 1, items);
        }
    }
}

function showProduct(arr) {
    let str = "";
    // console.log(arr.length)
    for (let i = 0; i < arr.length; i++) {
        let obj = JSON.stringify(arr[i]);
        str += `<div class="cartegory-right-content-item" id="ctgr-content-item">
                    <div class=".product-item">
                        <div class="product-wrapper">
                            <div class="product-image product-image-block">
                                <a href="#" title="${arr[i].name}">
                                    <img src="./image/${arr[i].img}" alt="${arr[i].name}" class="image_main img-responsive center-block image_product">
                                </a>
                                
                            </div>
                            <h3 class="product_name">
                                <a href="#" title="${arr[i].name}">${arr[i].name}</a>
                            </h3>
                            <div class="product_prices">
                                <span class="special-price">${arr[i].price}</span><sup class="special-price-sup">đ</sup>
                                <button class="btndetail" onclick='showDetail(${obj})'>Detail</button>
                            </div>
                        </div>
                    </div>
                </div>`;
    }

    document.querySelector(".cartegory-right-content").innerHTML = str;
    listPage(arr);
}

let thisPage = 1;
let limit = 12;

function loadItem(items) {
    let begin = limit * (thisPage - 1);
    let end = limit * thisPage - 1;
    let list = document.querySelectorAll('.cartegory-right-content .cartegory-right-content-item');

    list.forEach((item, key) => {
        if (key >= begin && key <= end) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    listPage(items);
}

function changePage(pageNumber, items) {
    thisPage = pageNumber;
    loadItem(items);
}

function appendPageItem(text, pageNumber, items) {
    let pageItem = document.createElement('li');
    pageItem.innerText = text;

    if (pageNumber === thisPage) {
        pageItem.classList.add('active');
    }

    pageItem.onclick = function () {
        changePage(pageNumber, items);
    };

    document.querySelector('.pagination').appendChild(pageItem);
}

document.addEventListener('DOMContentLoaded', initializePage);

function initializePage(item) {
    loadItem(item);
    listPage(item);
}

showProduct(arrSp);
function showDetail(objSP){
    // window.localStorage.clear();
    // console.log(objSP);
    window.localStorage.setItem("sanpham", JSON.stringify(objSP));
   
    var product = JSON.parse(localStorage.getItem('sanpham'));
    var temp1 = '<img src="image/' + product.img + '">';

    var temp2 = '<h2>' + product.name + '</h2><div class="rating"><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span><span>&#9733</span></div><p class="price-p">' + product.price.toLocaleString('sanpham', {style : 'currency', currency : 'VND'}) + '</p>';
    
    document.getElementById('image').innerHTML = temp1;
    document.getElementById('productInfo').innerHTML = temp2;
    document.getElementById('image1').innerHTML = temp1;
    document.getElementById('productInfo1').innerHTML = temp2;
   // document.querySelector("#image").src=`./image/${product.img}`;
  // document.querySelector("#productInfo").innerHTML=product.name;
    document.getElementById('product_detail').style.top="10%";
    document.getElementById('product_detail1').style.top="10%";
    //document.getElementById("atc").innerHTML = '<a class="btnAddtoCart" >Add to cart</a>'
    
}


function closeDetail()
{
	document.getElementById('product_detail').style.top = "-300%";
    document.getElementById('product_detail1').style.top = "-300%";
    // document.getElementById('product_detail2').style.top = "-300%";
//     document.getElementById('product_detail3').style.top = "-300%";
//     document.getElementById('product_detail4').style.top = "-300%";
//     document.getElementById('product_detail5').style.top = "-300%";
//     document.getElementById('product_detail6').style.top = "-300%";
//     document.getElementById('product_detail7').style.top = "-300%";
//     document.getElementById('product_detail8').style.top = "-300%";
}
function changePagetoPage(category) {
    document.getElementById('main1').style.display = "block";
    document.getElementById('homePage1').style.display = "none";
    document.getElementById('footeron').style.display = "block";
    document.getElementById('showCart').style.display = "none";
    list = document.querySelectorAll('.cartegory-right-content .cartegory-right-content-item');
    thisPage = 1;

    let categoryArray;
    if (category === "all") {
        showProduct(arrSp);
        loadItem(arrSp);
        categoryArray = arrSp;
        currentCategory = "all";
        document.getElementById("typeproduct").style.display="flex";
    } else if (category === "pants") {
        showProduct(pants);
        loadItem(pants);
        categoryArray = pants;
        currentCategory = "pants";
        document.getElementById("typeproduct").style.display="none";
    } else if (category === "shirt") {
        showProduct(shirt);
        loadItem(shirt);
        categoryArray = shirt;
        currentCategory = "shirt";
        document.getElementById("typeproduct").style.display="none";
    }

    listPage(categoryArray);
    initializePage(categoryArray);
}


// Initialize pants and shirt arrays

for (let i = 0; i < arrSp.length; i++) {
    if (arrSp[i].name.toLowerCase().includes('pants')) {
        pants.push(arrSp[i]);
    } else {
        shirt.push(arrSp[i]);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    showNewArrivals(arrSp)
    showBestSeller(arrSp);
});

function showBestSeller(arr) {
    let str = "";

    for (let i = 0; i < 4; i++) {
        let obj = JSON.stringify(arr[i]);
        str += `<div class="cartegory-right-content-item">
                    <div class=".product-item">
                        <div class="product-wrapper">
                            <div class="product-image product-image-block">
                                <a href="#" title="${arr[i].name}">
                                    <img src="./image/${arr[i].img}" alt="${arr[i].name}" class="image_main img-responsive center-block image_product">
                                </a>
                            </div>
                            <h3 class="product_name">
                                <a href="#" title="${arr[i].name}">${arr[i].name}</a>
                            </h3>
                            <div class="product_prices">
                                <span class="special-price">${arr[i].price}</span><sup class="special-price-sup">đ</sup>
                                <button class="btndetail" onclick='showDetail(${obj})'>Detail</button>
                            </div>
                        </div>
                    </div>
                </div>`;
    }
    
    document.querySelector(".bestsellers").innerHTML = str;
   
    listPage(arr);
}

function showNewArrivals(arr) {
    let str = "";

    for (let i = 4; i < 8; i++) {
        let obj = JSON.stringify(arr[i]);
        str += `<div class="cartegory-right-content-item" >
                    <div class=".product-item">
                        <div class="product-wrapper">
                            <div class="product-image product-image-block">
                                <a href="#" title="${arr[i].name}">
                                    <img src="./image/${arr[i].img}" alt="${arr[i].name}" class="image_main img-responsive center-block image_product">
                                </a>
                            </div>
                            <h3 class="product_name">
                                <a href="#" title="${arr[i].name}">${arr[i].name}</a>
                            </h3>
                            <div class="product_prices">
                                <span class="special-price">${arr[i].price}</span><sup class="special-price-sup">đ</sup>
                                <button class="btndetail" onclick='showDetail(${obj})'>Detail</button>
                            </div>
                        </div>
                    </div>
                </div>`;
    }
    
    document.querySelector(".newarrivals").innerHTML = str;
    
    listPage(arr);
}

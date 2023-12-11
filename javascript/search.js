let filters = {
    name: '',
    cartegory: '',
    minPrice: '',
    maxPrice: ''
};
//let listProduct = document.getElementById("ctgrr");
let filter = document.querySelector(".filter");
let filteredProducts = [];
filter.addEventListener('submit', function (event) {
    event.preventDefault();
    let valueFilter = event.target.elements;
    filters = {
        name: valueFilter.name.value.trim(),
        cartegory: valueFilter.cartegory.value,
        minPrice: valueFilter.minPrice.value,
        maxPrice: valueFilter.maxPrice.value
    };

    applyFilters();
    loadItem(filteredProducts);
    
    console.log(filteredProducts);
});

function applyFilters() {
    filteredProducts = arrSp.filter(item => {
        let itemNameLower = item.name.toLowerCase();

        if (filters.name !== '' && !itemNameLower.includes(filters.name.toLowerCase())) {
            return false;
          }
      
          if (filters.cartegory !== '') {
            if (filters.cartegory === 'Pants' && !itemNameLower.includes('pants')) {
                return false;
            }

            if (filters.cartegory === 'T-SHIRTS' && itemNameLower.includes('pants')) {
                return false;
            }
        }
      
          if (filters.minPrice !== '' && item.price < filters.minPrice) {
            return false;
          }
      
          if (filters.maxPrice !== '' && item.price > filters.maxPrice) {
            return false;
          }
      
          return true;
        });
    thisPage=1;
    limit = 12;
    
        loadItem(filteredProducts);
        listPage(filteredProducts);
        showProduct(filteredProducts);
    if(filteredProducts.length===0)
       {
        alert("Không tìm thấy sản phẩm");
       }
       if(filteredProducts.length===1) 
       {
        document.getElementById("ctgr-content-item").style.width="100%";
    }
    if(filteredProducts.length===2) 
    {
    
     document.getElementById("ctgr-content-item").style.width="50%";
  
 }
    
}
function filterByName(arr, searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    return arr.filter(function (product) {
        return product.name.toLowerCase().includes(searchTerm);
    });
}

// Hàm xử lý
document.querySelector('.buttonSearch').addEventListener('click', function (event) {
    event.preventDefault();

    var searchInput = document.querySelector('.searchbar');
    var searchTerm = searchInput.value.trim();

    if (searchTerm !== '') {
      
        var filteredProducts = filterByName(arrSp, searchTerm);
        showProduct(filteredProducts);
        list = document.querySelectorAll('.cartegory-right-content .cartegory-right-content-item');
        loadItem(filteredProducts);

        document.getElementById('main1').style.display = "block";
        document.getElementById('homePage1').style.display = "none";
        document.getElementById('footeron').style.display = "block";

        currentCategory = "search"; 
        if (filteredProducts.length === 1) {
           
            document.getElementById("ctgr-content-item").style.width = "100%";
           
        }
        console.log(typeof filteredProducts.length);
        if (filteredProducts.length <= 0) {
            alert("Không tìm thấy sản phẩm");
        }
    } else {
        alert("Vui lòng nhập từ khóa tìm kiếm");
    }
});

document.querySelector('.searchbar').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.querySelector('.buttonSearch').click();
    }
});

let arrSp = localStorage.getItem('arrSp') ? JSON.parse(localStorage.getItem('arrSp')) : [];
// const bills = [
//     {billId:"billId", customerName:"customerName", totalAmount: 300, orderDate:"orderDate", status:"chưa duyệt"},
//     {billId:"billId1", customerName:"customerName1", totalAmount: 200, orderDate:"orderDate1", status:"chưa duyệt"},
// ]
    // localStorage.setItem('bills', JSON.stringify(bills));

let userList = localStorage.getItem('userList') ? JSON.parse(localStorage.getItem('userList')) : [];
localStorage.setItem('userList', JSON.stringify(userList));


document.querySelector('.child1').addEventListener('click', function () {
    showManager('bill_Manager');
});
document.querySelector('.child2').addEventListener('click', function () {
    showManager('user_Manager');
});
document.querySelector('.child3').addEventListener('click', function () {
    showManager('product_Manager');
});
document.querySelector('.product_Manager_Add').addEventListener('click', function () {
    document.getElementById('pmaddform').style.display = 'block';
});
document.querySelector('.close').addEventListener('click', function () {
    closeForm();
});

function closeForm() {
    document.getElementById('pmaddform').style.display = 'none';
    clearFormFields();
    document.getElementById('saveProduct').style.display = 'block';
    document.getElementById('updateProduct').style.display = 'none';
}

function showManager(managerId) {
    const managers = ['product_Manager', 'user_Manager', 'bill_Manager'];
    managers.forEach(manager => {
        const displayStyle = manager === managerId ? 'block' : 'none';
        document.getElementById(manager).style.display = displayStyle;
    });
    closeForm();
    closeFormUser();
}

function clearFormFields() {
    const fields = ['id', 'name', 'price', 'brand','tag', 'size', 'quantity', 'img'];
    fields.forEach(field => {
        document.getElementById(field).value = '';
    });
}

// ==================================================
function save() {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let quantity = document.getElementById('quantity').value;
    let tag = document.getElementById('tag').value;
    let brand = document.getElementById('brand').value;
    let size = document.getElementById('size').value;
    let img = document.getElementById('img').value;


    if (id.length=='') {
        alert('Vui lòng nhập mã sản phẩm');
        document.getElementById('id').value = '';
        return 0;
    } 
    // checkid(id);

    if (name.length=='') {
        alert('Vui lòng nhập tên sản phẩm');
        document.getElementById('name').value = '';
        return 0;
    }
    if (price.length=='') {
        alert('Vui lòng nhập giá sản phẩm');
        document.getElementById('price').value = '';
        return 0;
    }
    if (quantity.length=='') {
        alert('Vui lòng nhập số lượng sản phẩm');
        document.getElementById('quantity').value = '';
        return 0;
    }
    if (tag.length=='') {
        alert('Vui lòng nhập tag sản phẩm');
        document.getElementById('tag').value = '';
        return 0;
    }
    if (img.length=='') {
        alert('Vui lòng nhập ảnh');
        return 0;
    }
    if (brand.length=='') {
        alert('Vui lòng nhập brand sản phẩm');
        document.getElementById('tag').value = '';
        return 0;
    }
    if (size.length=='') {
        alert('Vui lòng nhập size sản phẩm');
        document.getElementById('size').value = '';
        return 0;
    }
    img = '../image/' + img.substr(12, img.length - 12);
    closeForm();
    
    if (id && name && price && quantity && img && brand && size) {
         let arrSp = localStorage.getItem('arrSp') ? JSON.parse(localStorage.getItem('arrSp')) : [];

        arrSp.push({
            id: id,
            name: name,
            price: price,
            tag: tag,
            quantity: quantity,
            brand: brand,
            size: size,
            img: img,
        });

        localStorage.setItem('arrSp', JSON.stringify(arrSp));
        renderListProduct();
    }   
}
function renderListProduct() {
    let product = localStorage.getItem('arrSp') ? JSON.parse(localStorage.getItem('arrSp')) : [];
    document.getElementById('list_Products').style.display='block';
    let tableContent = `<tr>
            <th>ID</th>
            <th>NAME</th>
            <th>IMAGE</th>
            <th>PRICE</th>
            <th>TAG</th>
            <th>QUANTITY</th>
            <th>BRAND</th>
            <th>SIZE</th>
            <th class="actionshow">ACTION</th>
        </tr>`;

        product.forEach((product, index) => {
            let productId = index;
            index++;   
            tableContent += `<tr>
                <td class="idshow">${product.id}</td>
                <td class="nameshow">${product.name}</td>
                <td class="imgshow"> <img src="./image/${product.img}" alt="Chức năng đang phát triển" style="height: 30px; width: 30px;"></td>
                <td class="priceshow">${product.price}</td>
                <td>${product.tag}</td>
                <td>${product.quantity}</td>
                <td >${product.brand}</td>
                <td >${product.size}</td>
                <td>
                    <button onclick='editProduct(${productId})'>Edit</button> | <button onclick='deleteProduct(${productId})'>Delete</button>
                </td>
            </tr>`;
        })
        document.getElementById('list_Products').innerHTML = tableContent;
}

function deleteProduct(id) {
    let arrSp = localStorage.getItem('arrSp') ? JSON.parse(localStorage.getItem('arrSp')) : [];
    arrSp.splice(id,1);
    localStorage.setItem('arrSp',JSON.stringify(arrSp));
    renderListProduct();
}

function editProduct(id) {
    let arrSp = localStorage.getItem('arrSp') ? JSON.parse(localStorage.getItem('arrSp')) : [];

    document.getElementById('id').value = arrSp[id].id;
    document.getElementById('name').value = arrSp[id].name;
    document.getElementById('price').value = arrSp[id].price;
    document.getElementById('tag').value = arrSp[id].tag;
    document.getElementById('quantity').value = arrSp[id].quantity;
    document.getElementById('brand').value = arrSp[id].brand;
    document.getElementById('size').value = arrSp[id].size;
    document.getElementById('imgtmp').value = arrSp[id].img;
    document.getElementById('index').value = id;

    document.getElementById('saveProduct').style.display = 'none';
    document.getElementById('updateProduct').style.display = 'inline-block';
    document.getElementById('pmaddform').style.display = 'block';
    
}

function changeProduct() {
    let arrSp = localStorage.getItem('arrSp') ? JSON.parse(localStorage.getItem('arrSp')) : [];
    let index = document.getElementById("index").value;
    
    arrSp[index]={
        id: document.getElementById('id').value,
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        tag: document.getElementById('tag').value,
        quantity: document.getElementById('quantity').value,
        brand: document.getElementById('brand').value,
        size: document.getElementById('size').value,
        img: document.getElementById('imgtmp').value,
    }
    // checkid(document.getElementById('id').value)
    localStorage.setItem('arrSp',JSON.stringify(arrSp));   
    renderListProduct();
    closeForm();
}

// function checkid(InputId) {
//     let arrSp = localStorage.getItem('arrSp') ? JSON.parse(localStorage.getItem('arrSp')) : [];
//     for(let i=0; i<arrSp.length; i++) {
//         let existingId  = arrSp[i].id;
//         if (InputId==existingId) {
//             alert("Mã sản phẩm này đã tồn tại. Hãy chọn mã sản phẩm khác");
//             document.getElementById('id').value = ''
//             return 0;
//         }
//     }
// }

function searchProductId() {
    let arrSp = localStorage.getItem('arrSp') ? JSON.parse(localStorage.getItem('arrSp')) : [];
    let valueSearch = document.getElementById('search').value;
    let idSearch = arrSp.filter(value => {
        return value.name.toUpperCase().includes(valueSearch.toUpperCase())
    })
    
    let tableContent = `<tr>
            <th>ID</th>
            <th>NAME</th>
            <th>IMAGE</th>
            <th>PRICE</th>
            <th>TAG</th>
            <th>QUANTITY</th>
            <th>BRAND</th>
            <th>SIZE</th>
            <th class="actionshow">ACTION</th>
        </tr>`;

        idSearch.forEach((product, index) => {
            let productId = index;
            index++;   
            tableContent += `<tr>
                <td class="idshow">${product.id}</td>
                <td class="nameshow">${product.name}</td>
                <td class="imgshow"> <img src="./image/${product.img}" alt="Chức năng đang phát triển" style="height: 30px; width: 30px;"></td>
                <td class="priceshow">${product.price}</td>
                <td>${product.tag}</td>
                <td>${product.quantity}</td>
                <td >${product.brand}</td>
                <td >${product.size}</td>
                <td>
                    <button onclick='editProduct(${productId})'>Edit</button> | <button onclick='deleteProduct(${productId})'>Delete</button>
                </td>
            </tr>`;
        })
        document.getElementById('list_Products').innerHTML = tableContent;
}



// ==========================bill=============================
function renderListBills() {
    let bills = localStorage.getItem('bills') ? JSON.parse(localStorage.getItem('bills')) : [];

    let tableContent = `<tr>
        <th>BILL_ID</th>
        <th>CUSTOMER_NAME</th>
        <th>TOTAL_AMOUNT</th>
        <th>ORDER_DATE</th>
        <th>STATUS</th>
        <th>ACTION</th>
    </tr>`;

    bills.forEach((bill, index) => {
        let billindex = index;
        index++;

        tableContent += `<tr>
            <td>${bill.billId}</td>
            <td>${bill.customerName}</td>
            <td>${bill.totalAmount}</td>
            <td>${bill.orderDate}</td>
            <td>${bill.status}</td>
            <td>
                <button id="statusBill" onclick='editBill(${billindex})'>Duyệt</button>
            </td>
        </tr>`;
    });

    document.getElementById('bill_Table').innerHTML = tableContent;

    document.getElementById('report1').innerHTML = 'Số đơn hàng: '+ bills.length;
    document.getElementById('report2').innerHTML = 'Số tiền vào túi: ' + total() + ' VND';
    //document.getElementById('report3').innerHTML = 'Số đơn hàng chưa duyệt: '+ chuaduyet();
}

function editBill(index) {
    let bills = localStorage.getItem('bills') ? JSON.parse(localStorage.getItem('bills')) : [];
    if (index >= 0 && index < bills.length) {
        bills[index].status = "Đã duyệt";
        localStorage.setItem('bills', JSON.stringify(bills));
        renderListBills();
    } else {
        console.error("Index không hợp lệ.");
    }
}

function total() {
    let bills = localStorage.getItem('bills') ? JSON.parse(localStorage.getItem('bills')) : [];
    let sumtotal = 0;
    for (let i = 0; i < bills.length; i++) {
        if (bills[i].status == "Đã duyệt") {
            sumtotal += bills[i].totalAmount;
        }
    }
    return sumtotal;
}

function chuaduyet() {
    let bills = localStorage.getItem('bills') ? JSON.parse(localStorage.getItem('bills')) : [];
    let chuaduyetbill = 0;
    for (let i = 0; i < bills.length; i++) {
        if (bills[i].status == "Chưa duyệt") {
            chuaduyetbill++;
        }
    }
    return chuaduyetbill;
}

 
// userList{id: "u1", name: "admin", email: "1", password: "1", product: [], myproduct: [], isadmin: true}
document.querySelector('.user_Manager_Add').addEventListener('click', function () {
    document.getElementById('usaddform').style.display = 'block';
});
document.querySelector('.closeUser').addEventListener('click', function () {
    closeFormUser();
});
function closeFormUser() {
    document.getElementById('usaddform').style.display = 'none';
    clearFormFieldsUser();
    document.getElementById('saveuser').style.display = 'block';
    document.getElementById('updateuser').style.display = 'none';
}
function clearFormFieldsUser() {
    const fields = ['idUser', 'nameUser', 'email', 'password', 'isadmin'];
    fields.forEach(field => {
        document.getElementById(field).value = '';
    });
}
function renderListUser() {
    let userList = localStorage.getItem('userList') ? JSON.parse(localStorage.getItem('userList')) : [];
    document.getElementById('list_User').style.display='block';
    let tableContent = `<tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
            <th>ISADMIN</th>
            <th class="actionshow">ACTION</th>
        </tr>`;

        userList.forEach((user, index) => {
            let userId = index;
            index++;   
            tableContent += `<tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
                <td>${user.isadmin}</td>
                <td>
                    <button onclick='editUser(${userId})'>Edit</button> | <button onclick='deleteUser(${userId})'>Delete</button>
                </td>
            </tr>`;
        })
        document.getElementById('list_User').innerHTML = tableContent;
}

function saveUser() {
    let id = document.getElementById('idUser').value;
    let name = document.getElementById('nameUser').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let isadmin = document.getElementById('isadmin').value;

    if (id.length=='') {
        alert('Vui lòng nhập ID');
        document.getElementById('idUser').value = '';
        return 0;
    } 
    // checkid(id);
    if (name.length=='') {
        alert('Vui lòng nhập tên');
        document.getElementById('nameUser').value = '';
        return 0;
    }
    if (email.length=='') {
        alert('Vui lòng nhập email');
        document.getElementById('email').value = '';
        return 0;
    }
    if (password.length=='') {
        alert('Vui lòng nhập password');
        document.getElementById('password').value = '';
        return 0;
    }
    if (isadmin.length=='') {
        alert('Vui lòng nhập trạng thái');
        document.getElementById('isadmin').value = '';
        return 0;
    }
    closeFormUser();


    if (id && name && email && password && isadmin) {
        let userList = localStorage.getItem('userList') ? JSON.parse(localStorage.getItem('userList')) : [];
        //lỗi không tạo tài khoản được với admin
        let isAdmin = document.getElementById('isadmin').value === "admin" ? true : false;
        //
        //---------------------
        userList.push({
            id: id,
            name: name,
            email: email,
            password: password,
            isadmin: isAdmin,
        });

        localStorage.setItem('userList', JSON.stringify(userList));
        renderListUser();
    }   
}

function deleteUser(id) {
    let userList = localStorage.getItem('userList') ? JSON.parse(localStorage.getItem('userList')) : [];
    userList.splice(id,1);
    localStorage.setItem('userList',JSON.stringify(userList));
    renderListUser();
}

function editUser(id) {
    let userList = localStorage.getItem('userList') ? JSON.parse(localStorage.getItem('userList')) : [];

    document.getElementById('idUser').value = userList[id].id;
    document.getElementById('nameUser').value = userList[id].name;
    document.getElementById('email').value = userList[id].email;
    document.getElementById('password').value = userList[id].password;
    document.getElementById('isadmin').value = false;
    document.getElementById('index1').value = id;

    document.getElementById('saveuser').style.display = 'none';
    document.getElementById('updateuser').style.display = 'inline-block';
    document.getElementById('usaddform').style.display = 'block';
    
}

function changeUser() {
    let userList = localStorage.getItem('userList') ? JSON.parse(localStorage.getItem('userList')) : [];
    let index = document.getElementById("index1").value;
    //lỗi không tạo tài khoản được với admin
    let isadmin = document.getElementById('isadmin')
    //---------------------
    
    userList[index]={
        id: document.getElementById('idUser').value,
        name: document.getElementById('nameUser').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        isadmin: document.getElementById('isadmin').value = false,
    }
    // checkid(document.getElementById('id').value)
    localStorage.setItem('userList',JSON.stringify(userList));   
    renderListUser();
    closeFormUser();
}

function searchUserId() {
    let userList = localStorage.getItem('userList') ? JSON.parse(localStorage.getItem('userList')) : [];
    let valueSearch = document.getElementById('searchUser').value;
    let idSearch = userList.filter(value => {
        return value.id.toUpperCase().includes(valueSearch.toUpperCase())
    })
    
    let tableContent = `<tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
            <th>ISADMIN</th>
            <th class="actionshow">ACTION</th>
        </tr>`;

        idSearch.forEach((user, index) => {
            let userId = index;
            index++;   
            tableContent += `<tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
                <td>${user.isadmin}</td>
                <td>
                    <button onclick='editUser(${userId})'>Edit</button> | <button onclick='deleteUser(${userId})'>Delete</button>
                </td>
            </tr>`;
        })
        document.getElementById('list_User').innerHTML = tableContent;
        
}
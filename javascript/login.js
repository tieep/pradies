import User from "./user.js";

// const registerLink = document.querySelector('.register-link');
// const loginLink = document.querySelector('.login-link');

// const coverBox = document.querySelector('.cover_box');
// const btnPopUp = document.getElementById('btnLogin-popup')
// const hidePopUp = document.querySelector('.icon-close');
// //Pop Up


// function activateCoverBox(){
//     coverBox.classList.toggle('active');
//     const body = document.getElementsByTagName('BODY')[0]
//     body.style.overflow = 'hidden' 
// }

// function deactivateCoverBox(){
//     coverBox.classList.remove('active');
//     const body = document.getElementsByTagName('BODY')[0]
//     body.style.overflow = 'hidden'
// }

// function activatePopUp(){
//     coverBox.classList.toggle('active-popup');
//     const body = document.getElementsByTagName('BODY')[0]
//     body.style.overflow = 'hidden'
//     loginFormContainer.style.top = 70 + '%' 
// }

// function deactivateCoverPopUp(){
//     coverBox.classList.remove('active-popup');
//     const body = document.getElementsByTagName('BODY')[0]
//     body.style.overflow = 'auto'
//     loginFormContainer.style.top = -100 + '%'
// }

// registerLink.addEventListener('click', activateCoverBox);
// loginLink.addEventListener('click', deactivateCoverBox);
// btnPopUp.addEventListener('click', activatePopUp);
// hidePopUp.addEventListener('click', deactivateCoverPopUp);


let localUser = localStorage.getItem('userList')

const userList = []

if (localUser != null) {
    const tempList = JSON.parse(localUser)
    for (const item of tempList){
        userList.push(
            new User(
                item.name,
                item.email,
                item.password,
                item.product,
                item.myproduct,
                item.isadmin
            )
        )
    }
}

if (localUser == null){
    const admin = new User('admin', 'a', 'a',[], [] ,true )
    
    userList.push(admin)
    localUser = JSON.stringify(userList)
    localStorage.setItem('userList', localUser)
}

const logoutBtn = document.getElementById('btn-logout')
const [userName] = document.getElementsByClassName('username')

window.onload = (e) => {
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser === null){
        logoutBtn.style.display ='none'
        loginBtn.style.display = 'block'
        return
    }
    const userOnline = localStorage.getItem('currentUser')
    const [curUser] = userList.filter((u) => u.id === userOnline);
    // console.log(curUser)
    loginBtn.style.display = 'none'
    logoutBtn.style.display = 'block'
    userName.style.display = 'block';


    const nameuser = curUser.name;
    userName.textContent = 'Hi, ' + nameuser;

    if (curUser.isadmin) {
    window.location.href= "./QLSP.html"
    localStorage.removeItem('currentUser')
    // console.log("admin xin chào")
    }
}
const loginBtn = document.getElementById('btnLogin-popup')




logoutBtn.onclick = () => {
    localStorage.removeItem('currentUser')
    window.location.reload()
}

const userSearch = (email , password) => {
    for (let i of userList) {
        if (i.email === email && i.password === password) return true
    }
    return false
}

function signup(wrapper){
    event.preventDefault()
    const name = document.getElementById('username')
    const email = document.getElementById('email_register')
    const password = document.getElementById('password_register')
    let filter = 
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    let success = true
    if (name.value ===''){
        alert('Tên đăng nhập không được rỗng')
        name.focus()
        success = false
    }   else {
        if (name.value.length < 5 || name.value.length > 9) {
            alert(' tên đang nhập từ 5 đến 9 ký tự')
            name.focus()
            success = false
        }
    }
    if (email.value === '') {
        alert('Email không được rỗng')
        email.focus()
        success = false
    } else {
        if (!filter.test(email.value)) {
            alert('Hãy nhập địa chỉ email hợp lệ.\nExample@gmail.com')
            email.focus
            success = false
        }
    }
    if (password.value === '') {
        alert('Mật khẩu không được rỗng')
        password.focus()
        success = false
    } else {
        if (password.value.length < 5) {
            alert('Mật khẩu nhiều hơn 5 ký tự')
            password.focus()
            success = false
        }
    }
    if (success) {
        const [curUser] = userList.filter((u) => u.email === email.value)
        if (curUser) {
            alert('tài khoản đã có')
            return
        }
        const newUser = new User (name.value , email.value, password.value)
        userList.push(newUser)
        localUser = JSON.stringify(userList)
        localStorage.setItem('userList', localUser)
        alert('Đăng kí thành công')
        wrapper.classList.toggle('active')
    }
}

function login() {
    event.preventDefault();
    let email , password;
    email = document.getElementById('email').value
    password = document.getElementById('password').value 
    // const currname = document.getElementById('username')
    const [loginUser] = userList.filter(
        (u) => u.email === email && u.password === password
    )

    if (loginUser) {
        localStorage.setItem('currentUser', loginUser.id)
        alert('Đăng nhập thành công')
        logoutBtn.style.display ='block'
        location.reload()
        
    } else {
        if (email === '') {
            alert ('Tên đăng nhập không để trống')
        }
        else {
            if (password === '') {
                alert ('Mật khẩu không để trống')
            }
            else {
                alert('Vui lòng nhập đúng tài khoản hoặc mật khẩu')
        }
        }
    }
}
loginBtn.onclick = () => {
    loginPopup()
}

const loginPopup = () => {
    loginForm.innerHTML = `
<div class="cover_box">
    <span class="icon-close"><i class="fa-regular fa-circle-xmark"></i></span>
    <!-- login    -->
    <div class="form-box login">
       
        <form action="#" id="signIn">
        <h2 class="text-login">Login</h2>
            <div class="input-box">
                <span class="icon-mail"><i class="fa-regular fa-envelope"></i></span>
                <label for="email">Email</label>
                <input id="email" name="email" type="text" class="text-input" placeholder="Email"
                    autocomplete="off">
            </div>
            <div class="input-box">
                <span class="icon-password"><i class="fa-solid fa-lock"></i></span>
                <label for="password">Password</label>
                <input id="password" name="password" type="password" class="text-input"
                    placeholder="Password" autocomplete="off">
            </div>
            <div class="remember-forgot">
                <label for=""><input type="checkbox"> Remember me</label>
                <a href="#">Forgot password?</a>
            </div>
            <button type="submit" class="loginform-btn">Login</button>
            <div class="login-register">
                <p>Don't have an account? <a href="#" class="register-link">Register now</a></p>
            </div>
        </form>
    </div>
    <!-- register -->
    <div class="form-box register">
        
        <form action="#" id="signUp">
        <h2 class="text-register">Register</h2>
            <div class="input-box">
                <span class="icon-user"><i class="fa-regular fa-user"></i></span>
                <input id="username" name="username" type="text" class="text-input"
                    placeholder="VD: abc123" autocomplete="off">
                <label for="text-user">Username</label>
            </div>
            <div class="input-box">
                <span class="icon-mail"><i class="fa-regular fa-envelope"></i></span>
                <input id="email_register" name="email" type="text" class="text-input"
                    placeholder="VD: example@gmail.com" autocomplete="off">
                <label for="email">Email</label>
            </div>
            <div class="input-box">
                <span class="icon-password"><i class="fa-solid fa-lock"></i></span>
                <input id="password_register" name="password" type="password" class="text-input"
                    placeholder="Password" autocomplete="off">
                <label for="password">Password</label>
            </div>
            <div class="remember-forgot">
                <label class="register-policy" for=""><input type="checkbox"> Đồng ý điều khoản &
                    dịch vụ</label>
                <!-- <a href="#">Forgot password?</a> -->
            </div>
            <button type="submit" class="loginform-btn btn-register">Register</button>
            <div class="login-register">
                <p>Bạn đã có tài khoản? <a href="#" class="login-link">Login </a></p>
            </div>
        </form>
    </div>
</div>
`;
loginFormContainer.style.top = 50 + "%";
  const body = document.getElementsByTagName("BODY")[0];
  body.style.overflow = "hidden";

  const signInBtnLink = document.querySelector(".login-link");
  const signUpBtnLink = document.querySelector(".register-link");
  const hidePopUp = document.querySelector('.icon-close');              
  const [wrapper] = document.getElementsByClassName("cover_box");
  const signupForm = document.getElementById("signUp");
  const signinForm = document.getElementById("signIn");

  signUpBtnLink.addEventListener("click", () => {
    wrapper.classList.toggle("active");
  });
  signInBtnLink.addEventListener("click", () => {
    wrapper.classList.toggle("active");
  });

  signinForm.onsubmit = () => {
    login();
  };

  signupForm.onsubmit = () => {
    signup(wrapper);
  };
  function deactivateCoverPopUp(){
        wrapper.classList.remove('active');
        const body = document.getElementsByTagName('BODY')[0]
        body.style.overflow = 'auto'
        loginFormContainer.style.top = -100 + '%'
    }
    hidePopUp.addEventListener('click', deactivateCoverPopUp);

};
const closeLoginPopup = () => {
    loginForm.innerHTML = ``;
    loginFormContainer.style.top = -100 + "%";
    const body = document.getElementsByTagName("BODY")[0];
    body.style.overflow = "auto";
  };
  

const loginFormContainer = document.getElementById('popup-wrapper')
const [loginForm] = document.getElementsByClassName('popup-content')

loginFormContainer.onclick = () => {
    closeLoginPopup();
  };
loginForm.onclick = () =>{
    event.stopPropagation()
}

export default userList
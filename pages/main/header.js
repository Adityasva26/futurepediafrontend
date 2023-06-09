import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import FacebookLogin from 'react-facebook-login';
import axios from "axios";
import $ from 'jquery'; 

import Link from "next/link";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
import { URL } from '../../utility/api';
function Header() {
    const router = useRouter()
    const [show, setShow] = useState(false);
    const [userData, setuserData] = useState();
    const [registerForm, setregisterForm] = useState({ name: "", email: "", password: "" });
    const [loginForm, setloginForm] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [toggle, setToggle] = useState("login");
    const [toggleclass, setToggleclass] = useState({a:"active",b:""});
    const [header, setheader] = useState("clearHeader");
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userID, setUserID] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [picture, setPicture] = useState(''); 
    const [password, setPassworderror] = useState(''); 
    const [successMsg, setSuccmsg] = useState(''); 



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    function colorChange() {
       document.body.classList.toggle('themeChange'); 
    }

    function menuChange() {
        //document.body.classList.toggle('menuopen'); 
        
				$("body").toggleClass("menuopen");
		
		$('.main-menu ul li.drop-down').before().on('click', function(e) {
			$(this).children('ul').toggle();
			$(this).siblings('li').find('ul').hide(); 
		});
     }


    useEffect(() => {
       
		
	
        setuserData(JSON?.parse(window?.localStorage?.getItem("data")))



        const handleScroll = () => {
            setScrollPosition(document.documentElement.scrollTop);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        if (scrollPosition >= 50) {
            setheader('darkHeader');
        } else {
            setheader('clearHeader');
        }
        return () => window.removeEventListener('scroll', handleScroll);


    }, [scrollPosition])

    const responseFacebook = (response) => {
        if (response.status !== "unknown") {
     
        axios.post(`${URL}socialregister`, { email: response.email, full_name: response.name, social_id: response.userID, social_name: response.graphDomain })
            .then(response => {
         
                window.localStorage.setItem("data", JSON.stringify(response.data.data))
                setuserData(response.data.data)
                handleClose()
                router.reload(window.location.pathname)
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
    function logout() {
        localStorage.removeItem("data");
        setuserData()
        // router.push('/')
        router.reload(window.location.pathname)
    }
    function onRegister() {  
        if (validateForm(registerForm)) {  
            axios.post(`${URL}register`, { email: registerForm.email,name: registerForm.name, password: registerForm.password })
                .then(response => { 
                    setregisterForm(response.data.data) 
                    setSuccmsg('Registration Successfully');
                    setTimeout(() => {
                        handleClose()
                        setSuccmsg('')
                        router.push('/')
                      }, 3000);

                    
                })
                .catch(error => {
                    console.log(error);
                }); 
        }
    }
    function onLogin() {
        if (validateForm(loginForm)) {
            let errors = {};
            axios.post(`${URL}login`, { email: loginForm.email, password: loginForm.password })
                .then(response => { 
                    if(response.data.status==='1'){
                        window.localStorage.setItem("data", JSON.stringify(response.data.data))
                        setuserData(response.data.data)
                        handleClose()
                        router.push('/')    
                    }else{
                        setPassworderror(response.data.message)
                    }
                    
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
    function validateForm(fieldsValue) {
        
        let fields = fieldsValue;
        let errors = {};
        let formIsValid = true;
        if (fields.name == "") {
            formIsValid = false;
            errors.name = "*Please enter your name.";
        }
        if (fields.name == "") {

            formIsValid = false;
            errors.name = "*Please enter your name.";
        }
        if (fields.email == "") {
            formIsValid = false;
            errors.email = "*Please enter email.";
        }
        if (!fields.password.match(
            /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&!]).*$/)) {
            formIsValid = false;
            errors.password = "*Please enter atleast one letter Capital , One Digit , One Symbol and  8 Characters.";
        }
        
        setErrors(errors); 
        return formIsValid;
    }
    const handleToggle = (e,g,h) => {
        setToggle(e)
        setToggleclass({a:g,b:h})  
    }

    return (
        <>
            {/* <head> */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" />
            {/* </head> */}
            <header class={header}>
                <div class="top-header">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-4 col-lg-2">
                                <div class="logo">
                                    <Link href="/">
                                        <img src="../img/Logo.png" />
                                    </Link>
                                </div>
                            </div>
                            <div class="col-2 col-lg-7">
                                <div class="main-menu">
                                    <ul>
                                        <li>
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link href="/main/favourites">Favourites</Link>
                                        </li>
                                        <li>
                                            <Link href="/main/discover">Discover</Link>
                                        </li>
                                        <li class="drop-down">
                                            <a href="#">Submit</a>
                                            <ul class="sub-menu">
                                                <li>
                                                    <Link href="/main/submittool">Submit Tool</Link>
                                                </li>
                                                <li>
                                                    <Link href="/main/submitnews">Submit News</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="drop-down">
                                            <a href="#">Community</a>
                                            <ul class="sub-menu">
                                                <li><Link href="/main/newsletter">Newslatter Issues</Link></li>
                                                <li><Link href="/main/news">Latest AI News</Link></li>
                                                <li><a href="https://discord.com/" target="_blank"><i class='fab fa-discord'></i>Join Discord</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                                <div class="nav-btn d-lg-none d-block" onClick={menuChange}>
                                    <span class="nav-icon">
                                        <span class="inner-icon top"></span>
                                        <span class="inner-icon middle"></span>
                                        <span class="inner-icon bottom"></span>
                                    </span>
                                </div>
                            </div>
                            <div class="col-6 col-lg-3"> 
                            <a onClick={colorChange} className="theme-icon"><i class="fas fa-adjust"></i></a>
                                {userData == null ? <div class="login-btn">
                                    <a onClick={handleShow} class="theme-btn"><i class="fas fa-sign-in-alt"></i> Login / Register</a>
                                </div> :
                                    <div class="aft-login">
                                        <div class="inner">
                                            <i class="far fa-user"></i> <span class="user-name">{userData.full_name}</span>
                                        </div>
                                        <div class="lgt-btn">
                                            <a onClick={() => logout()}>Logout</a>
                                        </div>
                                    </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Modal show={show} onHide={handleClose} className="login_frm-cls">
                <Modal.Header closeButton>
                    <Modal.Title>Select Filters to Apply</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div class="login-form-cls">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class={`nav-link ${toggleclass?.a}`} id="login-tab" type="button" aria-controls="login" aria-selected="true" onClick={() => handleToggle("login","active","")}>login</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class={`nav-link ${toggleclass?.b}`} id="register-tab" type="button" aria-controls="register" aria-selected="false" onClick={() => handleToggle("register","","active")}>register</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            {toggle == "login" ? <div class="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                                <div class="login-form">
                                    {/* <form> */}
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input type="email" name="" onChange={(e) => setloginForm({ email: e.target.value, password: loginForm.password })} />
                                        <p>{errors.email}</p>
                                    </div>
                                    <div class="form-group">
                                        <label>Password</label>
                                        <input type="Password" name="" onChange={(e) => setloginForm({ email: loginForm.email, password: e.target.value })} />
                                        <p>{errors.password}</p>
                                        <p>{password}</p>
                                    </div>
                                    <div class="form-group">
                                        <button onClick={() => onLogin()}>Login</button>
                                    </div>
                                    {/* </form> */}
                                    <div class="other-login">
                                        <h3>or login with</h3>
                                        <div class="lg-icon">
                                            <a href="#">
                                                <i class="fab fa-apple"></i> Login with Apple
                                            </a>


                                            <FacebookLogin
                                                appId="350464834642"
                                                // autoLoad={true}
                                                fields="name,email,picture"
                                                // onClick={componentClicked}
                                                callback={responseFacebook}
                                                icon={<i class="fab fa-facebook-f"></i>}
                                            />

                                        </div>
                                    </div>
                                </div>
                            </div> : toggle == "register" ?
                                <div class="tab-pane fade show active" >
                                    <div class="login-form">
                                        <h3 className="succe">{successMsg}</h3>
                                        <form>
                                            <div class="form-group">
                                                <label>Name</label>
                                                <input type="text"  onChange={(e) => setregisterForm({ name: e.target.value, email: registerForm?.email, password: registerForm?.password })} />
                                                <label>{errors.name}</label>
                                            </div>
                                            <div class="form-group">
                                                <label>Email</label>
                                                <input type="email"  onChange={(e) => setregisterForm({ name: registerForm?.name, email: e.target.value, password: registerForm?.password })} />
                                                <label>{errors.email}</label>
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input type="Password"  onChange={(e) => setregisterForm({ name: registerForm?.name, email: registerForm?.email, password: e.target.value })} />
                                                <label>{errors.password}</label>
                                            </div>
                                            <div class="form-group">
                                                <button type="button" onClick={() => onRegister()}>Register</button>
                                            </div>
                                        </form>
                                    </div>
                                </div> : ""}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <ToastContainer toastStyle={{ backgroundColor: '#303234', color: '#fff' }} />
        </>

    );
}

export default Header;
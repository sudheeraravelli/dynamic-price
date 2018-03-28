// document.getElementById("emailerror").innerHTML = '';
// // function checkEmail() {
    
// //     var email = document.getElementById('email');
// //     var password = document.getElementById('password');
// //     var number = document.getElementById('number');
// //     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// //     if (!filter.test(email.value)) {
// //         // alert('Please provide a valid email address');
// //         document.getElementById("emailerror").innerHTML = 'enter valid email id';
// //         email.focus;
// //     }

// //     if (password.value.length < 6 || password.value.length >= 10) {
// //         // alert("Password must be at least 6 characters long.");

// //     }
// //     console.log(number.value.length)
// //     if (number.value.length != 10) {
// //         // alert('number must be 10 digits');
// //         return false;
// //     } else {
// //         return true;
// //     }
// // }
// function loginValidation() {
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;
//     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;    
//     if (email =="" && !filter.test(email)) {
//         alert("Please Enter Your Email Adress");
//     }
//     if (password.length < 6 || password.length >= 10) {
//         alert("Password must be at least 6 characters long.");
//         return false;
//     }
// }
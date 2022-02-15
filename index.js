//JS Function
function sayHello() {
    alert("Hello World")
}

//Form Validation
//Basic Validation
function basicValidate() {

    if( document.myForm.Name.value == "" ) {
        alert( "Please provide your name!" );
        document.myForm.Name.focus() ;
        return false;
    }
    if( document.myForm.EMail.value == "" ) {
        alert( "Please provide your Email!" );
        document.myForm.EMail.focus() ;
        return false;
    }
    if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
        document.myForm.Zip.value.length != 5 ) {

        alert( "Please provide a zip in the format #####." );
        document.myForm.Zip.focus() ;
        return false;
    }
    if( document.myForm.Country.value == "-1" ) {
        alert( "Please provide your country!" );
        return false;
    }
    return( true );
}

//Data format validtion
function validateEmail() {
    var emailID = document.myForm.EMail.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("Please enter correct email ID")
        document.myForm.EMail.focus() ;
        return false;
    }
    return( true );
}

//Manual Animation
var imgObj = null;
function init() {
    imgObj = document.getElementById('manualImage');
    imgObj.style.position= 'relative';
    imgObj.style.left = '0px';
}
function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}
window.onload = init;

//Automated Animation
var imgObj = null;
var animate ;
function init() {
    imgObj = document.getElementById('automatedImage');
    imgObj.style.position= 'relative';
    imgObj.style.left = '0px';
}
function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
    animate = setTimeout(moveRight,20);    // call moveRight in 20msec
}
function stop() {
    clearTimeout(animate);
    imgObj.style.left = '0px';
}
window.onload = init;

//Rollover with a Mouse Event
if(document.images) {
    var image1 = new Image();     // Preload an image
    image1.src = "https://www.tutorialspoint.com/javascript/images/html.gif";
    var image2 = new Image();     // Preload second image
    image2.src = "https://www.tutorialspoint.com/javascript/images/http.gif";
}

//Controlling Multimedia
function play() {
    if (!document.demo.IsPlaying()) {
        document.demo.Play();
    }
}
function stop() {
    if (document.demo.IsPlaying()) {
        document.demo.StopPlay();
    }
}
function rewind() {
    if (document.demo.IsPlaying()) {
        document.demo.StopPlay();
    }
    document.demo.Rewind();
}

//Image Map
function showTutorial(name) {
    document.myform.stage.value = name
}
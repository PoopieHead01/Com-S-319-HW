function validate2() {
    //valCheck = true;
    // var resultEmailCheck = emailCheck(document.forms["contact information"]["email"].value);
    // var image1 = getImage(Boolean(resultEmailCheck), "email");
    // var labelNotifyEmail1=getNotification(Boolean(resultEmailCheck), "email") ;
    // document.getElementById("Email").appendChild(image1);
    // document.getElementById("Email").appendChild(labelNotifyEmail1);
    emailValidate();
    phonelValidate();
    addressValidate();
}

function emailValidate(){
    var resultEmailCheck = emailCheck(document.forms["contact information"]["email"].value);
    var image1 = getImage(Boolean(resultEmailCheck), "email");
    var labelNotifyEmail1=getNotification(Boolean(resultEmailCheck), "email") ;
    document.getElementById("Email").appendChild(image1);
    document.getElementById("Email").appendChild(labelNotifyEmail1); 
}

function phonelValidate(){
    var resultPhoneCheck = phoneCheck(document.forms["contact information"]["phone"].value);
    var image1 = getImage(Boolean(resultPhoneCheck), "phone");
    var labelNotifyEmail1=getNotification2(Boolean(resultPhoneCheck), "phone") ;
    document.getElementById("Phone").appendChild(image1);
    document.getElementById("Phone").appendChild(labelNotifyEmail1); 
}

function addressValidate(){
    var resultAddressCheck = addressCheck(document.forms["contact information"]["address"].value);
    var image1 = getImage(Boolean(resultAddressCheck), "address");
    var labelNotifyEmail1=getNotification3(Boolean(resultAddressCheck), "address") ;
    document.getElementById("Address").appendChild(image1);
    document.getElementById("Address").appendChild(labelNotifyEmail1); 
}

function getNotification(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "Email should be in form xxx@xxx.xxx, which x should be alphanumeric!";
    return label;
}

function getNotification2(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "Phone number should be in numeric! xxx-xxx-xxxx or xxxxxxxxxx.";
    return label;
}

function getNotification3(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "Address format should be City,State";
    return label;
}


function getImage(bool, ID) {
    var image = document.getElementById("image" + ID);
    if (image == null) {
        image = new Image(15, 15);
        image.id = "image" + ID;
    }
    image.src = bool ? './correct.png' : './wrong.png';
    return image;
}

function emailCheck(email) {
    atSplit = email.split('@');
    if (atSplit.length == 2 && alphaNumCheck(atSplit[0])) {
        periodSplit = atSplit[1].split('.')
        if (periodSplit.length == 2 && alphaNumCheck(periodSplit[0] + periodSplit[1])) {
            return true;
        }
    }
    //valCheck = false;
    return false;
}

function addressCheck(address) {
    atSplit = address.split(',');
    if (atSplit.length == 2 && alphaNumCheck(atSplit[0]) + atSplit[1]) {
        return true;
        }
    //valCheck = false;
    return false;
}

function phoneCheck(number) {
    atSplit = number.split('-');
    if (atSplit.length == 3 && numberCheck(atSplit[0] + atSplit[1] + atSplit[2]) && number.length == 12) {
            return true;
        }
    else if(numberCheck(number) && number.length == 10){
        return true;
    }
    //valCheck = false;
    return false;
}

function numberCheck(entry){
    var numbers = /^[0-9]+$/;
      if(entry != null && entry.match(numbers)){
        //alert('Your Registration number has accepted....');
        return true;
      }else{
        //alert('Please input numeric characters only');
        return false;
      }
}

function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}

function deleteCookie( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function validate1() {
    var valid1 = validateFName();
    var valid2 = validateLName();
    var valid3 = validateGender();
    var valid4 = validateState();
    if(valid1 && valid2 &&valid3 &&valid4)
        window.location.href = 'validation2.html';
    return false;
}

function validateFName() {
    //valCheck = true;
    var resultFirstNameCheck = alphaNumCheck(document.forms["User information"]["firstName"].value);
    var image1 = getImage(Boolean(resultFirstNameCheck), "firstName");
    var labelNotifyEmail1=getNotification(Boolean(resultFirstNameCheck), "firstName") ;
    document.getElementById("FirstName").appendChild(image1);
    document.getElementById("FirstName").appendChild(labelNotifyEmail1);
    return resultFirstNameCheck;
}

function validateLName() {
    //valCheck = true;
    var resultLastNameCheck = alphaNumCheck(document.forms["User information"]["lastName"].value);
    var image1 = getImage(Boolean(resultLastNameCheck), "lastName");
    var labelNotifyEmail1=getNotification(Boolean(resultLastNameCheck), "lastName") ;
    document.getElementById("LastName").appendChild(image1);
    document.getElementById("LastName").appendChild(labelNotifyEmail1);
    return resultLastNameCheck;
}

function validateGender() {
    //valCheck = true;
    var genderCheck = alphaNumCheck(document.forms["User information"]["gender"].value);
    var image1 = getImage(Boolean(genderCheck), "gender");
    var labelNotifyEmail1=getNotification2(Boolean(genderCheck), "gender") ;
    document.getElementById("Gender").appendChild(image1);
    document.getElementById("Gender").appendChild(labelNotifyEmail1);
    return genderCheck;
}

function validateState() {
    //valCheck = true;
    var genderCheck = stateCheck(document.forms["User information"]["state"].value);
    var image1 = getImage(Boolean(genderCheck), "state");
    var labelNotifyEmail1=getNotification2(Boolean(genderCheck), "state") ;
    document.getElementById("State").appendChild(image1);
    document.getElementById("State").appendChild(labelNotifyEmail1);
    return genderCheck;
}

function getNotification(bool, ID) {
    var label = document.getElementById("labelNotify" + ID);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + ID;
        // label.className = "errorMessage";
        label.setAttribute( 'class', 'errorMessage' );
      }

    label.innerHTML = bool ? "" : "Should be alphanumeric and not empty!";
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

    label.innerHTML = bool ? "" : "Please select an option from the drop box";
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

function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    if(entry != null && entry.match(regex)){
    return true;
    }
    else{
    return false;
    }
}

function stateCheck(entry) {
    if(entry != null && (entry.match("California") || entry.match("Florida") 
        || entry.match("New York") || entry.match("Texas") || entry.match("Hawaii") 
        || entry.match("Washington") || entry.match("Colorado") || entry.match("Virginia") 
        || entry.match("Iowa") || entry.match("Arizona"))){
    return true;
    }
    else{
    return false;
    }
}

function deleteCookie( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

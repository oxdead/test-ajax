function sendUrlEncoded(obj) {

    const XHR = new XMLHttpRequest();

    let urlEncodedData = "";
    let urlEncodedDataPairs = [];

    // Turn the data object into an array of URL-encoded key/value pairs.
    for(let name in obj) {
        urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(obj[name]));
    }

    // Combine the pairs into a single string and replace all %-encoded spaces to
    // the '+' character; matches the behavior of browser form submissions.
    urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

    // Define what happens on successful data submission
    XHR.addEventListener('load', function(event) {
        alert('Yeah! Data sent and response loaded.');
    } );

    // Define what happens in case of error
    XHR.addEventListener('error', function(event) {
        alert('Oops! Something went wrong.');
    } );

    // Set up our request
    XHR.open('POST', 'index.php');

    // Add the required HTTP header for form data POST requests
    XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Finally, send our data.
    XHR.send(urlEncodedData);
}

const btnUrlEnc = document.querySelector('#urlenc');
btnUrlEnc.addEventListener('click', function() {
    objToSend = { test:'ok' };
    sendUrlEncoded(objToSend);
} )

///////////////////////////////////////////////////////////
function sendUrlEncodedFormData(obj) {
    const XHR = new XMLHttpRequest();
    const FD = new FormData();

    // Push our data into our FormData object
    for(let name in obj) {
        FD.append(name, obj[name]);
    }

    // Define what happens on successful data submission
    XHR.addEventListener('load', function(event) {
        alert('Yeah! Data sent and response loaded.');
    });

    // Define what happens in case of error
    XHR.addEventListener('error', function(event) {
        alert('Oops! Something went wrong.');
    });

    // Set up our request
    XHR.open('POST', 'index.php');

    // Send our FormData object; HTTP headers are set automatically
    XHR.send(FD);
}

const btnUrlEncFormData = document.querySelector('#urlencformdata');
btnUrlEncFormData.addEventListener( 'click', function() { 
    sendUrlEncodedFormData({test:'ok'});
})

/////////////////////////////////////////////////////////////////
// sending json from javascript to php
function sendJsonEncoded(obj) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "json_receive.php", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    var data = JSON.stringify(obj);
    xhr.send(data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // in case we reply back from server
            let jsondata = JSON.parse(xhr.responseText);
            console.log(jsondata);
        }
    }
}

const btnJsonEnc = document.querySelector('#jsonenc');
btnJsonEnc.addEventListener('click', function() {
    var objToSend = {'action': 'Flickr', 'get':'getPublicPhotos'};
    sendJsonEncoded(objToSend);
} )


///////////////////////////////////////////////////////////
// send FormData bound to form, only fields with name attribute are sent
window.addEventListener("load", function () {
    function sendData() {
        const XHR = new XMLHttpRequest();
    
        // Bind the FormData object and the form element
        const FD = new FormData(form1); // in javascript it works, even if variable declared after variable
    
        // Define what happens on successful data submission
        XHR.addEventListener("load", function(event) {
            alert(event.target.responseText);
        });
    
        // Define what happens in case of error
        XHR.addEventListener("error", function(event) {
            alert( 'Oops! Something went wrong.' );
        });
    
        // Set up our request
        XHR.open("POST", "index.php");
    
        // The data sent is what the user provided in the form
        XHR.send(FD);
    }
  
    // Access the form element...
    const form1 = document.getElementById("FormDataBoundToForm");
  
    // ...and take over its submit event.
    form1.addEventListener("submit", function(event) {
        event.preventDefault();
        sendData();
    });
});


///////////////////////////////////////////////////////////
// send file from form using formdata submit event
var formFile = document.forms.namedItem("fileinfo");
formFile.addEventListener('submit', function(event) {

    event.preventDefault();
    
    var oData = new FormData(formFile);
    oData.append("additionalstuff", "Extra data, we added in javascript to FormData");

    var oReq = new XMLHttpRequest();
    oReq.open("POST", "index.php", true);
    oReq.onload = function(oEvent) {
        var oOutput = document.querySelector("#sendfile");
        if (oReq.status == 200) {
            oOutput.innerHTML = "Uploaded!";
        } else {
            oOutput.innerHTML = "Error " + oReq.status + " occurred when trying to upload your file.<br \/>";
        }
    };

    oReq.send(oData);

}, false);



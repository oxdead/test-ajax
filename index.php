<?php 

if($_SERVER['REQUEST_METHOD'] === 'POST')
{
    var_dump($_POST);
}


?>
<!DOCTYPE html>
<html>
<head>
<link rel="shortcut icon" href="#"> <!-- prevent looking for favicon.ico file -->
</head>
<body>
<h1>XMLHttpRequest</h1>
<div>
    <button id="urlenc">Send URL Encoded</button>
</div>
<br />
<br />
<div>
    <button id="urlencformdata">Send URL Encoded via FormData</button>
</div>
<br />
<br />
<div>
    <button id="jsonenc">Send JSON Encoded</button>
</div>
<br />
<br />
<div>
    <form id="FormDataBoundToForm">
        <!-- will be sent -->
        <label for="myname">Has name attr:</label>
        <input id="myname" name="name" value="John">
        <!-- will not be sent -->
        <label for="noname">Without name attribute</label> 
        <input id="noname" value="Phil">

        <input type="submit" value="Send Me!">
    </form>
</div>
<br />
<br />
<div>
    <!-- You can also send files using FormData. Include an <input> element of type file in your <form>: -->
    <form enctype="multipart/form-data" method="post" name="fileinfo">
        <label>Your email address:</label>
        <input type="email" autocomplete="on" autofocus name="usermail" placeholder="email" required size="32" maxlength="64" />
        <br />
        <label>Custom file label:</label>
        <input type="text" name="filelabel" size="12" maxlength="32" />
        <br />
        <label>File to stash:</label>
        <input type="file" name="file" required />
        <input type="submit" value="Stash the file!" />
    </form>
    <div id="sendfile">Not uploaded yet</div>
</div>



<h1>FetchAPI</h1>
<div>
    <button id="fetchunserializejson">Unserialize JSON file</button>
</div>
<br />
<br />
<div>
    <button id="fetchjsonenc">Send JSON Encoded via FetchAPI</button>
</div>
<br />
<br />



</body>
<script type="text/javascript" src="xmlhttprequest.js"></script>
<script type="text/javascript" src="fetchapi.js"></script>

</html>
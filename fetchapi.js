///////////////////////////////////////////////////////
// fetching json file into object and show into console
function fetchUnserializeJSON() {
    fetch('http://localhost/quiz.json')
    .then(response => response.json())
    .then(data => console.log(data));
}

const btnFetchJSONfile = document.querySelector('#fetchunserializejson');
btnFetchJSONfile.addEventListener('click', function() {
    fetchUnserializeJSON();
})


//////////////////////////////
// POST method implementation:
async function postJSONviaFetchAPI(url = '', obj = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            // 'Access-Control-Allow-Origin':'*' // do not use this on production, can remove defense from cross-site-ref attack
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(obj) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

const btnFetchPostJSON = document.querySelector('#fetchjsonenc');
btnFetchPostJSON.addEventListener('click', function() {
    postJSONviaFetchAPI('http://localhost/json_receive.php', { testFetch: "blablabla" })
    .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
    });
})



let request = {
    "grant_type": "authorization_code",
    "client_id": "5c27cff5ca9e72ccf9aa24550a469553",
    "client_secret": "8dndkDrDNqEWyCR2oEWnSdVXAbYBz1K9FTjG3vEi",
    "code": "",
    "redirect_uri": "https://nigelorion.github.io/logged-in/"
}

function testFire() {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == 'code'){
                console.log(pair[1]);
                request.code = pair[1];
                requestToken();

            }
    }
    return(false)
}

function requestToken() {
    return fetch("https://api.partners.dev.carthook.com/oauth/token", {
        method: 'post',
        dataType: 'json',
        headers: {
                "Content-Type": "application/json"
            },
        body: JSON.stringify(request)
    })
    .then(res => res.json())
    .then(resj => {
        console.log(resj)})
        .catch(err => {
        console.log(err)})
}


let request = {
    "grant_type": "authorization_code",
    "client_id": "313363a4fee6f7509ab386fd0dc31c6d",
    "client_secret": "313363a4fee6f7509ab386fd0dc31c6d",
    "code": "",
    "redirect_uri": "https://partners.carthooklocal.com/callback"
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
        headers: request
        // headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        //     },
        // body: JSON.stringify(request)
    })
    .then(resj => {
        console.log(resj)})
        .catch(err => {
        console.log(err)})

}

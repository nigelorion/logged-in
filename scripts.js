let request = {
    "grant_type": "authorization_code",
    "client_id": "d7f145b5608a0598736b6887b3bdd3a6",
    "client_secret": "O0Nh8SJgaZhG1w5ccygAR9lDAhMaoMspWeGkvPn5",
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


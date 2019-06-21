let request = {
    "grant_type": "authorization_code",
    "client_id": "fc4357065dd7ed5bac8120a4200fa239",
    "client_secret": "lVomOTZp4diJ5a3R40L2L2sT4VurkI5dHdso5w0t",
    "code": "",
    "redirect_uri": "https://nigelorion.github.io/logged-in/"
}

let accessToken = ""

function testFire() {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == 'code'){
                console.log(pair[1]);
                request.code = pair[1];
                console.log("pulled code token, firing request for auth token...")
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
        console.log(resj);
        accessToken = resj.access_token;})
        .catch(err => {
        console.log(err)})
}


function merchantCall() {
    return fetch("https://api.carthook.com/v1/merchant", {
        method: 'get',
        dataType: 'json',
        headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + accessToken
            }
    })
    .then(res => res.json())
    .then(resj => {
        console.log(resj)})
        .catch(err => {
        console.log(err)})
}


// {token_type: "Bearer", expires_in: 631152000, access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjcwN2…H7t8AAjB62i0hezk-dpQxZ9NHywX3LAYft89pk2h7rGdZDHr8", refresh_token: "def50200e83611a651e5b69d1e30005545f4267b3d8ec44ad9…32ec81242ce95c6da7f3779ef519833c09fb251d8bbfaf1ee"}
// access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjcwN2U0NTY3YjlhNmE2MjlmYzkxNTk3MjY2ZDczYWRmODdlNmQ0M2I0NmIxMmY3YTUyZGQ1NzgxNzMwZmNmMDFjYzUwMDE4MjY5NGQxOWVkIn0.eyJhdWQiOiJkN2YxNDViNTYwOGEwNTk4NzM2YjY4ODdiM2JkZDNhNiIsImp0aSI6IjcwN2U0NTY3YjlhNmE2MjlmYzkxNTk3MjY2ZDczYWRmODdlNmQ0M2I0NmIxMmY3YTUyZGQ1NzgxNzMwZmNmMDFjYzUwMDE4MjY5NGQxOWVkIiwiaWF0IjoxNTYwMjk0OTY0LCJuYmYiOjE1NjAyOTQ5NjQsImV4cCI6MjE5MTQ0Njk2NCwic3ViIjoibWlkX3g5S0o5dXR2Iiwic2NvcGVzIjpbIndyaXRlX3dlYmhvb2tzIiwicmVhZF93ZWJob29rcyIsIndyaXRlX2Fzc2V0cyIsInJlYWRfYXNzZXRzIl19.2hARGOWs5ff2GAMU1Ccxs_AymOkBRbIIRnDUcqwkSnkA0nVMKBc4mkXEZQBcaJr5R0nI2pFKzf9iq3Y-7Bc_1BCIj4JJXh8MuIfOysIsE4DrsDF_lWQ1ld25l74Mp-bvMqcpkk9z5MquqOiCl4xbKWQ9dBkcmmDBlByhYi1N1kbeiKPGFkFHu68T5K4-dmRfe9SQXqh1k8iA192L06L7jz95kw1ibkhx1qUqucxjkuPaOnyGZeku-AOhfIqva-t9e3pfts6Rcff5eWTcCiqkuwOdroD4TJjf2txyUXwkwPjQw9i5dzgi7fcOXNuuDETiH08lica_Qirqbmfvw95X9ta3FYFgjOgoiKHFua3VjDHJ_VOCNiwRFFY-hWgQOi7vprLhavIJaOitn-_iz6MomamraSvekBAjviwDtO3SxCN6hkF5g7f4-IJYB-f_CaEc_zKCrRUZjh-JAUneWw1ypQpFQ7gk-dUbZN6HwQ84twYyEOtH1X8UcN509_Ri_ArhrurtyfqS2n-haRhCYuM1aQII_xZHdulGlsuJePmOZKlqNZYUcZrNmOzUAlyLno1Es5I0srxmQzsA_MTBEDw444lNVmMKoJbfNx0cUy0_bumsSLJQlqFz4fPZrbH7t8AAjB62i0hezk-dpQxZ9NHywX3LAYft89pk2h7rGdZDHr8"
// expires_in: 631152000
// refresh_token: "def50200e83611a651e5b69d1e30005545f4267b3d8ec44ad96096b14d1c72bfc43ebbc968ad56a76d38d4f1874d0f753fb9305b65e998bdc23d1adbac57101e0e8fc7285395537a6fe90a6e93dc105c879a9d1b9d65d19ae07afae667c565b03b090ec701dcd312ae816bd9714310d4f8a2372746b7fee9db5539bc00f7a775fdd9abd767c43b19dc5a487ce79bfaafa8dce5282d1b543b8bda8e7d304860bdc7f104b196f9e4c8abcdf7d9ed29819db5ce56b7bcd415165c09ec22c947e843f44545c9963916d3f9ddaf41d4f6d80965ef1726583f764d7ee6f1b283f6679b2c55c63c7331e3fd58f07774f2931717e9ad9011abe9caa7896b26552924e34d76774456d8097d71d37dcf69c092ceef3fc64ed4b9ec5495557eed70f8a84aadda933b309578b42abcbd14ba3d87578997f3518ae212869ee3089d279f3819baf7459be20e3188bed1d1393dac9c059216c6e5e89e552827526bf4edac372ce0acf5deeb0d05a51c392b065e125d65be7e345d214ca77c8c9f786d85bb1ecf38a2d232f420aa49465de0868319a6a284b6de0ec781d6d0567090983c27c465594f1041bddea896b929a935f8e722b15b34832ec81242ce95c6da7f3779ef519833c09fb251d8bbfaf1ee"
// token_type: "Bearer"
// __proto__: Object


// function isPandigital(num) {
// 	let ruleSet = [0,1,2,3,4,5,6,7,8,9];
//     let numArr = num.toString().split('');
//     let result = []
// 	if (numArr.length <= 10) {
// 		return false
// 	} else {
//         for (i = 0; i < numArr.length; i++) {
//             for (j in ruleSet) {
//                 if (numArr[i] === ruleSet[j]) {
//                     result.push(i)
//                 }
//             }
//         }
//     }
// }

// function isPandigital(num) {
// 	let ruleSet = [0,1,2,3,4,5,6,7,8,9];
//     let numArr = num.toString().split('');
//     let result = []
//     for (i = 0; i < numArr.length; i++) {
//             for (j in ruleSet) {
//                 if (numArr[i] === ruleSet[j]) {
//                     result.push(i)
//                 }
//             }
//         }
//     }





       // let counter = 0;
            // numArr.indexOf(ruleSet[i]) + counter;
            // if (counter === 10) { 
            //     return true
            // } else {
            //     return false
            // }


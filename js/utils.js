// Ce fichier contient des fonction réutilisable -->

function readFile(file, done) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    var value;
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                value = JSON.parse(allText);
                done(value);
            }
        }
    }
    rawFile.send(null);
}

// function showAlert(message) {
//     alert(message);
// }

// function checkUsername(username){
//     if (username.length < 5)
//     return false;
//     else
//     return true;
// }

// function checkPassword(password){
//     if (password.length < 5)
//     return false;
//     else
//     return true;
// }
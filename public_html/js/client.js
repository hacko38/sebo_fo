$(document).ready(function () {

    if (navigator.cookieEnabled) {

    } else {
        alert("Activez vos cookies !");
    }

    if (getCookie('client') === null)
    {
        $('#espaceClient').append('<a href="inscription.html">Inscription</a>     <a href="identification.html">Connexion</a>');
    }
    else
    {
        $('#espaceClient').append('<p id="welcome">Bienvenue ' + getCookie('client') + '</p>  \n\
        <a href="espace_client.html">Accéder à mon compte</a>  \n\
        <a href="index.html" onclick="removeCookie();">Deconnexion</a> ');
    }
});


$('#formClient').submit(function (event) {
    event.preventDefault();

    var pseudo = $('#pseudo').val();
    var password = $('#password').val();

$.getJSON('http://localhost:8080/sebo_backendnew/api/accountmanager/connect?login=' + pseudo + '&password=' + password, function (compteClient) {

        setCookie('client', compteClient.lastName + ' ' + compteClient.firstName);
        window.location = 'http://localhost:8383/sebo_fo/index.html';

    }).fail(function ()
    {
        window.location = 'http://localhost:8383/sebo_fo/identification.html';
        alert('fail');
    });


});


function addCookie()
{
    setCookie('client', 'Hakim Lama');
}

function removeCookie()
{
    destroyCookie('client', 'Hakim Lama');
}

function setCookie(sName, sValue) {
    var today = new Date(), expires = new Date();
    expires.setTime(today.getTime() + (365 * 24 * 60 * 60 * 1000));
    document.cookie = sName + "=" + encodeURIComponent(sValue) + ";expires=" + expires.toGMTString();
}

function destroyCookie(sName, sValue) {
    var today = new Date(), expires = new Date();
    expires.setTime(today.getTime() + (0));
    document.cookie = sName + "=" + encodeURIComponent(sValue) + ";expires=" + expires.toGMTString();
}

function getCookie(sName) {
    var cookContent = document.cookie, cookEnd, i, j;
    var sName = sName + "=";

    for (i = 0, c = cookContent.length; i < c; i++) {
        j = i + sName.length;
        if (cookContent.substring(i, j) === sName) {
            cookEnd = cookContent.indexOf(";", j);
            if (cookEnd === -1) {
                cookEnd = cookContent.length;
            }
            return decodeURIComponent(cookContent.substring(j, cookEnd));
        }
    }
    return null;
}
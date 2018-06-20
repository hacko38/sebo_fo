$(document).ready(function () {

    var compteClient;
    compteClient = getCookieValue("client");


    if (navigator.cookieEnabled) {


    } else {
        alert("Activez vos cookies !");
    }


    if (compteClient === null)
    {
        $('#espaceClient').append('<a href="inscription.html">Inscription</a>     <a href="identification.html">Connexion</a>');
    }
    else
    {
        $('#espaceClient').append('<p id="welcome">Bienvenue ' + getCookiePart(compteClient, 0) + ' ' + getCookiePart(compteClient, 1) + '</p>  \n\
        <a href="espace_client.html">Accéder à mon compte</a>  \n\
        <a href="index.html" onclick="removeCookie();">Deconnexion</a> ');
    }

});

/************************* FORM IDENTIF *********************************/
$('#formClient').submit(function (event) {
    event.preventDefault();

    var pseudo = $('#pseudo').val();
    var password = $('#password').val();

    $.getJSON('http://172.16.153.21:8080/sebo_backendnew/api/accountmanager/connect?login=' + pseudo + '&password=' + password, function (compteClient) {
        setCookie('client', compteClient.lastName + ',' + compteClient.firstName + ',' + compteClient.id);
        window.location = 'http://localhost:8383/sebo_fo/index.html';


    }).fail(function ()
    {
        window.location = 'http://localhost:8383/sebo_fo/identification.html';
    });

});




function welcome()
{
    var compteClient;
    compteClient = getCookieValue("client");

    $('.welcome').append('Bienvenue ' + getCookiePart(compteClient, 0) + ' ' + getCookiePart(compteClient, 1));
}


function getOrdersByCustomer()
{
    var compteClient = getCookieValue("client");
    var idClient = getCookiePart(compteClient, 2);

    $.getJSON("http://172.16.153.21:8080/sebo_backendnew/api/ordermanager/getordersbycustommer/" + idClient, function (orders) {
        var prixTotal = 0;
        $.each(orders, function (i, order) {

            $("#commandes").append('<div class="commandeVignette" id="cmd' + i + '"></div>');
            $("#cmd" + i).append('<h3>Commande n°' + order.id + '</h3>');
            $("#cmd" + i).append('<hr>');

            $("#cmd" + i).append('<table id="table' + i + '" class="cmdTable">');
            $("#cmd" + i).append('</table>');

            $("#table" + i).append('<tr class="tableHeader">');

            $("#table" + i).append('<td  class="tableHeader" id="tdProduit' + i + '">');
            $("#tdProduit" + i).append('Produit');
            $("#table" + i).append('</td>');

            $("#table" + i).append('<td  class="tableHeader" id="tdQuantite' + i + '">');
            $("#tdQuantite" + i).append('Quantité');
            $("#table" + i).append('</td>');

            $("#table" + i).append('<td  class="tableHeader" id="tdPrix' + i + '">');
            $("#tdPrix" + i).append('Prix');
            $("#table" + i).append('</td>');

            $("#table" + i).append('</tr>');

            $.getJSON("http://172.16.153.21:8080/sebo_backendnew/api/ordermanager/getorderlinebyorderid/" + order.id, function (orderLines) {
                prixTotal = 0;
                $.each(orderLines, function (j, orderLine) {

                    prixTotal = prixTotal + orderLine.price;

                    $("#table" + i).append('<tr>');

                    $("#table" + i).append('<td id="name' + j + i + '">');
                    $("#table" + i).append('</td>');

                    $("#table" + i).append('<td  id="quantity' + j + i + '">');
                    $("#table" + i).append('</td>');

                    $("#table" + i).append('<td  id="price' + j + i + '">');
                    $("#table" + i).append('</td>');

                    $("#table" + i).append('</tr>');

                    $("#name" + j + i).append(orderLine.name);
                    $("#quantity" + j + i).append(orderLine.quantityOrder);
                    $("#price" + j + i).append(orderLine.price);

                }
                );

                $("#cmd" + i).append('<p class="prixTotal">Prix total =' + prixTotal + '€</p>');
                $("#cmd" + i).append('<hr>');
                $("#cmd" + i).append('<a href="commande.html?id=' + order.id + '" id="link' + i + '">');
                $("#link" + i).append('<button id="btn' + i + '" class="btn">');
                $("#btn" + i).append('Voir les détails de la commande');
                $("#link" + i).append('</button>');
                $("#cmd" + i).append('</a>');

            }
            );
        }
        );
    }
    );
}

$('#formSignUp').submit(function (event) {
    event.preventDefault();

    var newClient = {
        id: 0,
        firstName: $('#firstname').val(),
        lastName: $('#lastname').val(),
        email: $('#email').val(),
        password: $('#password').val(),
        address: {
            id: 0,
            number: parseInt($('#number').val()),
            road: $('#road').val(),
            zipcode: parseInt($('#zipcode').val()),
            town: $('#town').val()
        }
    };

    var newClientString = JSON.stringify(newClient);
    console.log(newClientString);

    // Assign handlers immediately after making the request,
    // and remember the jqxhr object for this request

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function ()
    {
        if (this.readyState === 4)
        {
            if (this.status >= 200 && this.readyState < 300)
            {
                alert("Data: " + this.responseText + "\nStatus: " + this.status);
            }
        }
    };

    xhr.open("POST", "http://localhost:8080/sebo_backendnew/api/accountmanager/create");
    xhr.setRequestHeader("Content-Type", "application/json", true);
    xhr.send(newClientString);
});


/**************************************************************************************/

function removeCookie()
{
    destroyCookie('client', 'Hakim Lama');
}

function setCookie(sName, sValue) {
    var today = new Date();
    var expires = new Date();

    expires.setTime(today.getTime() + (365 * 24 * 60 * 60 * 1000));
    document.cookie = sName + "=" + encodeURIComponent(sValue) + ";expires=" + expires.toGMTString();
}

function destroyCookie(sName, sValue) {
    var today = new Date(), expires = new Date();
    expires.setTime(today.getTime() + (0));
    document.cookie = sName + "=" + encodeURIComponent(sValue) + ";expires=" + expires.toGMTString();
    "id=1";
}

function getCookieValue(nom)
{
    var result = null;

    if (document.cookie !== null)
    {
        var elements = document.cookie.split('=');
        var i = 0;

        if (elements !== null)
        {
            while ((i < elements.length - 1) && (elements[i] !== nom))
            {
                i++;
            }
            if (i < elements.length - 1)
            {
                result = elements[i + 1];
            }
        }
    }
    return result;

}

function getCookiePart(valeur, num)
{
    var result = null;
    var elements = valeur.split('%2C');
    if ((valeur !== null) && (num >= 0) && (num < elements.length))
    {

        result = elements[num];
    }
    return result;
}



    
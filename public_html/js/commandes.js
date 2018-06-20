$(document).ready(function () {

    var url = window.location.search;
    var id = url.substring(url.lastIndexOf("=") + 1);

    $('#title').append('Commande n°' + id);

    $.getJSON('http://172.16.153.21:8080/sebo_backendnew/api/ordermanager/getorderbyid/' + id, function (commande) {

        var statut;

        switch (commande.orderState) {
            case 1:
                statut = 'validée par le client';
                break;
            case 21:
                statut = 'validée par la banque';
                break;
            case 22:
                statut = 'rejetée par la banque';
                break;
            case 31:
                statut = 'Produits en stock, préparation en attente';
                break;
            case 32:
                statut = 'Produits insuffisant, préparation en attente';
                break;
            case 41:
                statut = 'rejetée';
                break;
            case 42:
                statut = '????';
                break;
            case 43:
                statut = 'en attente';
                break;
            case 5:
                statut = 'en préparation';
                break;
            case 6:
                statut = 'expédiée';
                break;
            case 7:
                statut = 'livrée';
                break;
        }

        $('#dateCommande').append('<p>Date de commande : ' + commande.orderDate + '</p>');
        $('#adresseCommande').append('<p>Adresse de commande : ' + commande.address.number + ' ' + commande.address.road + ' ' + commande.address.zipcode + ' ' + commande.address.town + '</p>');
        $('#statutCommande').append('<p>Statut de la commande : ' + statut);
 
    });


});




/**********************************************************************/

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




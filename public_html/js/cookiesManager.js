/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var test = {};
test.prout = function() 
{
    alert('ca marche !');
};


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
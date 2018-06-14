function loadFrontArticles()
{
    $.getJSON("http://172.16.153.21:8080/sebo_backendnew/api/productscatalogue/getlist", function (data) {

        $.each(data, function (i, value) {
            var j = i + 1;
            $("#art" + j).append('<h3>' + value.name + '</h3>');
            $("#art" + j).append('<hr>');
            $("#art" + j).append('<img src="' + value.urlPicture + '"height="42" width="42" />');
            $("#art" + j).append('<p>' + value.price + '€</p>');
            $("#art" + j).append('<a href="article.html?id=' + value.id + '"><button class="btn">Voir l\'article</button></a>');
        }
        );
    }
    );
}

function loadArticle()
{
    var url = window.location.search;
    var id = url.substring(url.lastIndexOf("=") + 1);

    $.getJSON("http://172.16.153.21:8080/sebo_backendnew/api/productscatalogue/getoneproduct/" + id, function (article) {

        $("#artTitre").append(article.name);
        $("#artEditeur").append(article.supplier);
        $("#artRef").append(article.reference);
        $("#artDescription").append('super produit');
        $("#artPrice").append(article.price + '€');
    }
    );

}

function loadArticlesByCategory()
{
    var url = window.location.search;
    var category = url.substring(url.lastIndexOf("=") + 1);
    $.getJSON("http://172.16.153.21:8080/sebo_backendnew/api/productscatalogue/getlistbycategory/" + category, function (articles) {

        $.each(articles, function (i, value) {
            $("#catalogue").append('<div class="articleVignette" id="'+ i + '"></div>');
                       
            $("#" + i).append('<h3>' + value.name + '</h3>');
            $("#" + i).append('<hr>');
            $("#" + i).append('<img src="' + value.urlPicture + '"height="70" width="70" />');
            $("#" + i).append('<p>' + value.price + '€</p>');
            $("#" + i).append('<a href="article.html?id=' + value.id + '"><button class="btn">Voir l\'article</button></a>');
    
        }

        );
    }
    );
}

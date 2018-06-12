function loadArticle()
{
    
    var getProduct = "http://172.16.153.21:8080/sebo_backendnew/api/productscatalogue/getoneproduct/1";
	
    $.ajax({
        url: getProduct
    }).done(function(data) {
        
        $('#art1').append(" c'est fait2 !");
    });
}





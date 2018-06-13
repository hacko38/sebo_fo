function loadArticle()
{	
    $.getJSON("http://172.16.153.21:8080/sebo_backendnew/api/productscatalogue/getlist",function (data){
        $.each(data,function(index,value){
            var i = index-1;
           $("#art"+i).append('<h3>' + value.name + '<h3>');
        });
        
        
    });  
}




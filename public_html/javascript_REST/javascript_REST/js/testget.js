
$(document).ready(function() {
	myGet();
});


function myGet() {
	$.ajax({
        url: "http://172.16.153.21:8080/BackEndTest/api/article/add/tabouret"
    }).then(function(data) {
       $('.paragraphe').append(" c'est fait !");
    });
}














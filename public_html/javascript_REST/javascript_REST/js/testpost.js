
$(document).ready(function() {
	var form = document.getElementById("formstagiaire");

	form.onsubmit = function (e) {
	  // stop the regular form submission
	  e.preventDefault();

	  // collect the form data while iterating over the inputs
	  var data = {};
	  for (var i = 0, ii = form.length; i < ii; ++i) {
		var input = form[i];
		if (input.name) {
		  data[input.name] = input.value;
		  datastr = JSON.stringify(data);
		}
	  }
	  myPost(datastr);
	}
});


function myPost(data) {
     $.ajax({
             type: "POST",
             url: "http://172.16.153.21:8080/BackEndTest/api/article/add/table",
             data: JSON.stringify(data),// now data come in this function
             contentType: "application/json; charset=utf-8",
             crossDomain: true,
             dataType: "json",
             success: function (data, status, jqXHR) {

                 alert("success");// write success in " "
             },

             error: function (jqXHR, status) {
				 $('.paragraphe').append(data);
                 // error handler
                 console.log(jqXHR);
				 alert(data);
                 alert('fail' + status.code);
             }
          }).then(function(data) {
       $('.paragraphe').append(" c'est fait !");
    });
}
	
	
	
	
	

	
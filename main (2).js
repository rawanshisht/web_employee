

$(function(){ 
	var $allData = $('#table_data');
	var $name= $('#name');
	var $mobile= $('#mobile');
	var $phone= $('#phone');
	var $address= $('#address');
	var $username= $('#username');
	var $password= $('#password');

    $.ajax({
        type:'GET',
        url: 'http://employeesintern.azurewebsites.net/api/employees',
        success: function(allData){
            $.each(allData, function(i, data){
                $allData.append ("<tr>" + "<td>" + data.id +"</td>"+ "<td>"+data.name+"</td>" 
                + "<td>" + data.mobile + "</td>"
                 + "<td>" + data.phone + "</td>" 
                 + "<td>" + data.address + "</td>"
                 + "<td>" + data.username + "</td>"
                 + "</tr>");
            });
		},
		error: function(){
			alert('Error Loading Data');
		}
	});
	$.ajax({
		url: 'http://employeesintern.azurewebsites.net/api/employees',
		type: 'POST',    
		data: JSON.stringify(employeeData),
		contentType: 'application/json',
		success: function(result) {
			getData(false);
			displayEmployeesData();
			document.getElementById("AddEmpForm").reset();
			alert("Added Successfully");
		}
	});
    
	// $('#sumbit').on('click', function(){

	//     var new_data= { //order
	// 		id: $('#id').val(),
	//         name: $('#name').val(),
	//         mobile: $('#mobile').val(),
	//         phonee: $('#phone').val(),
	//         address: $('#address').val(),
	//         username: $('#username').val(),
	//         password: $('#password').val(),
	// 	};
		
	//     $.ajax({
	//         type: 'POST',
	// 		url: 'http://employeesintern.azurewebsites.net/api/employees',
	//         data: new_data, //order
	//         success: function submittedData(){
	// 			alert('ok');
	//             $allData.append ("<tr>" + "<td>" + newData.id +"</td>"+ "<td>"+data.name+"</td>" 
    //             + "<td>" + newData.mobile + "</td>"
    //              + "<td>" + newData.phone + "</td>" 
    //              + "<td>" + newData.address + "</td>"
    //              + "<td>" + newData.username + "</td>"
    //              + "</tr>");      
	// 			},
	// 			error: function(){
	// 				alert('Error Submitting User');
	// 			}
	//     });
	// });
});
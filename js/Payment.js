$(document).ready(init);

function init(){
	
	solicitar();
}


function solicitar(){
	$.ajax({
		url:"https://clientes.geekadvice.pe/api/carrera",
		data:{tipo:4}
	}).done(function(_data){
		console.log(_data);
        update(_data);
	});
};

function update(_info){
	//alert(_info.precio);
   $('#precio').text(_info.estimado.moneda+_info.final);
   $('#pic').attr("src",_info.conductor.url);	
	$('#name').text(_info.conductor.name);
}


function init(){
	solicitarEstimado();
	solicitar();
}

function solicitarEstimado(){
	$.ajax({
		url:"https://clientes.geekadvice.pe/api/estimado",
		data:{tipo:4}
	}).done(function(_data){
		//console.log(_data);
        update(_data);
	});
};

function solicitar(){
	$.ajax({
		url:"https://clientes.geekadvice.pe/api/carrera",
		data:{tipo:4}
	}).done(function(_data){
		console.log(_data);
        update2(_data);
	});
};

function update(_info){
	//alert(_info.precio);
   $('#precio').html('<h3 id="precio">'+_info.estimado.moneda+_info.estimado.min+'</h3>');
   	
}

function update2(_info){
	$('#pic').attr("src",_info.conductor.url);
}
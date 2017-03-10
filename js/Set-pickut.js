var map;

function initMap() {
 // Create a map object and specify the DOM element for display.   
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -16.457389199999998, lng: -71.5315308},
    zoom:14,
    disableDefaultUI: true
  });
    
    var myLatLng = {lat: -16.457389199999998, lng: -71.5315308};
    

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!',
	icon: "image/carpink (2).png",
	
  });
 
    
	var geocoder = new google.maps.Geocoder();
	
	solicitarEstimado();
	eventoClick();
}


//SOLICITAR ESTIMADO
function solicitarEstimado(){
	$.ajax({
		url:"https://clientes.geekadvice.pe/api/estimado",
		data:{tipo:4}
	}).done(function(_data){
		//console.log(_data);
        update(_data);
	});
};

function update(_info){
	//alert(_info.origen)origen;
   $('#origen').html(_info.origen);
		
}

//$(document).ready(init);

function eventoClick(){
	var lista = $('li');
	$.each(lista, function(){
		$(this).on('click', onClickLista)
	});
	
	
}

function onClickLista(evt){
	var image = $(event.currentTarget).find('#car').attr('src');
	localStorage.setItem('src',image);
	var nuevo = $(event.currentTarget).find('#model').text();
	localStorage.setItem('text',nuevo);
}
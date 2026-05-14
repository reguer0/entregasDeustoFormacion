
const btnEnviar = document.getElementById('btn-enviar');


btnEnviar.addEventListener('click',  ()=> {
	const vehiculo = {
    	marca:		document.getElementById('marca').value,
   		modelo:		document.getElementById('modelo').value,
    	anio:	parseInt(document.getElementById('anio').value),
    	km:		parseInt(document.getElementById('km').value),
    	combustible:	document.getElementById('combustible').value,
    	precio:		parseFloat(document.getElementById('precio').value)
  	};

  console.log('Objeto vehículo:', vehiculo);
 
});




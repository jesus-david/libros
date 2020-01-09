

class Utilidad{

	alertSuccess(mensaje, direccion){
		var notification = alertify.notify(`<div><img src='views/images/icon-success.png' width='30px' height='30px' />&nbsp &nbsp  ${mensaje}</div>`, 'success', 2, function(){
			if (direccion) {
				window.location = direccion	
			}
        });
	}

	alertToastSuccess(mensaje){
		$("#toast-alert").html(`
			
			<div class="toast-header" id="headerToast" style='background:aliceblue;'>
                <img src="views/images/icon-success.png" class="rounded mr-2" alt="...">
                <strong class="mr-auto" id="tituloToast">Operación realizada</strong>
            </div>
            <div class="toast-body" id="cuerpoToast">
            	<h5 class='text-center'>${mensaje}</h5>	
            </div>

		`)
		$("#toast-alert").toast("show")
	}
	alertToastError(mensaje){
		$("#toast-alert").html(`
			
			<div class="toast-header" id="headerToast" style='background:aliceblue;'>
                <img src="views/images/icon-error.png" class="rounded mr-2" alt="...">
                <strong class="mr-auto" id="tituloToast">Ooops...</strong>
            </div>
            <div class="toast-body" id="cuerpoToast">
            	<h5 class='text-center'>${mensaje}</h5>	
            </div>

		`)
		$("#toast-alert").toast("show")
	}

	alertError(mensaje){
		var notification = alertify.notify("<img src='views/images/icon-error.png' width='30px' height='30px' />&nbsp &nbsp "+mensaje, 'error', 4);
	}
	alertWarning(mensaje, direccion){
		swal({
			type: 'warning',
            title: "¡ Atención !",
            text: `¡ ${mensaje} !`
            
        })
        .then((confirm) => {
			if (direccion) {
        		if (confirm) {
					window.location = direccion
				}else{
					window.location = direccion
				}
        	}
		}) 
	}

	alertConfirm(q){
		return new Promise((resolve, reject)=>{
        	
			alertify.confirm(`<h4>${q}</h4>`,()=>{
		        resolve()
		    },()=>{
		        reject()
		    })
		    $(".ajs-header").html("app.dropshipping")
    	})
			
	}

	alertDanger(mensaje){

		var a = `
			
			<div class="alert alert-danger alert-dismissible fade show" role="alert">
				<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
			  	${mensaje}
			</div>
		`

		return a
	}
	alertInfo(mensaje){

		var a = `
			
			<div class="alert alert-info alert-dismissible fade show" role="alert">
				<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
			  	${mensaje}
			</div>
		`

		return a
	}
	alertTextSuccess(mensaje){

		var a = `
			
			<div class="alert alert-success alert-dismissible fade show" role="alert">
				<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
			  	${mensaje}
			  	<span id='numAlertS'></span>
			</div>
		`

		return a
	}

	C(mensaje){
		console.log(mensaje)
	}
	c(mensaje){
		console.log(mensaje)
	}

	barraDeProgreso(id){
		var bar = new ProgressBar.Line(id, {
		  	strokeWidth: 4,
		  	easing: 'easeInOut',
		  	duration: 1400,
		  	color: '#15c',
		  	trailColor: '#eee',
		  	trailWidth: 1,
		  	svgStyle: {width: '100%', height: '100%'},
		  	text: {
		    	style: {
		      		// Text color.
		      		// Default: same as stroke color (options.color)
		      		color: '#999',
		      		position: 'absolute',
		      		right: '0',
		      		top: '20px',
		      		padding: 0,
		      		margin: 0,
		      		transform: null
		   	 	},
		    	autoStyleContainer: false
		  	},
		  	from: {color: '#15c'},
		  	to: {color: '#15c'},
		  	step: (state, bar) => {
		    	bar.setText(Math.round(bar.value() * 100) + ' %');
		  	}
		});

		return bar
	}

	obtenerMesEnEsp(mes){

		var back = "";

		switch(mes){

			case "January":
				back = "Enero";
				break;	
			case "February":
				back = "Febrero";
				break;	
			case "March":
				back = "Marzo";
				break;	
			case "April":
				back = "Abril";
				break;	
			case "May":
				back = "Mayo";
				break;	
			case "June":
				back = "Julio";
				break;	
			case "July":
				back = "Julio";
				break;	
			case "August":
				back = "Agosto";
				break;	
			case "September":
				back = "Septiembre";
				break;	
			case "October":
				back = "Octubre";
				break;	
			case "November":
				back = "Noviembre";
				break;	
			case "December":
				back = "Diciembre";
				break;
			default:

				back = "no se puede procesar el mes";	
		}

		
		return back

	}
}

let ObjetoCarrito = [];
let OptionsHoldOn = {
	theme: "sk-bounce",
	message: 'Procesando...',
	textColor: "white"
}
let VLogin = $("#verificarLogin").html();
var U = new Utilidad()
var util = new Utilidad()
let c = util.c

class Ajax {

	constructor(){
		var progreso = false
		this.options = {
			type: "POST",
			dataType: "JSON"
		}
	}

	// ejecutar(){
	// 	return new Promise((resolve, reject)=>{
 //        	$.ajax(this.options).done(resolve).fail(reject)
 //    	})
	// }

	// setData(object){
	// 	this.options = object
	// }
	// setDataForm(object){
	// 	// console.log(this)
	// 	this.options = object;
		
	// 	this.options.cache = false;
	// 	this.options.contentType = false;
	// 	this.options.processData = false;
	// 	this.options.xhr = ()=>{

	// 		var myXhr = $.ajaxSettings.xhr();
	// 		myXhr.upload.addEventListener('progress',(prog) =>{

	// 			var value = ~~((prog.loaded / prog.total) * 100);
	// 			if (this.progreso) {
	// 				this.progreso(value / 100)
	// 			}
				
	// 		}, false);
		
	// 		return myXhr;
	// 	}
	// }

	peticion(tipo,data,url,opciones){

		if (opciones == false) {
			opciones = undefined
		}
		if (tipo == "formData" || tipo == "FormData" || tipo == 1) {
			// console.log(url)
			this.options.url = url;
			this.options.type = (opciones != undefined) ? opciones.type : "POST";
			this.options.dataType = (opciones != undefined) ? opciones.dataType : "JSON";
			this.options.data = data;
			this.options.cache = false;
			this.options.contentType = false;
			this.options.processData = false;
			this.options.xhr = ()=>{

				var myXhr = $.ajaxSettings.xhr();
				myXhr.upload.addEventListener('progress',(prog) =>{

					var value = ~~((prog.loaded / prog.total) * 100);
					if (this.progreso) {
						this.progreso(value / 100)
					}
					
				}, false);
			
				return myXhr;
			}

		}else if (tipo == "normal" || tipo == 0) {


			this.options.url = url
			this.options.type = (opciones != undefined) ? opciones.type : "POST";
			this.options.dataType = (opciones != undefined) ? opciones.dataType : "JSON";
			this.options.data = data
			this.options.xhr = ()=>{

				var myXhr = $.ajaxSettings.xhr();
				myXhr.upload.addEventListener('progress',(prog) =>{

					var value = ~~((prog.loaded / prog.total) * 100);
					if (this.progreso) {
						this.progreso(value / 100)
					}
					
				}, false);
			
				return myXhr;
			}
		}

		return new Promise((resolve, reject)=>{
        	$.ajax(this.options).done(resolve).fail(reject)
    	})
	}

	mostrarProgreso(callback){
		
		this.progreso = callback
			
	}

}

let rutaAjaxMain = "views/ajax/ajax.php",
	rutaAjaxProductos = "views/ajax/gestorProductos.php",
	rutaAjaxPedidos = "views/ajax/gestorPedidos.php",
	rutaAjaxPaises = "views/ajax/gestorPaises.php",
	rutaAjaxCambios = "views/ajax/gestorCambios.php",
	rutaAjaxNotificaciones = "views/ajax/gestorNotificaciones.php",
	rutaAjaxConfig = "views/ajax/gestorConfiguraciones.php",
    ajax = new Ajax()

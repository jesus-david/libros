<?php

class EnlacesModels{

	public static function enlacesModel($enlaces){

		// var_dump($enlaces);

		if( $enlaces == "producto" ||
			$enlaces == "misProductos" ||
			$enlaces == "usuarios" ||
			$enlaces == "listUsers" ||
			$enlaces == "configuraciones" ||
			$enlaces == "gestorExtension" ||
			$enlaces == "cron" ||
			$enlaces == "dashboard" ||
			$enlaces == "historial" ||
			$enlaces == "pruebaApi" ||
			$enlaces == "login" ||
			$enlaces == "registro" ||
			$enlaces == "cerrarSesion" ||
			$enlaces == "cerrar"){

			$module = "views/modules/".$enlaces.".php";

		}
		else if($enlaces == "index" || $enlaces == ""){
			$module = "views/modules/index.php";
		}else{
			$module = "views/modules/404.php";
		}

		return $module;

	}


}
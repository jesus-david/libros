<?php 
	// session_start();
	require_once '../../models/conexion.php';
	require_once '../../models/consulta.php';
	require_once '../../models/procesarPeticion.php';

	require_once '../../controllers/procesarPeticion.php';


class Ajax{

	public function validarCedula(){
		$respuesta = ProcesarPeticionController::validarCedula();

		echo $respuesta;
	}



}


$a = new Ajax();

//ACIONES AJAX PARA GESTIONAR USUARIOS

	if (isset($_POST["validarCedula"])) {

		$a ->validarCedula();
	}


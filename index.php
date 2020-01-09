<?php  

require_once 'models/conexion.php';
require_once 'models/consulta.php';
require_once 'models/enlaces.php';

require_once 'controllers/enlaces.php';
require_once 'controllers/template.php';



$template = new templateControllers();
$template -> template();

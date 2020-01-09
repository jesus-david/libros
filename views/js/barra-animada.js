'use strict'

var ancho = $(".barraAnimada").width(),
	items = $(".barraAnimada > a"),
	anchoItemPx = ancho / items.length,
	anchoItem = ((ancho / items.length) * 100) / ancho,
	contador = 0,
	strStyle = ""

for(var i = 0; i < items.length; i++){
	var aux = items[i].getAttribute("data-color")
	var color = (aux) ? aux : "var(--primary)"
	var t = contador * 100

	items[i].setAttribute("data",i)
	strStyle += `
		.item-activo-${i}:before{
			background: ${color};
			transform: translateX(${t}%);	
		}
	`
	contador++
}

$(`
	<style>
		.barraAnimada{
			display: flex;
			list-style: none;
			padding: 0;
			width: 100%;
			position: relative;
			height: 45px;
			align-items: center;
		}
		.item-barraAnimada a{
			display: inline-block;
			width: 100%;
		}
		.barraAnimada:before{
			content: "";
			display: block;
			width: ${anchoItem}%;
			height: 3px;
			transition: all .3s;
			position: absolute;
			bottom: 0;
		}
		.item-barraAnimada{
			width: ${anchoItem}%;
			cursor:pointer;
			text-align:center;
		}

		${strStyle}

	</style>`

).appendTo("head");

$(".item-barraAnimada").on("click",function(){
	
	var item = $(this).attr("data")
	var color = $(this).attr("data-color")

	for(var j = 0; j < items.length; j++){
		$(".barraAnimada").removeClass("item-activo-"+j)	
	}
	$(".item-barraAnimada").css("color","inherit")
	$(".barraAnimada").addClass("item-activo-"+item)
	if (color) {
		$(this).css("color",color)
	}else{
		$(this).css("color","var(--primary)")
	}
	
		
})


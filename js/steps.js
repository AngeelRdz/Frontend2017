;(function(){

	//Nos va a decir que formulario va a procesar
	const selector = "#contact-form"

	//Listeners para los eventos
	$(selector).find(".input").on("change",(ev)=>{

		let $input = $(ev.target)

		let $next_input = $input.next()

		enfocar_siguiente_input($next_input)

		console.log($input)

		console.log("Cambie de valor")
	})

	//Funciones de ayuda
	function validar_formulario(){

	}

	function es_valido_formulario(){

	}

	function enfocar_siguiente_input($next_input){
		$next_input.focus()

	}

})()
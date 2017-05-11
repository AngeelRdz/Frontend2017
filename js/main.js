;(function(){

	let sticky = false

	//Iniciamos en la posicion 0 (para el slider)
	let currentPosition = 0

	//Se crea una constante del numero total de imagenes menos 1
	//Se crea una conexion de javascript con html5 a traves de un meta
	const imageCounter = $("[data-name='image-counter']").attr("content")
	console.log(imageCounter)

	//Constante para el correo electronico
	const email = "rodriguez_1409@hotmail.com"

	//Para mandar a imprimir en consola el formulario
	$("#contact-form").on("submit", function(ev){
		
		ev.preventDefault()

		sendForm($(this))

		return false
	})

	//Se quita la clase hidden del id 
	$("#sticky-navigation").removeClass("hidden")
	//Se agrega esta linea en el id para quitar la navegacion en cero milisegundos
	$("#sticky-navigation").slideUp(0)

	//Intervalo para el slide
	setInterval(()=>{

		if (currentPosition < imageCounter) {
			currentPosition++
		}else{
			currentPosition = 0
		}

		//console.log("Hola Mundo");
		$("#gallery .inner").css({
			//left: "-100%"
			//Ya no se manda estetico
			left: "-" + currentPosition * 100 + "%"
		})
	},3000)

	//Otra manera de hacerlo
	//setInterval(diHola,1000)


	//Al cargar la pagina el tamaño de la ventana se muestra
	console.log($(window).height());

	$(window).scroll(function(){
		//Muestra si se utiliza el scroll
		//console.log("scroll activado")

		//Valor de la ventana
		//console.log($(window).scrollTop())

		//Muestra si es verdadero o falso al scroll de la ventana
		//console.log(isInBottom())

		const inBottom = isInBottom()

		//inBottom es true y ademas sticky es falso
		if (inBottom && !sticky) {
			//Mostrar la navegacion sticky
			console.log("Cambiar la navegacion")
			sticky = true
			//Mostrar navegacion
			stickNavigation()
		}
		if(!inBottom && sticky){
			//Ocultar la navegacion sticky
			console.log("Regresar la navegacion")
			sticky = false
			//Ocultar navegacion
			unStickNavigation()
		}
	})

	//Otra forma
	/*$(window).scroll(() => {
		console.log("scroll activado")
	})*/

	function stickNavigation(){
		//El div de description se quedara fixed, se mantendra pegado en la parte de arriba y quita la clase absolute
		$("#description").addClass("fixed").removeClass("absolute")

		//Se agrega la clase hidden al id #navigation
		//$("#navigation").addClass("hidden")

		//Se agrega animacion para mostrar el contenido
		$("#navigation").slideUp("100")

		//Se quitara la clase hidden al id #sticky-navigation
		//$("#sticky-navigation").removeClass("hidden")

		//Se agrega animacion para ocultar
		$("#sticky-navigation").slideDown("100")
	}

	function unStickNavigation(){
		//El div de description se removera fixed, y se agrega la clase absolute
		$("#description").removeClass("fixed").addClass("absolute")

		//Se quitara la clase hidden al id #navigation
		//$("#navigation").removeClass("hidden")

		//Se agrega animacion para ocultar
		$("#navigation").slideDown("100")

		//Se agregara la clase hidden al id #sticky-navigation
		//$("#sticky-navigation").addClass("hidden")

		//Se agrega animacion para mostrar
		$("#sticky-navigation").slideUp("100")
	}

	function sendForm($form){
		//console.log($form.formObject())
		$.ajax({
		    url: $form.attr("action"), 
		    method: "POST",
		    data: $form.formObject(),
		    dataType: "json",
		    success: function(){
		    	alert("Todo salio bien")
		    }
		})
	}

	function isInBottom(){
		//Constante ya no va a cambiar al obtener el valor
		const $description = $("#description")
		//Se obtiene el tamaño, metodo height lo agrega jQuery - Nos devuelve la altura de este elemento
		const descriptionHeight = $description.height()

		//Nos devuelve true o false - falso cuando estamos arriba y verdadero cuando estamos abajo (tope de la ventana)
		//Si es masyor al tamaño de la ventana menos descripcionheight por 5.5 es para darle mas espacio
		return $(window).scrollTop() > $(window).height() - (descriptionHeight * 5.5)
	}

	function diHola(){
		console.log("Hola mundito 2")
	}

})()
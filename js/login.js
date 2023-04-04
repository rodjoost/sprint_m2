		function login() {
			var username = document.getElementById("username").value;
			var password = document.getElementById("password").value;

			if (username === "user" && password === "pass") {
				window.location.href = "pagina_principal_privada.html";
				return false;
			} else {
				alert("Usuario o contraseña incorrectos.");
				document.getElementById("loginForm").reset();
				return false;
			}
		}

# Worlds-radio
Web pensada para poder ver los worlds y la "radio" de ibai al mismo tiempo. El stream de ibai se colocaría encima de la cam de un jugador, de forma que no moleste.<br><br>
La web permite:
* Visualizar y chatear en el chat de twitch de ibai.
* Ocultar el chat de twitch.
* Visualizar el stream de twitch (y ocultarlo manteniendo el audio)
* Modo a pantalla completa.


La web esta adaptada para funcionar correctamente en las siguientes resoluciones:
* 2560x1440
* 1920x1080
* 1440x900
* 1366x768



Ejemplo de visualización a pantalla completa con chat
![Ejemplo de visualización a pantalla completa con chat](https://i.imgur.com/N8ZmqEP.png)

Los controles se ven así. Ese cuadro es visible al entrar a la página. Si entramos al cuadro con el raton y salimos desaparecerá. Volverá a aparecer si pasamos el ratón sobre esa zona.
![Controles](https://i.imgur.com/TdQRuTa.png)

# Configuración necesaria
Tendrás que poner el id del stream de youtube que quieras ver. Esto se hace en **index.html**<br>
Por ejemplo para el stream: https://www.youtube.com/watch?v=5qap5aO4i9A , tendríamos el siguiente código:
<br>
```
<iframe id="youtube" allowfullscreen="true" width="420" height="315" src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1&mute=1"></iframe>
```


# Otras configuraciónes  (opcionales)
En el archivo **index.html** podemos definir de que canal queremos el **chat de twitch** (ibai por defecto)<br>
```
<iframe id="twitch-chat" frameborder="500px" scrolling="yes" src="https://www.twitch.tv/embed/ibai/chat?darkpopout&parent=localhost" height="100%" width="20%"></iframe>
```
Si queremos el chat en clarito, bastaría con cambiar el código anterior por este
```
<iframe id="twitch-chat" frameborder="500px" scrolling="yes" src="https://www.twitch.tv/embed/ibai/chat?parent=localhost" height="100%" width="20%"></iframe>
```

En el archivo **src/codigo.js** podemos definir de que canal queremos ver la retransmisión de twitch (ibai por defecto)<br>
```
new Twitch.Embed("twitch-embed", {
	channel: "ibai",  //introduce aqui el canal que quieres
	layout: "video"
});
```

# Como ejecutar
Es necesario un servidor web<br>
Yo aconsejo [XAMPP](https://www.apachefriends.org/es/index.html) que es donde lo he probado, pero sois libres de ponerlo dónde gusteis.

Guía rápida para noobs:
* Instalar XAMPP
* Ejecutar XAMPP
* Descargar el proyecto [worlds](https://github.com/ixtrunai/Worlds-radio/archive/main.zip)
* Descomprimimos el zip. Dentro de la carpeta worlds-radio-main esta la carpeta worlds. La copiamos a donde se haya instalado XAMPP (C:\Xampp\htdocs\).<br>
La ruta final debe de ser C:\Xampp\htdocs\worlds
* Abrimos nuestro navegador favorito y accedemos a la [página](http://localhost/worlds/)

Nota para noobs: siempre que queramos acceder a la web XAMPP tendrá que estar en ejecución.


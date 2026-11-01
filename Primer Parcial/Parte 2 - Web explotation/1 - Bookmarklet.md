## Descripción
Why search for the flag when I can make a bookmarklet to print it for me? Browse [here](http://chatelaine.cylabacademy.net:48805/), and find the flag!
## Solución
````
① Entré a la página proporcionada por el reto.

② En la página encontré un **bookmarklet** que contenía un script en JavaScript.

③ Copié el script mostrado en la página:

```javascript
javascript:(function() {
    var encryptedFlag = "...";
    var key = "picoctf";
    var decryptedFlag = "";

    for (var i = 0; i < encryptedFlag.length; i++) {
        decryptedFlag += String.fromCharCode(
            (encryptedFlag.charCodeAt(i) -
            key.charCodeAt(i % key.length) + 256) % 256
        );
    }

    alert(decryptedFlag);
})();
```

④ Abrí las herramientas de desarrollador con `F12` y entré en **Console**.

⑤ Pegué y ejecuté el script en la consola.

⑥ El script mostró la flag:

`academy{p@g3_turn3r_f1291985}`
````
## Notas adicionales
```
- El reto utiliza un bookmarklet de JavaScript.
- La clave utilizada era `picoctf`.
- Al ejecutar el script se obtiene directamente la bandera.
```
## Referencias
- http://chatelaine.cylabacademy.net:48805/
- Chrome DevTools
- JavaScript

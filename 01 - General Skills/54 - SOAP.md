## Descripción
The web project was rushed and no security assessment was done. Can you read the /etc/passwd file?

[Web Portal](http://saturn.picoctf.net:62184/)
## Solución
1. Activar FoxyProxy en el navegador para interceptar el tráfico con Burp Suite.
2. Ingresar a la página del reto (`[http://saturn.picoctf.net:62184/](http://saturn.picoctf.net:62184/)`) e interactuar con el botón para generar una petición web.
3. En Burp Suite, ir a la pestaña **Proxy > HTTP history**, localizar la petición `POST` hacia el endpoint `/data` y mandarla al **Repeater**
4. Al revisar la petición en el Repeater, se observa que los datos viajan en formato XML.
5. Para explotar la vulnerabilidad XXE, se modifica el código XML agregando la definición de una entidad externa (`<!DOCTYPE...>`) que apunte al archivo local del servidor `file:///etc/passwd`. Luego, se inyecta esa variable (`&xxe;`) dentro del campo `<ID>`. El payload queda así:

XML

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE foo [<!ENTITY xxe SYSTEM "file:///etc/passwd">]>
<data><ID>&xxe;</ID></data>
```

6. Al dar clic en **Send**, la respuesta HTTP devuelve un error que expone el contenido del archivo solicitado, revelando la flag en la última línea correspondiente al usuario `picoctf`.
Solución:
picoCTF{XML_3xtern@l_3nt1t1ty_0e13660d}
## Notas adicionales
- XXE (XML External Entity): Falla de seguridad web que ocurre cuando una aplicación procesa datos XML de fuentes no confiables sin deshabilitar la resolución de entidades externas. Permite a un atacante leer archivos del servidor, realizar peticiones SSRF o ejecutar código.
- Burp Suite: Herramienta para pruebas de seguridad de aplicaciones web. Su función "Repeater" es clave para manipular y reenviar peticiones HTTP de forma manual.
- **`/etc/passwd`:** Archivo en sistemas Linux/Unix que almacena información sobre las cuentas de usuario. Leerlo es la prueba de concepto (PoC) clásica en vulnerabilidades de lectura de archivos (LFI/XXE).
## Referencias
- PortSwigger - XML external entity (XXE) injection
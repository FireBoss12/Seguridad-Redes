## Descripción
There is some interesting information hidden around this site. Can you find it?

http://wily-courier.picoctf.net:58746/

## Solución
Revisamos el código HTML de la página:

```bash
curl -s http://wily-courier.picoctf.net:58746/
```

Encontramos la primera parte en un comentario:
`picoCTF{t`

El HTML menciona los archivos `mycss.css` y `myjs.js`. Revisamos el CSS:

```bash
curl -s http://wily-courier.picoctf.net:58746/mycss.css
```

Encontramos la segunda parte:
`h4ts_4_l0`

Después revisamos el JavaScript:

```bash
curl -s http://wily-courier.picoctf.net:58746/myjs.js
```

Un comentario pregunta cómo evitar que Google indexe el sitio. Esto nos lleva al archivo `robots.txt`:

```bash
curl -s http://wily-courier.picoctf.net:58746/robots.txt
```

Encontramos la tercera parte:
`t_0f_pl4c`

También aparece una pista sobre Apache y acceso. Revisamos `.htaccess`:

```bash
curl -s http://wily-courier.picoctf.net:58746/.htaccess
```

Encontramos la cuarta parte:
`3s_2_lO0k`

La siguiente pista menciona Mac y almacenar información. Consultamos `.DS_Store`:

```bash
curl -s http://wily-courier.picoctf.net:58746/.DS_Store
```

Encontramos la quinta parte:
`_9588550}`

Unimos los cinco fragmentos en orden, sin espacios.

Solución:
picoCTF{th4ts_4_l0t_0f_pl4c3s_2_lO0k_9588550}

## Notas adicionales

- `-s`: oculta la barra de progreso de curl.
- Los comentarios del HTML, CSS y JavaScript se pueden leer aunque no aparezcan visualmente en la página.
- `robots.txt` indica a los rastreadores qué rutas no deben rastrear; no impide acceder a ellas.
- `.htaccess` es un archivo de configuración utilizado por Apache.
- `.DS_Store` guarda información de carpetas en macOS; en este reto contiene el último fragmento.
- La bandera distingue mayúsculas y minúsculas: debemos copiar exactamente `lO0k`.
- Si reiniciamos la instancia, debemos actualizar el enlace en los comandos.

## Referencias

- [Instancia del reto Scavenger Hunt](http://wily-courier.picoctf.net:58746/)
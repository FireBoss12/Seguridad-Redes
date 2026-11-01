## Descripción
Who doesn't love cookies? Try to figure out the best one.

http://wily-courier.picoctf.net:57449/

## Solución
Consultamos las cabeceras del servidor:

```bash
curl -s -i http://wily-courier.picoctf.net:57449/
```

El servidor establece una cookie llamada `name` con el valor `-1`.

Enviamos el nombre de galleta que aparece como ejemplo en el formulario:

```bash
curl -s -i -d "name=snickerdoodle" http://wily-courier.picoctf.net:57449/search
```

La respuesta establece `name=0` y redirige a `/check`. La cookie utiliza números para seleccionar las galletas.

Al consultar `/check` con el valor `18`, el servidor muestra la bandera:

```bash
curl -s -b "name=18" http://wily-courier.picoctf.net:57449/check
```

Solución:
picoCTF{3v3ry1_l0v3s_c00k135_a4dadb49}

## Notas adicionales

- `-s`: oculta la barra de progreso de curl.
- `-i`: muestra las cabeceras junto con el contenido de la respuesta.
- `-d`: envía los datos del formulario mediante POST.
- `-b`: envía una cookie al servidor.
- El reto permite modificar la cookie `name` para acceder a diferentes resultados.
- Si reiniciamos la instancia, debemos usar el nuevo enlace que proporcione picoCTF.

## Referencias

- [Instancia del reto Cookies](http://wily-courier.picoctf.net:57449/)
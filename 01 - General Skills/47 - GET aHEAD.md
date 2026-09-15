## Descripción
Find the flag being held on this server to get ahead of the competition

http://wily-courier.picoctf.net:54627/
## Solución
Ponemos curl con el link en la terminal
```
FireBoss478-academy@webshell:~$ curl -s -I http://wily-courier.picoctf.net:54627/
```
Solución: 
picoCTF{r3j3ct_th3_du4l1ty_8b13f07}
## Notas adicionales
- -s - Hace que el curl sea silencioso, que oculte la barra de progreso
- -I - Solicita solo las cabeceras HTTP, sin descargar el cuerpo de la página
## Referencias

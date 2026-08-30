## Descripción
I accidentally wrote the flag down. Good thing I deleted it!

You download the challenge files here:

- [challenge.zip](https://artifacts.picoctf.net/c_titan/76/challenge.zip)
## Solución
Descargamos el archivo .zip
```
FireBoss478-academy@webshell:~$ wget https://artifacts.picoctf.net/c_titan/162/challenge.zip
```
Lo descomprimimos:
```
FireBoss478-academy@webshell:~$ unzip challenge.zip 
```
Nos cambiamos a la carpeta drop-in
 ```
 FireBoss478-academy@webshell:~$ cd drop-in
 ```
 Ejecutamos git log --oneline --all:
 ```
 FireBoss478-academy@webshell:~/drop-in$ git log --oneline -all
 ```
 Sacamos el id del commit y ejecutamos:
 ```
 FireBoss478-academy@webshell:~/drop-in/drop-in$ git show e720dc2
 ```
Solución: 
picoCTF{s@n1t1z3_7246792d}
## Notas adicionales
- git log --oneline -all - Muestra el historial de commits de Git mas resumido
## Referencias
- https://chatgpt.com/c/6a937f0b-0c04-83e8-b269-f07789c331c9
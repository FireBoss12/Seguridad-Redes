## Descripción
Someone's commits seems to be preventing the program from working. Who is it?

You can download the challenge files here:

- [challenge.zip](https://artifacts.picoctf.net/c_titan/73/challenge.zip)
## Solución
Descargamos el archivo .zip
```
FireBoss478-academy@webshell:~$ wget https://artifacts.picoctf.net/c_titan/73/challenge.zip
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
 FireBoss478-academy@webshell:~/drop-in$ git log --oneline --all
 ```
 Sacamos el id del autor del commit y ejecutamos:
 ```
 FireBoss478-academy@webshell:~/drop-in/drop-in$ git show fadeca9
 ```
Solución:
picoCTF{@sk_th3_1nt3rn_e9957ce1}
## Notas adicionales

## Referencias
## Descripción
My team has been working very hard on new features for our flag printing program! I wonder how they'll work together?

You can download the challenge files here:

- [challenge.zip](https://artifacts.picoctf.net/c_titan/179/challenge.zip)
## Solución
Descargamos el archivo .zip
```
FireBoss478-academy@webshell:~$ wget https://artifacts.picoctf.net/c_titan/179/challenge.zip
```
Lo descomprimimos:
```
FireBoss478-academy@webshell:~$ unzip challenge.zip 
```
Nos cambiamos a la carpeta drop-in
 ```
 FireBoss478-academy@webshell:~$ cd drop-in
 ```
 Ejecuté git show para mostrar contenido:
 ```
 git show feature/part-1:flag.py
 git show feature/part-2:flag.py
 git show feature/part-3:flag.py
 ```
 y junté las partes de la bandera
Solución:
picoCTF{t3@mw0rk_m@k3s_th3_dr3@m_w0rk_798f9981}
## Notas adicionales
- git branch -a - muestra todas las ramas, incluidas las remotas
- git show - Ve un archivo tal como existe en una rama
## Referencias
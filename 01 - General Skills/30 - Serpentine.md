## Descripción
Find the flag in the Python script!

[Download Python script](https://artifacts.picoctf.net/c/37/serpentine.py)
## Solución
Descargamos el archivo serpentine.py
```
FireBoss478-academy@webshell:~$ wget https://artifacts.picoctf.net/c/37/serpentine.py
```
Después lo ejecutamos con nano para revisarlo:
```
FireBoss478-academy@webshell:~$ nano serpentine.py 
```
Corregimos el error que tenía, porque estaba llamando a una frase, y no a una función que ya tenía, guardamos y ejecutamos:
```
FireBoss478-academy@webshell:~$ python3 serpentine.py 
```
Escogemos la opción que nos dará la bandera:
```
What would you like to do? (a/b/c) b
picoCTF{7h3_r04d_l355_7r4v3l3d_8e47d128}
```
Solución:
picoCTF{7h3_r04d_l355_7r4v3l3d_8e47d128}
## Notas adicionales
## Referencias

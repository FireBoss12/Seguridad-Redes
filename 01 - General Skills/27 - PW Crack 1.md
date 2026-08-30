## Descripción
Can you crack the password to get the flag?

Download the password checker [here](https://artifacts.picoctf.net/c/12/level1.py) and you'll need the encrypted [flag](https://artifacts.picoctf.net/c/12/level1.flag.txt.enc) in the same directory too.
## Solución
Descargamos el checador de contraseñas:
```
wget https://artifacts.picoctf.net/c/12/level1.py
```
Después descargamos la bandera encriptada
```
FireBoss478-academy@webshell:~$ wget https://artifacts.picoctf.net/c/12/level1.flag.txt.enc
```
Comandamos cat para ver el archivo de contraseñas:
```
FireBoss478-academy@webshell:~$ cat level1.py 
```
Revisamos el archivo y vemos que la contraseña que da es "8713", ejecutamos el archivo .py y ponemos esa contraseña:
```
FireBoss478-academy@webshell:~$ python3 level1.py 
Please enter correct password for flag: 8713
Welcome back... your flag, user:
picoCTF{545h_r1ng1ng_1b2fd683}
```
Solución:
picoCTF{545h_r1ng1ng_1b2fd683}

## Notas adicionales
- cat - Sirve para ver el contenido de un archivo
## Referencias

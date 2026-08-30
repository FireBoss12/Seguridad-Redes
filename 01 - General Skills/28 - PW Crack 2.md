## Descripción
Can you crack the password to get the flag?

Download the password checker [here](https://artifacts.picoctf.net/c/13/level2.py) and you'll need the encrypted [flag](https://artifacts.picoctf.net/c/13/level2.flag.txt.enc) in the same directory too.
## Solución
Descargamos el checador de contraseñas:
```
FireBoss478-academy@webshell:~$ wget https://artifacts.picoctf.net/c/13/level2.py
```
Después descargamos el otro archivo:
```
FireBoss478-academy@webshell:~$ wget https://artifacts.picoctf.net/c/13/level2.flag.txt.enc
```
Comandamos cat para ver el archivo de contraseñas:
```
FireBoss478-academy@webshell:~$ cat level2.py 
```
Revisamos el archivo y vemos que la contraseña está encriptada en número hexadecimal, la convierto con un convertidor y la contraseña que da es "de76", ejecutamos el archivo, y ponemos la contraseña:
```
FireBoss478-academy@webshell:~$ python3 level2.py 
Please enter correct password for flag: de76
Welcome back... your flag, user:
picoCTF{tr45h_51ng1ng_489dea9a}
```

Solución:
picoCTF{tr45h_51ng1ng_489dea9a}
## Notas adicionales
## Referencias
- https://www.rapidtables.com/convert/number/hex-to-ascii.html

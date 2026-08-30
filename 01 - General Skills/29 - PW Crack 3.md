## Descripción
Can you crack the password to get the flag?

Download the password checker [here](https://artifacts.picoctf.net/c/16/level3.py) and you'll need the encrypted [flag](https://artifacts.picoctf.net/c/16/level3.flag.txt.enc) and the [hash](https://artifacts.picoctf.net/c/16/level3.hash.bin) in the same directory too.

There are 7 potential passwords with 1 being correct. You can find these by examining the password checker script.
## Solución
Descargamos el checador de contraseñas:
```
FireBoss478-academy@webshell:~$ wget https://artifacts.picoctf.net/c/16/level3.py
```
Después descargamos los otros archivos:
```
FireBoss478-academy@webshell:~$ wget https://artifacts.picoctf.net/c/16/level3.flag.txt.enc
FireBoss478-academy@webshell:~$ wget https://artifacts.picoctf.net/c/16/level3.hash.bin
```
Comandamos cat para ver el archivo de contraseñas:
```
FireBoss478-academy@webshell:~$ cat level3.py 
```
Checamos las contraseñas posibles y vamos checando una a una a ver cual es:
```
FireBoss478-academy@webshell:~$ python3 level3.py 
Please enter correct password for flag: f0ac
That password is incorrect
FireBoss478-academy@webshell:~$ python3 level3.py 
Please enter correct password for flag: 4b17
That password is incorrect
FireBoss478-academy@webshell:~$ python3 level3.py 
Please enter correct password for flag: 4e66
That password is incorrect
FireBoss478-academy@webshell:~$ python3 level3.py 
Please enter correct password for flag: 865e
Welcome back... your flag, user:
picoCTF{m45h_fl1ng1ng_2b072a90}
```
Solución:
picoCTF{m45h_fl1ng1ng_2b072a90}
## Notas adicionales
## Referencias

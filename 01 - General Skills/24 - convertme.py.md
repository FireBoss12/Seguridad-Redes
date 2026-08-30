## Descripción
Run the Python script and convert the given number from decimal to binary to get the flag.

[Download Python script](https://artifacts.picoctf.net/c/22/convertme.py)
## Solución
Descargamos el archivo .py
```
FireBoss478-academy@webshell:~$ wget https://artifacts.picoctf.net/c/22/convertme.py
```
Ejecutamos el archivo:
```
FireBoss478-academy@webshell:~$ python3 convertme.py 
```
Nos pedirá convertir un número decimal a binario, lo convertimos, damos la respuesta y nos dará la bandera
```
If 56 is in decimal base, what is it in binary base?
Answer: 00111000
That is correct! Here's your flag: picoCTF{4ll_y0ur_b4535_762f748e}
```
Solución: 
picoCTF{4ll_y0ur_b4535_762f748e}
## Notas adicionales

## Referencias
https://gchq.github.io/CyberChef/#recipe=From_Decimal('Space',false)To_Binary('Space',8)&input=NTY
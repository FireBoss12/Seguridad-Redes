## Descripción
Our flag printing service has started glitching!
## Solución
- Entramos al servidor con nc:
```
FireBoss478-academy@webshell:~$ nc saturn.picoctf.net 63903
```
- Entramos a python:
```
FireBoss478-academy@webshell:~$ python
```
- Ponemos lo que nos dió el servidor:
```
>>> 'picoCTF{gl17ch_m3_n07_' + chr(0x62) + chr(0x64) + chr(0x61) + chr(0x36) + chr(0x38) + chr(0x66) + chr(0x37) + chr(0x35) + '}'
```
Solución: 
picoCTF{gl17ch_m3_n07_bda68f75}
## Notas adicionales
## Referencias
- https://webshell.cylabacademy.org/

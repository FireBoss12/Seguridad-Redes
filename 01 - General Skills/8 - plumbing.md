## Descripción
Sometimes you need to handle process data outside of a file. Can you find a way to keep the output from this program and search for the flag?
## Solución
- Pimero guardamos todo en un archivo llamado "hola":
```
FireBoss478-academy@webshell:~$ nc fickle-tempest.picoctf.net 51559 > hola
```
- Ahora usamos la función cat para buscar "pico":
```
FireBoss478-academy@webshell:~$ cat hola | grep pico
```
Solución: 
- picoCTF{digital_plumb3r_A01Bc3eC}
## Notas adicionales
## Referencias
- https://webshell.cylabacademy.org/
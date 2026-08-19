## Descripción
Can you find the flag in the file? This would be really tedious to look through manually, something tells me there is a better way.
## Solución
- Primero descargué el archivo 
```
FireBoss478-academy@webshell:~$ wget https://challenge-files.picoctf.net/c_fickle_tempest/92807684f3e52665caaf90d69e1e661f990b8731b2f8005e18631be23ff991bb/file
```
- Después utilicé el grep
```
FireBoss478-academy@webshell:~$ cat file | grep pico
```
Solución:
picoCTF{grep_is_good_to_find_things_eb80073D}
## Notas adicionales
## Referencias
- https://webshell.cylabacademy.org/
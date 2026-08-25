## Descripción
Unzip this archive and find the flag.

- [Download zip file](https://artifacts.picoctf.net/c/505/big-zip-files.zip)
## Solución
Primero descargamos y descomprimimos el archivo .zip
```
wget https://artifacts.picoctf.net/c/505/big-zip-files.zip
unzip big-zip-files.zip
```
Después vemos qué carpeta nos creó
```
FireBoss478-academy@webshell:~$ ls
big-zip-files  big-zip-files.zip
```
Usamos el comando grep -r para que busque la bandera en su carpeta y en sus subcarpetas
```
FireBoss478-academy@webshell:~$ cat big-zip-files | grep -r pico
```
Solución: picoCTF{gr3p_15_m4g1c_ef8790dc}
## Notas adicionales
grep -r - Busca en todas las carpetas y subcarpetas
## Referencias
- Usé información de ChatGPT para el comando -r

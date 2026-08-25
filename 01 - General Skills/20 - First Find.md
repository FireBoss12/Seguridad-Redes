## Descripción
Unzip this archive and find the file named 'uber-secret.txt'

- [Download zip file](https://artifacts.picoctf.net/c/501/files.zip)
## Solución
Primero descargamos y descomprimimos el .zip
```
wget https://artifacts.picoctf.net/c/501/files.zip
unzip files.zip
```
Después usamos el comando find para buscar el nombre del archivo
```
FireBoss478-academy@webshell:~$ find . -name "uber-secret.txt"
./files/adequate_books/more_books/.secret/deeper_secrets/deepest_secrets/uber-secret.txt
```
Por último, filtramos con un cat
```
FireBoss478-academy@webshell:~$ cat $(find . -name "uber-secret.txt")
```
Solución: picoCTF{f1nd_15_f457_ab443fd1}
## Notas adicionales
- find - Sirve para buscar archivos y directorios dentro de una ruta y sus subdirectorios
- grep = busca texto dentro de archivos 
- . = desde la carpeta actual.  
- -name = buscar por nombre.  
## Referencias

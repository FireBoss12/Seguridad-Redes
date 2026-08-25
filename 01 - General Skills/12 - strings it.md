## Descripción
Can you find the flag in [file](https://challenge-files.picoctf.net/c_fickle_tempest/a35dc624cfda858ed12a4bce57f832dad3b433bad6cde2b98e25fae4bc8ff760/strings) without running it?
## Solución
Primero descargar el archivo 
```
wget https://challenge-files.picoctf.net/c_fickle_tempest/a35dc624cfda858ed12a4bce57f832dad3b433bad6cde2b98e25fae4bc8ff760/strings
```
Después le damos permisos de moderador al archivo
```
chmod +x strings
```
Después utilizar el comando strings al ejecutar el archivo y filtrar la "flag"
```
strings ./strings | grep "picoCTF"
```
## Notas adicionales
- strings - muestra las cadenas (caracteres imprimibles) en un archivo binario (no texto)
## Referencias
- manual strings
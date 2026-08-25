## Descripción
Can you invoke help flags for a tool or binary? This program has extraordinarily helpful information...
## Solución
Primero descargamos el programa
```
wget https://challenge-files.picoctf.net/c_wily_courier/5a478d0b24d6a4f4185e3adb7a78c41cdad626fb02fe80e083dc33bf8b197d3d/warm
```
Después le damos permisos de moderador para poder ejecutarlo
```
chmod +x warm
```
Ejecutamos con -h para que nos dé la bandera
 ```
 ./warm -h
 ```
## Notas adicionales
chmod +x - agrega permisos de ejecución a un binario en linux
./warm - ejecuta el binario warm una vez que ya tiene los permisos de ejecución
ELF - Es el formato de archuvo ejecutable en Linux (equivalente al .EXE de Windows)
file - permite saber de que tipo es un archivo
## Referencias

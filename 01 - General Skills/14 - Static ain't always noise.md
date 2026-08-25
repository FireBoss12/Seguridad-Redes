## Descripción
Can you look at the data in this binary? The bash script might help!
## Solución
Descargamos los archivos:
```
wget https://challenge-files.picoctf.net/c_wily_courier/a7a487d82414dabf57a3ec5db604ae18c17b11406225839247539d5edb709957/static

wget https://challenge-files.picoctf.net/c_wily_courier/a7a487d82414dabf57a3ec5db604ae18c17b11406225839247539d5edb709957/ltdis.sh
```
Le damos permisos al *.sh*:
```
chmod +x ltdis.sh
```
Al ejecutarlo le damos el otro archivo:
```
./ltdis.sh static
```
Nos creará otro archivo automáticamente y a ese archivo lo filtramos para sacar la bandera:
```
cat static.ltdis.strings.txt | grep pico
```
Solución:
picoCTF{d15a5m_t34s3r_20335e41}

## Notas adicionales
- *.sh* -  son archivos que contienen comandos de linux agrupados, se les llama scripts de bash
## Referencias
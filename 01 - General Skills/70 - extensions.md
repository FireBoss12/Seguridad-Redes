## Descripción
This is a really weird text file. Can you find the flag? Get the flag from [TXT](https://challenge-files.cylabacademy.net/library/a5d365fedad883763fb28c78e25a1765220bef6501848c84f2a7a7adf74d83cd/flag.txt).
## Solución
````
Primero se revisaron los primeros bytes del archivo con Python:

```cmd
python -c "print(open('flag.txt','rb').read(16).hex(' '))"
````
El resultado comenzó con:

```
89 50 4e 47
```

Estos bytes corresponden a la firma o **magic bytes** de un archivo PNG.

Por lo tanto, aunque el archivo se llama:

```
flag.txt
```
Se cambia la extensión:

```
flag.txt
```

por:

```
flag.png
```

Después se abre la imagen para visualizar la flag.
en realidad es una imagen PNG.
Solución:
academy{now_you_know_about_extensions}
## Notas adicionales
- La extensión de un archivo no siempre representa su tipo real.
- Los sistemas y herramientas pueden identificar archivos mediante su firma interna.
- Estas firmas se conocen como **magic bytes**.
- La firma típica de un PNG comienza con:

```
89 50 4E 47 0D 0A 1A 0A
```
- Cambiar únicamente la extensión no modifica el contenido del archivo.
- En retos forenses es útil revisar primero los primeros bytes para identificar el formato real.
## Referencias
- CyLab Academy — archivo proporcionado en el reto.
- PNG Specification — firma estándar de archivos PNG.
- Magic Bytes / File Signatures — identificadores usados para reconocer el tipo real de un archivo.
## Descripción
This file contains more than it seems. Get the flag from [garden.jpg](https://challenge-files.cylabacademy.net/library/29dc79fc1e76c1c4f57311a5649e686a42aee58e6b401e81acd7daef441459c1/garden.jpg).
## Solución
Primero se descarga el archivo `garden.jpg` y se analiza buscando cadenas de texto que puedan estar almacenadas dentro del archivo.
Como Windows no incluye el comando `strings` de forma predeterminada, también se puede utilizar Python:

```cmd
python -c "import re; data=open('garden.jpg','rb').read(); print('\n'.join(x.decode('ascii','ignore') for x in re.findall(rb'[\x20-\x7e]{20,}',data)))"
```

Al revisar las cadenas encontradas dentro de la imagen aparece directamente la flag:

```text
academy{more_than_m33ts_the_3y3ee53c6bc}
```

Solución: 
academy{more_than_m33ts_the_3y3ee53c6bc}
## Notas adicionales
- Una imagen puede contener información que no es visible al abrirla normalmente.

- Los archivos JPG pueden incluir metadatos, comentarios o datos adicionales.

- `strings` permite buscar secuencias de caracteres legibles dentro de archivos binarios.

- Antes de intentar técnicas de esteganografía más complejas, conviene revisar primero las cadenas de texto y los metadatos del archivo.

- Otras herramientas útiles para este tipo de retos son `exiftool`, `binwalk` y `steghide`.
## Referencias
- CyLab Academy — archivo proporcionado en el reto.

- Linux `strings` — herramienta para localizar cadenas de texto imprimibles dentro de archivos binarios.

- ExifTool — herramienta para consultar metadatos de imágenes y otros archivos.

- Binwalk — herramienta para identificar datos y archivos incrustados dentro de otros archivos.
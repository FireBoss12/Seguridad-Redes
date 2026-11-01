## Descripción
Find the flag in this [picture](https://challenge-files.cylabacademy.net/library/a3bb49a714b2015cbba62c5a2db7238a40609a2fbbd7fbe21af7a8f5068cc7b8/pico_img.png).
## Solución
````
Primero se descarga la imagen y se revisan sus metadatos.

Se puede utilizar la herramienta `exiftool`:

```bash
exiftool pico_img.png
````
Al revisar la información del archivo aparece un campo llamado `Artist` que contiene directamente la flag:

```
Artist : academy{s0_m3ta_d5c3711a}
```
Solución:
```
academy{s0_m3ta_d5c3711a}
```
## Notas adicionales
- Los metadatos son información almacenada dentro de un archivo que describe características del mismo.
- En una imagen pueden existir campos como:
    - `Artist`
    - `Author`
    - `Comment`
    - `Software`
    - `Description`
    - Fecha de creación
- Esta información no necesariamente es visible al abrir normalmente la imagen.
- `exiftool` es una herramienta muy útil en retos CTF para revisar metadatos.
- Las pistas del reto apuntaban directamente a revisar este tipo de información antes de intentar técnicas más complejas de esteganografía.
## Referencias
- CyLab Academy — archivo proporcionado en el reto.
- ExifTool — herramienta para leer y modificar metadatos de archivos.
- Metadata — información descriptiva almacenada dentro de un archivo.
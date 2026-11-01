## Descripción

Encontrar la flag en una imagen de disco construyendo una línea temporal MAC y envolver el resultado en `academy{}`.

## Solución

1. Descargar el archivo original indicado en las referencias y descomprimirlo (`partition4.img.gz` → `partition4.img`, sistema de archivos ext4).

2. Las pistas señalan crear una línea temporal MAC y buscar marcas de tiempo muy antiguas. El script `timeline-ext.py` recorre ext4 sin montar la imagen: localiza el superbloque, resuelve inodes por grupo, lee bloques directos, indirectos y extents, enumera el árbol de directorios desde el inode raíz (2) y ordena las entradas por su marca de tiempo más temprana.

3. Ejecutar el script desde la raíz del repositorio con Python 3:

```sh
python "Segundo Parcial/timeline-ext.py"
```

4. La entrada más antigua es `/bin/bcab`, inode 4945, con un timestamp anómalo del **1 de enero de 1985, 17:00 UTC**. Su contenido es la cadena Base64 `NzFtMzExbjNfMHU3MTEzcl9oM3JfNDNhMmU3YWYK`. Decodificarla y envolver el resultado, sin salto de línea, en `academy{}`:

```python
import base64
cuerpo = base64.b64decode("NzFtMzExbjNfMHU3MTEzcl9oM3JfNDNhMmU3YWYK").decode().strip()
print(f"academy{{{cuerpo}}}")
# academy{71m311n3_0u7113r_h3r_43a2e7af}
```

5. La bandera recuperada:

```text
academy{71m311n3_0u7113r_h3r_43a2e7af}
```

6. Introducir la bandera en CyLab Security Academy. **Fue aceptada** y se observó `Challenge solved!` el **31 de octubre de 2026**.

## Notas adicionales

El dato clave es que la marca de tiempo del archivo malicioso es un valor atípico (muy anterior al resto), lo que lo hace visible al ordenar la línea temporal. El análisis se hizo leyendo la estructura ext4 directamente, sin montar la imagen ni requerir privilegios. La imagen de disco se descarga desde su enlace y no se incorpora al repositorio.

## Referencias

- [Timeline 0 — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13494/720)
- [partition4.img.gz](https://challenge-files.cylabacademy.net/library/bf9a20c350075c5863371e078daee1d570d4062902edc8a4a042e02a7cebf161/partition4.img.gz)

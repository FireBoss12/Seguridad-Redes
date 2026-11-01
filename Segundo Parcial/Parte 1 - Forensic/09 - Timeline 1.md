## Descripción

Encontrar la flag en una imagen de disco revisando la línea temporal de archivos modificados y envolver el resultado en `academy{}`.

## Solución

1. Descargar el archivo original indicado en las referencias y descomprimirlo (`timeline-1-partition4.img.gz` → `timeline-1-partition4.img`, sistema de archivos ext4).

2. A diferencia de Timeline 0, aquí la pista está en las fechas recientes. El mismo script `timeline-ext.py` enumera los inodes y ordena las entradas; revisando las modificaciones más recientes destaca `/etc/chat`, inode 32716, modificado el **1 de diciembre de 2025, 21:50:07 UTC**.

3. Ejecutar el script desde la raíz del repositorio con Python 3:

```sh
python "Segundo Parcial/timeline-ext.py"
```

4. El contenido de `/etc/chat` es la cadena Base64 `NTczNDE3aDEzcl83aDRuXzdoM18xNDU3XzU4NTI3YmIyMjIK`. Decodificarla y envolver el resultado, sin salto de línea, en `academy{}`:

```python
import base64
cuerpo = base64.b64decode("NTczNDE3aDEzcl83aDRuXzdoM18xNDU3XzU4NTI3YmIyMjIK").decode().strip()
print(f"academy{{{cuerpo}}}")
# academy{573417h13r_7h4n_7h3_1457_58527bb222}
```

5. La bandera recuperada:

```text
academy{573417h13r_7h4n_7h3_1457_58527bb222}
```

6. Introducir la bandera en CyLab Security Academy. **Fue aceptada** y se observó `Challenge solved!` el **31 de octubre de 2026**.

## Notas adicionales

El nombre del reto y su flag aluden a que el archivo buscado es *más reciente* que el resto (*statehier than the last*): en lugar de un valor atípico antiguo, aquí se ordena por fecha de modificación descendente para encontrar la última escritura. La imagen de disco se descarga desde su enlace y no se incorpora al repositorio.

## Referencias

- [Timeline 1 — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13494/721)
- [timeline-1-partition4.img.gz](https://challenge-files.cylabacademy.net/library/0b369ed5974a5e777ca3bc323bd39d75a6f27762a449d16cd2a0ffc08b2a6aa8/timeline-1-partition4.img.gz)

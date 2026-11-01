## Descripción

Inspeccionar un archivo de registros que contiene un bloque enorme de texto codificado.

## Solución

1. Descargar los archivos originales indicados en las referencias y colocarlos juntos en una carpeta de trabajo.

2. logs.txt contiene datos Base64 en lugar de registros normales. Su decodificación produce un PNG. En la parte inferior de la imagen aparece una cadena hexadecimal.

3. Ejecutar el siguiente código con Python 3 desde esa carpeta:

```python
from pathlib import Path
import base64
Path('recuperada.png').write_bytes(
    base64.b64decode(Path('logs.txt').read_text()))
# Abrir recuperada.png y transcribir la cadena inferior.
hexadecimal = '61636164656D797B666F72656E736963735F616E616C797369735F69735F616D617A696E675F32303433646264317D'
print(bytes.fromhex(hexadecimal).decode())
```

4. El análisis recuperó esta bandera:

```text
academy{forensics_analysis_is_amazing_2043dbd1}
```

5. Introducir la bandera en CyLab Security Academy. **Fue aceptada** y se observó `Challenge solved!` el **31 de octubre de 2026**.

![Imagen recuperada](Evidencias/Flag-in-Flame.png)

## Notas adicionales

Las capas eran Base64 -> imagen PNG -> texto hexadecimal -> bandera. La imagen recuperada empieza con la firma 89 50 4e 47 0d 0a 1a 0a.

## Referencias

- [Flag in Flame — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13494/523)
- [logs.txt](https://challenge-files.cylabacademy.net/library/e6fc51b98dd61381c5cd54dc836c8344fb475f17728f2095969e3a0f401ea195/logs.txt)


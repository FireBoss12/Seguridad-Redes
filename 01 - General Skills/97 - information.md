## Descripción

Los archivos pueden modificarse de forma oculta. Se proporciona `cat.jpg` y se pide encontrar la bandera. Reto de Forensics, dificultad fácil, de picoCTF 2021.

## Solución

1. Descargar `cat.jpg` y revisar los metadatos de la imagen. El campo XMP `cc:license` contiene una cadena Base64:

```text
YWNhZGVteXt0aGVfbTN0YWRhdGFfMXNfbW9kaWZpZWR9
```

2. Leer el campo y decodificarlo. Este código reproduce la extracción realizada, sin necesitar ExifTool:

```python
import base64
import re
from pathlib import Path

datos = Path("cat.jpg").read_bytes()
licencia = re.search(rb"<cc:license rdf:resource='([^']+)'", datos).group(1)
print(base64.b64decode(licencia).decode())
```

3. Copiar la cadena recuperada al campo `Flag` y pulsar `Submit`.

Solución:

```text
academy{the_m3tadata_1s_modified}
```

La bandera fue introducida en la plataforma y aceptada con el mensaje `Correct flag!` el 17 de octubre de 2026.

## Notas adicionales

- La bandera está en los metadatos, no en los píxeles visibles.
- Base64 es una codificación reversible; no es cifrado.
- `exiftool cat.jpg` también permite localizar el campo `License`.

## Referencias

- [information — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13116/186)
- [Archivo original del reto](https://challenge-files.cylabacademy.net/library/c585b4adbdaa06f409db7bf5012c2e58e9aab24669764a5f1cf0f9ce0d60dcfd/cat.jpg)

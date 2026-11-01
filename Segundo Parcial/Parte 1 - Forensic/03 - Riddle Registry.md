## Descripción

Encontrar la flag en los metadatos de un PDF.

## Solución

1. Descargar los archivos originales indicados en las referencias y colocarlos juntos en una carpeta de trabajo.

2. El enunciado indica revisar los metadatos del PDF. El campo Author contiene una cadena Base64, que se decodifica para recuperar la bandera.

3. Ejecutar el siguiente código con Python 3 desde esa carpeta:

```python
from pypdf import PdfReader
import base64
meta = PdfReader('confidential.pdf').metadata
print(meta)
print(base64.b64decode(meta['/Author']).decode())
```

4. El análisis recuperó esta bandera:

```text
academy{puzzl3d_m3tadata_f0und!_2d947385}
```

5. Introducir la bandera en CyLab Security Academy. **Fue aceptada** y se observó `Challenge solved!` el **31 de octubre de 2026**.

## Notas adicionales

El campo Author era YWNhZGVteXtwdXp6bDNkX20zdGFkYXRhX2YwdW5kIV8yZDk0NzM4NX0=. Base64 es una codificación, no un cifrado. Se utilizó pypdf para leer los metadatos.

## Referencias

- [Riddle Registry — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13494/530)
- [confidential.pdf](https://challenge-files.cylabacademy.net/library/ceb9652e54e6e40458e46a4c7bb96b66980ccd362a7945217cba574db7b7ea0b/confidential.pdf)

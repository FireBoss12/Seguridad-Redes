## Descripción

Encontrar información oculta en el archivo `unknown.zip`. Reto de Forensics, dificultad fácil, de picoCTF 2024.

## Solución

1. Descargar `unknown.zip`. Dentro se encuentra `ukn_reality.jpg`.

2. Revisar los metadatos XMP. El campo `cc:attributionURL` contiene:

```text
YWNhZGVteXtNRTc0RDQ3QV9ISUREM05fYWViZThjMGZ9Cg==
```

3. Extraer el campo y decodificarlo con Base64:

```python
import base64
import re
from zipfile import ZipFile

with ZipFile("unknown.zip") as archivo:
    datos = archivo.read("ukn_reality.jpg")

valor = re.search(rb"<cc:attributionURL rdf:resource='([^']+)'", datos).group(1)
print(base64.b64decode(valor).decode().strip())
```

4. Enviar el texto recuperado, sin el salto de línea final. La plataforma acepta la bandera.

Solución:

```text
academy{ME74D47A_HIDD3N_aebe8c0f}
```

La bandera fue introducida en la plataforma y aceptada con el mensaje `Correct flag!` el 17 de octubre de 2026.

## Notas adicionales

- Revisar únicamente EXIF puede pasar por alto los metadatos XMP.
- Aunque el campo se llama `Attribution URL`, en este archivo guarda Base64, no una dirección web.
- Base64 no requiere una clave para recuperar el texto.

## Referencias

- [CanYouSee — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13116/408)
- [Archivo original del reto](https://challenge-files.cylabacademy.net/library/26d33b97d1745fc99c1cf94e3783a3dc963b8b667ca6960ebfce48aa9909251c/unknown.zip)

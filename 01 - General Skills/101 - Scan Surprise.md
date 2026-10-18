## Descripción

El autor entrega la bandera como imagen en lugar de texto. Se proporciona `challenge.zip`. Reto de Forensics, dificultad fácil, de picoCTF 2024.

## Solución

1. Descargar `challenge.zip` y revisar su contenido. Incluye `home/ctf-player/drop-in/flag.png`.

2. Extraer la imagen. Contiene un código QR. Se utilizó ZXing para leerlo localmente:

```python
from pathlib import Path
from zipfile import ZipFile
from PIL import Image
import zxingcpp

with ZipFile("challenge.zip") as archivo:
    Path("scan-flag.png").write_bytes(
        archivo.read("home/ctf-player/drop-in/flag.png")
    )

imagen = Image.open("scan-flag.png").convert("RGBA")
resultado = zxingcpp.read_barcode(imagen)
if resultado is None:
    raise RuntimeError("No se pudo leer el QR")
print(resultado.text)
```

3. El lector devuelve directamente una bandera. Introducirla en la plataforma y comprobar que el reto cambia a `Solved`.

Solución:

```text
academy{p33k_@_b00_ebb7f3f7}
```

La bandera fue introducida en la plataforma y aceptada con el mensaje `Correct flag!` el 17 de octubre de 2026.

## Notas adicionales

- El QR almacena el texto de la bandera.
- No fue necesario iniciar la instancia: el archivo descargable contiene la imagen.
- Dependencias: `python -m pip install pillow zxing-cpp`.

## Referencias

- [Scan Surprise — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13116/444)
- [Archivo original del reto](https://challenge-files.cylabacademy.net/library/2ec57d777f5f27f3b32ce12fb8437359ea4c9b6429f8adaf6f7d428653adc865/challenge.zip)

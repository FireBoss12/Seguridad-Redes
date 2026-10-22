## Descripción

Reto de criptografía de dificultad media de picoCTF 2021, creado por Sara. Se proporcionan dos imágenes aparentemente mezcladas y se pide recuperar la flag combinándolas.

Archivos: [scrambled1.png](https://challenge-files.cylabacademy.net/library/fa686cfe375627b0131e670a19ec4775a873562ee3006dae8a40796e3e2b5e3c/scrambled1.png) y [scrambled2.png](https://challenge-files.cylabacademy.net/library/fa686cfe375627b0131e670a19ec4775a873562ee3006dae8a40796e3e2b5e3c/scrambled2.png).

## Solución

1. Descargar las dos imágenes y colocarlas en la misma carpeta. Ambas tienen dimensiones de 256 × 256 píxeles.

2. Convertirlas a RGB y obtener sus matrices de píxeles con NumPy.

3. Sumar los canales de ambas matrices, aplicar módulo 256 y convertir el resultado a `uint8` antes de generar la imagen.

Guardar el siguiente código como `exp.py`:

```python
from PIL import Image
import numpy as np

imagen1 = Image.open("scrambled1.png").convert("RGB")
imagen2 = Image.open("scrambled2.png").convert("RGB")

matriz1 = np.array(imagen1, dtype=np.uint16)
matriz2 = np.array(imagen2, dtype=np.uint16)
assert matriz1.shape == matriz2.shape

resultado = ((matriz1 + matriz2) % 256).astype(np.uint8)
Image.fromarray(resultado).save("flag.png")
print("Imagen recuperada: flag.png")
```

4. Ejecutar el script y abrir la imagen recuperada:

```bash
python3 exp.py
xdg-open flag.png
```

5. Leer la flag que aparece en la imagen:

```text
academy{2f16d0c4}
```

La suma modular se reprodujo con los dos archivos originales y se comprobó visualmente la flag el 21 de octubre de 2026.

## Notas adicionales

- El error `TypeError: Cannot handle this data type: (1, 1, 3), <i8` apareció al intentar crear una imagen RGB directamente desde una matriz de enteros `int64`.
- La conversión final con `astype(np.uint8)` proporciona a Pillow el tipo de datos adecuado para los canales de color.
- Se utiliza `uint16` durante la suma para representar valores de hasta 510 antes de aplicar módulo 256.
- En Ubuntu se ejecutó `python3 exp.py`, ya que el comando `python` no estaba disponible.
- Se necesitan Pillow y NumPy. La operación que recupera esta imagen es la suma modular de píxeles.

## Referencias

- [Conversación sobre el código y el error de Pillow](https://chatgpt.com/share/6ad8eac6-ca28-83e8-b5a0-4e8f2fe457bd)
- [Registro del reto y flag proporcionada](https://chatgpt.com/share/6ad8f2fc-e384-83e8-8820-5eea40621d6b)
- [scrambled1.png](https://challenge-files.cylabacademy.net/library/fa686cfe375627b0131e670a19ec4775a873562ee3006dae8a40796e3e2b5e3c/scrambled1.png)
- [scrambled2.png](https://challenge-files.cylabacademy.net/library/fa686cfe375627b0131e670a19ec4775a873562ee3006dae8a40796e3e2b5e3c/scrambled2.png)

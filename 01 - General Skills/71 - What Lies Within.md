## Descripción
There's something in the [building](https://challenge-files.cylabacademy.net/library/5235bfccd8f3cc2d059ee828f774846542f28f7ec66cb4f0c6ceb536c38026d4/buildings.png). Can you retrieve the flag?
## Solución
````
Este reto utiliza una técnica de esteganografía conocida como **LSB (Least Significant Bit)**.

La idea consiste en revisar el bit menos significativo de los canales de color de cada píxel de la imagen, ya que esos bits pueden modificarse sin alterar visualmente la imagen de forma perceptible.

Como no se utilizó `zsteg`, se hizo el análisis con Python y la librería Pillow.

Primero se instala Pillow:

```cmd
pip install pillow
````

Después se crea un archivo llamado:

```
lsb.py
```

con el siguiente código:

```
from PIL import Imageimg = Image.open("buildings.png").convert("RGB")bits = []for y in range(img.height):    for x in range(img.width):        r, g, b = img.getpixel((x, y))        bits.append(r & 1)        bits.append(g & 1)        bits.append(b & 1)data = bytearray()for i in range(0, len(bits) - 7, 8):    value = 0    for bit in bits[i:i+8]:        value = (value << 1) | bit    data.append(value)if b"academy{" in data:    inicio = data.index(b"academy{")    fin = data.find(b"}", inicio)    print(data[inicio:fin+1].decode())else:    print("No se encontró la flag")
```

Luego se ejecuta:

```
python lsb.py
```

El programa recorre los píxeles de la imagen, obtiene los bits menos significativos de los canales RGB y reconstruye la información oculta hasta encontrar la flag.

Solución: 
academy{h1d1ng_1n_th3_b1t5}
## Notas adicionales
- **LSB** significa _Least Significant Bit_.
- Esta técnica permite ocultar información modificando los bits menos importantes de los valores de color.
- Los cambios realizados en estos bits son prácticamente imperceptibles visualmente.
- Es una técnica común de esteganografía en retos CTF.
- En imágenes RGB se pueden utilizar los canales rojo, verde y azul para almacenar información.
- Herramientas como `zsteg` automatizan este análisis, especialmente en imágenes PNG y BMP.
- Python también puede utilizarse para extraer manualmente los bits ocultos.
## Referencias
- yLab Academy — archivo proporcionado en el reto.
- Pillow — librería de Python para procesamiento de imágenes.
- LSB Steganography — técnica de ocultamiento de información utilizando el bit menos significativo.
- zsteg — herramienta utilizada para detectar datos ocultos en imágenes PNG y BMP.
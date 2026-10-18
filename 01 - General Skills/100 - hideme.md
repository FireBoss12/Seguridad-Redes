## Descripción

Un analista SOC investiga una imagen enviada entre dos personas y sospecha que contiene información adicional. Se proporciona `flag.png`. Reto de Forensics, dificultad media, de picoCTF 2023.

## Solución

1. Descargar el `flag.png` de este reto. No confundirlo con imágenes de otros ejercicios que tengan el mismo nombre.

2. Abrir el archivo como ZIP mediante la biblioteca estándar de Python. El PNG contiene un ZIP añadido al final:

```python
from pathlib import Path
from zipfile import ZipFile

with ZipFile("flag.png") as archivo:
    print(archivo.namelist())
    Path("flag-extraida.png").write_bytes(archivo.read("secret/flag.png"))
```

3. El listado contiene `secret/` y `secret/flag.png`. Abrir `flag-extraida.png`: la bandera aparece escrita dentro de esa imagen.

4. Transcribir respetando mayúsculas, números y el carácter `@`. Enviar la bandera y comprobar su aceptación.

Solución:

```text
academy{Hiddinng_An_imag3_within_@n_ima9e_825f5c50}
```

La bandera fue introducida en la plataforma y aceptada con el mensaje `Correct flag!` el 17 de octubre de 2026.

## Notas adicionales

- La bandera se conserva tal como aparece: `Hiddinng` contiene dos letras `n` consecutivas.
- Un visor de imágenes puede ignorar los datos añadidos después del contenido PNG.
- `ZipFile` permite leer el ZIP aunque tenga datos de otro formato antes de sus estructuras. No fue necesario ejecutar archivos extraídos.

## Referencias

- [hideme — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13116/350)
- [Archivo original del reto](https://challenge-files.cylabacademy.net/library/67c9b3d090b9350d803c4307cde67459f2c34f853bcd8bf859c5ed1d9b3f0e74/flag.png)

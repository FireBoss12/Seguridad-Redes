## Descripción

El NOC detectó un archivo cuya identificación de formato es contradictoria. Se debe extraer toda la información del archivo sospechoso. Reto de Forensics, dificultad fácil, de picoCTF 2024.

## Solución

1. Descargar `flag2of2-final.pdf` y revisar los primeros bytes. El archivo empieza con la firma PNG `89 50 4e 47 0d 0a 1a 0a`, aunque su extensión es `.pdf`. La cabecera `%PDF` aparece en el desplazamiento 453.

2. Interpretar el archivo como imagen y guardar una copia PNG. La imagen muestra la primera parte de la bandera:

```python
from PIL import Image

Image.open("flag2of2-final.pdf").save("parte-imagen.png")
```

```text
academy{f1u3n7_
```

3. Leer el mismo archivo como PDF para obtener la segunda parte:

```python
from pypdf import PdfReader

for pagina in PdfReader("flag2of2-final.pdf").pages:
    print(pagina.extract_text())
```

```text
1n_pn9_&_pdf_96385309}
```

4. Unir ambas partes en ese orden, sin espacios ni saltos de línea. Enviar la bandera completa y comprobar su aceptación.

Solución:

```text
academy{f1u3n7_1n_pn9_&_pdf_96385309}
```

La bandera fue introducida en la plataforma y aceptada con el mensaje `Correct flag!` el 17 de octubre de 2026.

## Notas adicionales

- Un archivo políglota puede ser interpretado por programas de más de un formato.
- La extensión no determina por sí sola el tipo real del archivo.
- `pypdf` advierte sobre la cabecera y el puntero de referencias, pero recupera el texto.
- Dependencias: `python -m pip install pillow pypdf`.

## Referencias

- [Secret of the Polyglot — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13116/423)
- [Archivo original del reto](https://challenge-files.cylabacademy.net/library/fbc63a04a60481fd928460868dee05e60ab0bcdf6582dc786ddf1f1cec3f8c8b/flag2of2-final.pdf)

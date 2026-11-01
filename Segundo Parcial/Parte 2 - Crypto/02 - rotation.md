## Descripción

Descifrar el archivo proporcionado para encontrar la flag.

## Solución

1. Descargar los archivos originales indicados en las referencias y colocarlos juntos en una carpeta de trabajo.

2. Se probaron los 26 desplazamientos del alfabeto. El desplazamiento +18 produjo el prefijo academy y texto coherente.

3. Ejecutar el siguiente código con Python 3 desde esa carpeta:

```python
from pathlib import Path
texto = Path('encrypted.txt').read_text().strip()
for shift in range(26):
    salida = ''
    for c in texto:
        if c.isascii() and c.isalpha():
            inicio = ord('A') if c.isupper() else ord('a')
            c = chr(inicio + (ord(c)-inicio+shift) % 26)
        salida += c
    if 'academy{' in salida:
        print(shift, salida)
```

4. El análisis recuperó esta bandera:

```text
academy{r0tat1on_d3crypt3d_69e10560}
```

5. Introducir la bandera en CyLab Security Academy. **Fue aceptada** y se observó `Challenge solved!` el **31 de octubre de 2026**.

## Notas adicionales

Los números, llaves y guiones bajos permanecen iguales. El texto original empezaba con ikilmug{ y el desplazamiento +18 equivale a -8.

## Referencias

- [rotation — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13495/373)
- [encrypted.txt](https://challenge-files.cylabacademy.net/library/87b38d23d72ad6f1aa572b3fb1ba217ddb7476a432e8810b51a3ff40caad8ac1/encrypted.txt)

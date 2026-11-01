## Descripción

Buscar información oculta dentro de un archivo de texto voluminoso.

## Solución

1. Descargar los archivos originales indicados en las referencias y colocarlos juntos en una carpeta de trabajo.

2. El archivo anthem.flag.txt contiene un texto largo. Buscar el patrón de bandera permite localizarla sin leer todo el documento.

3. Ejecutar el siguiente código con Python 3 desde esa carpeta:

```python
from pathlib import Path
import re
texto = Path('anthem.flag.txt').read_text(encoding='utf-8')
print(re.search(r'academy\{[^}]+\}', texto).group())
```

4. El análisis recuperó esta bandera:

```text
academy{gr3p_15_@w3s0m3_c16b6693}
```

5. Introducir la bandera en CyLab Security Academy. **Fue aceptada** y se observó `Challenge solved!` el **31 de octubre de 2026**.

## Notas adicionales

Una búsqueda por patrón es suficiente cuando la información está en texto plano. No es necesario modificar el archivo.

## Referencias

- [Lookey here — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13494/279)
- [anthem.flag.txt](https://challenge-files.cylabacademy.net/library/764d21f0248d7c1df55583eb1ad863dad241f86f90dd2717e8aa5b9fc3a7e26e/anthem.flag.txt)

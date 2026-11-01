## Descripción

Aplicar módulo 41 a cada número y calcular su inverso modular. Mapear 1–26 a A–Z, 27–36 a 0–9 y 37 a guion bajo; envolver en academy{}.

## Solución

1. Descargar los archivos originales indicados en las referencias y colocarlos juntos en una carpeta de trabajo.

2. Se redujo cada número módulo 41, se calculó su inverso modular y se aplicó el alfabeto indicado por el reto.

3. Ejecutar el siguiente código con Python 3 desde esa carpeta:

```python
from pathlib import Path
alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_'
numeros = map(int, Path('message.txt').read_text().split())
texto = ''.join(alfabeto[pow(n % 41, -1, 41)-1] for n in numeros)
print('academy{' + texto + '}')
```

4. El análisis recuperó esta bandera:

```text
academy{1NV3R53LY_H4RD_FED0A735}
```

5. Introducir la bandera en CyLab Security Academy. **Fue aceptada** y se observó `Challenge solved!` el **31 de octubre de 2026**.

## Notas adicionales

Se utiliza el inverso multiplicativo, no el negativo del número. Los valores 1–26 corresponden a letras, 27–36 a dígitos y 37 al guion bajo.

## Referencias

- [basic-mod2 — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13495/254)
- [message.txt](https://challenge-files.cylabacademy.net/library/79ab2df83c3efdaa68f8d1d7b4ce3e478bd49e8193ca7002a30ea460743c412c/message.txt)

## Descripción

**substitution2**, reto de criptografía de picoCTF 2022, creado por Will Hong.

Se proporciona otro mensaje por sustitución monoalfabética, esta vez sin espacios ni puntuación en el cuerpo. Deben reconocerse patrones y reconstruirse las correspondencias entre letras.

## Solución

1. Descargar `message.txt` y analizar las letras repetidas y las estructuras del mensaje.

2. Reconocer el inicio `thereexistseveralotherwellestablishedhighschoolcomputersecuritycompetitions` y patrones repetidos del texto. Se completaron las correspondencias con palabras como `focus`, `skills` y `techniques`, además del prefijo de la flag.

3. Utilizar la siguiente tabla, recuperada para todos los caracteres alfabéticos presentes en este archivo:

```python
from pathlib import Path
import re
import string

cifrado = Path("message.txt").read_text()
alfabeto_cifrado = "abcefghijklmnoprstuvwxyz"
alfabeto_claro = "nyhcqixfmwelvdoargsubtpk"
assert set(c.lower() for c in cifrado if c in string.ascii_letters) <= set(alfabeto_cifrado)
tabla = str.maketrans(
    alfabeto_cifrado + alfabeto_cifrado.upper(),
    alfabeto_claro + alfabeto_claro.upper()
)
texto = cifrado.translate(tabla)
print(texto)
print(re.search(r"academy\{[^}]+\}", texto).group())
```

Solución:

```text
academy{N6R4M_4N41Y515_15_73D10U5_FD56C357}
```

La bandera se introdujo en CyLab y fue aceptada el **24 de octubre de 2026**. La plataforma la registró como **Solved late**, ya que la tarea estaba cerrada.

## Notas adicionales

- Cada letra cifrada conserva la misma equivalencia a lo largo del mensaje.
- La tabla documentada cubre los caracteres que aparecen en este archivo y mantiene su capitalización.
- Los números y signos de la flag permanecen sin cambios.
- El cuerpo del mensaje no contiene espacios: la lectura se reconstruye mediante patrones y contexto, sin modificar el resultado de la sustitución.

## Referencias

- [substitution2 — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13441/309)
- [Archivo original del reto](https://challenge-files.cylabacademy.net/library/750a77d87fa924d5ec8a173d7354dd57792a1597cab3d89fa7443608ba0a35e7/message.txt)

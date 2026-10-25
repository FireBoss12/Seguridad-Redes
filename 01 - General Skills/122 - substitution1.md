## Descripción

**substitution1**, reto de criptografía de picoCTF 2022, creado por Will Hong.

Se recibe un segundo mensaje por sustitución monoalfabética. Conserva espacios y puntuación, lo que permite reconocer palabras y completar la tabla de sustitución.

## Solución

1. Descargar `message.txt` y analizar las letras repetidas y las estructuras del mensaje.

2. Reconocer la estructura inicial `CTFs (short for capture the flag)` y palabras como `computer security competition`. Los espacios y la puntuación ayudan a identificar las correspondencias. La palabra `FR3QU3NCY` de la flag permite completar la equivalencia restante.

3. Utilizar la siguiente tabla, recuperada para todos los caracteres alfabéticos presentes en este archivo:

```python
from pathlib import Path
import re
import string

cifrado = Path("message.txt").read_text()
alfabeto_cifrado = "abcdefghijklmnoqsuvwxyz"
alfabeto_claro = "uagteyqwnromicbflkdpvsh"
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
academy{FR3QU3NCY_4774CK5_4R3_C001_26A742EB}
```

La bandera se introdujo en CyLab y fue aceptada el **24 de octubre de 2026**. La plataforma la registró como **Solved late**, ya que la tarea estaba cerrada.

## Notas adicionales

- Cada letra cifrada conserva la misma equivalencia a lo largo del mensaje.
- La tabla documentada cubre los caracteres que aparecen en este archivo y mantiene su capitalización.
- Los números y signos de la flag permanecen sin cambios.

## Referencias

- [substitution1 — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13441/308)
- [Archivo original del reto](https://challenge-files.cylabacademy.net/library/ceba1af4dd4ee542c226922acd536495ebe14c328fb6766ae3244de7d7deaa2e/message.txt)

## Descripción

**substitution0**, reto de criptografía de picoCTF 2022, creado por Will Hong.

Un mensaje utiliza sustitución monoalfabética y proporciona al principio la permutación que sirve como clave. Se debe invertir esa correspondencia para leer el texto.

## Solución

1. Descargar `message.txt`. La primera línea contiene esta permutación del alfabeto:

```text
KCXZUNDAOYVRHWLGFSIMQPTEBJ
```

2. Relacionar cada símbolo de esa clave con su posición en `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.

3. Aplicar la tabla inversa al cuerpo del mensaje, respetando mayúsculas y minúsculas:

```python
from pathlib import Path
import re
import string

datos = Path("message.txt").read_text()
clave, _, cifrado = datos.partition("\n")
clave = clave.strip()
assert len(clave) == 26 and len(set(clave)) == 26
tabla = str.maketrans(clave + clave.lower(), string.ascii_uppercase + string.ascii_lowercase)
texto = cifrado.translate(tabla)
print(texto)
print(re.search(r"academy\{[^}]+\}", texto).group())
```

Solución:

```text
academy{5UB5717U710N_3V0LU710N_1DDF0D6C}
```

La bandera se introdujo en CyLab y fue aceptada el **24 de octubre de 2026**. La plataforma la registró como **Solved late**, ya que la tarea estaba cerrada.

## Notas adicionales

- La clave proporcionada corresponde al alfabeto cifrado en el orden de las letras originales.
- Es necesario invertir la correspondencia para descifrar.
- Los números, signos y guiones bajos se conservan.

## Referencias

- [substitution0 — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13441/307)
- [Archivo original del reto](https://challenge-files.cylabacademy.net/library/ba4dc472a6e0784e2ec4ad7184bdbe107b432edfc1464d836433b8eb16279406/message.txt)

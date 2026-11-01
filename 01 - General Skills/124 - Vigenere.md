## Descripción

**Vigenere**, reto de criptografía de picoCTF 2022, creado por Mubarak Mikail.

Se proporciona un mensaje cifrado con Vigenère y la clave `CYLAB`. Se debe recuperar el texto respetando los números y signos del mensaje.

## Solución

1. Descargar `cipher.txt`. La clave proporcionada por el reto es `CYLAB`.

2. Asignar los valores `A = 0, ..., Z = 25` y restar el desplazamiento de la letra correspondiente de la clave, módulo 26.

3. Repetir la clave únicamente sobre las letras. Los números y signos no consumen posiciones de la clave:

```python
from pathlib import Path
import string

cifrado = Path("cipher.txt").read_text().strip()
clave = "CYLAB"
posicion = 0
resultado = []
for caracter in cifrado:
    if caracter in string.ascii_letters:
        base = ord("A") if caracter.isupper() else ord("a")
        desplazamiento = ord(clave[posicion % len(clave)]) - ord("A")
        resultado.append(chr((ord(caracter) - base - desplazamiento) % 26 + base))
        posicion += 1
    else:
        resultado.append(caracter)
print("".join(resultado))
```

Solución:

```text
academy{D0NT_US3_V1G3N3R3_C1PH3R_4a372077}
```

La bandera se introdujo en CyLab y fue aceptada el **24 de octubre de 2026**. La plataforma la registró como **Solved late**, ya que la tarea estaba cerrada.

## Notas adicionales

- La clave de esta versión es `CYLAB`; no se sustituyó por la de versiones antiguas del reto.
- Se respetan las mayúsculas y minúsculas del texto recuperado.
- El índice de la clave avanza solo al procesar letras del alfabeto inglés.

## Referencias

- [Vigenere — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13441/316)
- [Archivo original del reto](https://challenge-files.cylabacademy.net/library/7e1288d31bc6645f95d07bcf09caaf93210591ba082ba0f14490f0767ad7fd33/cipher.txt)

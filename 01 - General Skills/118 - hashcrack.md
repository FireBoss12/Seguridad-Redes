## Descripción

**hashcrack**, reto de criptografía de picoCTF 2025, creado por Nana Ama Atombo-Sackey.

Un servicio solicita recuperar contraseñas a partir de tres hashes. Al responder correctamente las tres rondas, revela una flag.

## Solución

1. Iniciar la instancia y conectarse:

```bash
nc chatelaine.cylabacademy.net 41673
```

2. Recibir cada hash y buscar su contraseña en el diccionario público `100k-most-used-passwords-NCSC.txt` de SecLists, guardado como `passwords-100k.txt`.

3. Comparar los hashes calculados con los recibidos:

```python
from pathlib import Path
import hashlib

objetivos = [('md5', '482c811da5d5b4bc6d497ffa98491e38'), ('sha1', 'b7a875fc1ea228b9061041b7cec4bd3c52ab3ce3'), ('sha256', '916e8c4f79b25028c9e467f1eb8eee6d6bbdff965f9928310ad30a8d88697745')]
palabras = Path("passwords-100k.txt").read_text(encoding="utf-8", errors="replace").splitlines()

for algoritmo, objetivo in objetivos:
    for palabra in palabras:
        if hashlib.new(algoritmo, palabra.encode()).hexdigest() == objetivo:
            print(algoritmo, palabra)
            break
    else:
        raise ValueError("Hash no encontrado en el diccionario")
```

4. Introducir las respuestas en la misma conexión y en este orden:

| Ronda | Algoritmo | Hash recibido | Respuesta |
| --- | --- | --- | --- |
| 1 | `md5` | `482c811da5d5b4bc6d497ffa98491e38` | `password123` |
| 2 | `sha1` | `b7a875fc1ea228b9061041b7cec4bd3c52ab3ce3` | `letmein` |
| 3 | `sha256` | `916e8c4f79b25028c9e467f1eb8eee6d6bbdff965f9928310ad30a8d88697745` | `qwerty098` |

5. Después de la tercera respuesta correcta, el servidor mostró la flag.

Solución:

```text
academy{UseStr0nG_h@shEs_&PaSswDs!_6bbfe014}
```

La bandera se introdujo en CyLab y fue aceptada el **24 de octubre de 2026**. La plataforma la registró como **Solved late**, ya que la tarea estaba cerrada.

## Notas adicionales

- Se comprobaron localmente las tres coincidencias con `hashlib`.
- Un hash no se descifra: se prueban candidatos y se compara el resultado de aplicar la función.
- Las tres respuestas deben enviarse en la misma sesión del servicio.
- El puerto y los hashes pueden cambiar en otra instancia.

## Referencias

- [hashcrack — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13441/475)
- [Diccionario público de SecLists](https://github.com/danielmiessler/SecLists/blob/master/Passwords/Common-Credentials/100k-most-used-passwords-NCSC.txt)

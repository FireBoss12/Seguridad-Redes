## Descripción

**vault-door-5**, reto de ingeniería inversa de picoCTF 2019, creado por Mark E. Haase. Dificultad: **media**.

Esta puerta utiliza codificación URL y Base64 para comprobar la contraseña. Se proporciona el archivo `VaultDoor5.java`; hay que invertir las transformaciones para recuperar la entrada original.

## Solución

1. Descargar `VaultDoor5.java` y leer `checkPassword`. Primero convierte los bytes de la contraseña en secuencias `%xx` mediante `urlEncode`, después codifica esa cadena en Base64 y compara el resultado con `expected`.

2. Unir los tres fragmentos de `expected` y decodificarlos de Base64. El resultado contiene los valores hexadecimales de los caracteres en formato URL.

3. Decodificar las secuencias `%xx` para obtener la contraseña. El orden inverso es **Base64 → URL → texto**. Ejecutar este script junto al archivo Java:

```python
from pathlib import Path
import re, base64
from urllib.parse import unquote

source = Path("VaultDoor5.java").read_text()
expression = re.search(r'String expected = (.*?);', source, re.S).group(1)
expected = "".join(re.findall(r'"([^"]*)"', expression))
url_encoded = base64.b64decode(expected).decode("ascii")
password = unquote(url_encoded)
# Reproducir la transformación del Java para comprobar el resultado.
encoded = "".join(f"%{b:2x}" for b in password.encode("ascii"))
assert base64.b64encode(encoded.encode("ascii")).decode() == expected
print("academy{" + password + "}")
```

Solución:

```text
academy{c0nv3rt1ng_fr0m_ba5e_64_92be25f1}
```

4. Introducir la bandera completa en CyLab. Fue aceptada el **26 de octubre de 2026** con estado **Solved**, dentro del plazo de **Reversing 1**.

## Notas adicionales

- Base64 y la codificación URL son representaciones reversibles; no proporcionan cifrado ni requieren una clave.
- El método `urlEncode` del reto convierte todos los bytes a `%xx`, incluso los caracteres que una función URL habitual podría dejar intactos.
- El script vuelve a aplicar las transformaciones originales y comprueba que el resultado coincide exactamente con `expected`.

## Referencias

- [vault-door-5 — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13493/77)
- [Código fuente original: VaultDoor5.java](https://challenge-files.cylabacademy.net/library/f384c32d0f8b5c3fa3ddf3f8480beefce0a3779f84f4439fb4f312f11d85c1c0/VaultDoor5.java)

## Descripción

**vault-door-4**, reto de ingeniería inversa de picoCTF 2019, creado por Mark E. Haase. Dificultad: **media**.

La misión consiste en recuperar la contraseña de una puerta de la bóveda del laboratorio del Dr. Evil. Se proporciona el código fuente `VaultDoor4.java` que valida la entrada.

## Solución

1. Descargar `VaultDoor4.java` desde el enlace del reto y revisar `main` y `checkPassword`. El programa retira `academy{` y la llave final antes de comprobar la contraseña.

2. El arreglo `myBytes` mezcla enteros decimales, hexadecimales (`0x`), octales (cero inicial en Java) y caracteres literales. Se convierte cada elemento a su valor ASCII y se unen los 32 caracteres.

3. Guardar el siguiente script junto al archivo Java y ejecutarlo con Python 3:

```python
from pathlib import Path
import re
source = Path("VaultDoor4.java").read_text()
array = re.search(r'byte\[\] myBytes\s*=\s*\{(.*?)\}', source, re.S).group(1)
values = []
for token in array.split(','):
    token = token.strip()
    if not token:
        continue
    if token.startswith("'"):
        value = ord(token[1])
    elif token.lower().startswith("0x"):
        value = int(token, 16)
    elif token.startswith("0") and len(token) > 1:
        value = int(token, 8)
    else:
        value = int(token, 10)
    values.append(value)
assert len(values) == 32
password = bytes(values).decode("ascii")
assert list(password.encode("ascii")) == values
print("academy{" + password + "}")
```

Solución:

```text
academy{jU5t_4_bUnCh_0f_bYt3s_86c843fd10}
```

4. Introducir la bandera completa en CyLab. Fue aceptada el **26 de octubre de 2026** con estado **Solved**, dentro del plazo de la tarea **Reversing 1**.

## Notas adicionales

- Por ejemplo, `0142` en Java es octal y corresponde a 98 decimal, la letra `b`. Todas las representaciones describen bytes; cambiar su base no cifra la información.
- La bandera corresponde al archivo de esta tarea en CyLab; se conserva exactamente su prefijo, mayúsculas, minúsculas y sufijo.

## Referencias

- [vault-door-4 — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13493/71)
- [Código fuente original: VaultDoor4.java](https://challenge-files.cylabacademy.net/library/6f9f73cad1f487b96f883f6461ef83ce482da6468064c7ed3833cd67e0525385/VaultDoor4.java)

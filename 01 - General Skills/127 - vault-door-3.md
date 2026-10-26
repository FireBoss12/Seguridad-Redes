## Descripción

**vault-door-3**, reto de ingeniería inversa de picoCTF 2019, creado por Mark E. Haase. Dificultad: **media**.

La misión consiste en recuperar la contraseña de una puerta de la bóveda del laboratorio del Dr. Evil. Se proporciona el código fuente `VaultDoor3.java` que valida la entrada.

## Solución

1. Descargar `VaultDoor3.java` desde el enlace del reto y revisar `main` y `checkPassword`. El programa retira `academy{` y la llave final antes de comprobar la contraseña.

2. El programa permuta los caracteres antes de compararlos. Las posiciones 0–7 se copian; las 8–15 se leen con `23-i`; las pares 16–30 usan `46-i`; las impares 17–31 conservan su índice. Se invierte esa correspondencia colocando cada carácter del resultado esperado en su posición original.

3. Guardar el siguiente script junto al archivo Java y ejecutarlo con Python 3:

```python
from pathlib import Path
import re
source = Path("VaultDoor3.java").read_text()
target = re.search(r's.equals\("([^"]+)"\)', source).group(1)
# route[i] indica qué posición de la contraseña produce buffer[i].
route = list(range(8)) + [23-i for i in range(8, 16)]
route += [46-i if i % 2 == 0 else i for i in range(16, 32)]
assert sorted(route) == list(range(32))
chars = [None] * 32
for i, original_index in enumerate(route):
    chars[original_index] = target[i]
password = "".join(chars)
assert "".join(password[i] for i in route) == target
print("academy{" + password + "}")
```

Solución:

```text
academy{jU5t_a_s1mpl3_an4gr4m_4_u_2be258}
```

4. Introducir la bandera completa en CyLab. Fue aceptada el **26 de octubre de 2026** con estado **Solved**, dentro del plazo de la tarea **Reversing 1**.

## Notas adicionales

- La cadena de `s.equals(...)` es el resultado de la transformación, no la contraseña de entrada. El script reproduce la permutación para verificar la recuperación.
- La bandera corresponde al archivo de esta tarea en CyLab; se conserva exactamente su prefijo, mayúsculas, minúsculas y sufijo.

## Referencias

- [vault-door-3 — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13493/60)
- [Código fuente original: VaultDoor3.java](https://challenge-files.cylabacademy.net/library/14bca593f597cbc6b521a3deb17bd94a81c603c8cdc801f0a6b41f89ec79e27f/VaultDoor3.java)

## Descripción

**vault-door-1**, reto de ingeniería inversa de picoCTF 2019, creado por Mark E. Haase. Dificultad: **media**.

La misión consiste en recuperar la contraseña de una puerta de la bóveda del laboratorio del Dr. Evil. Se proporciona el código fuente `VaultDoor1.java` que valida la entrada.

## Solución

1. Descargar `VaultDoor1.java` desde el enlace del reto y revisar `main` y `checkPassword`. El programa retira `academy{` y la llave final antes de comprobar la contraseña.

2. Las comparaciones `password.charAt(i)` están desordenadas, pero cada una indica qué carácter ocupa una posición. Se reconstruyen las 32 posiciones y se comprueban todas las condiciones.

3. Guardar el siguiente script junto al archivo Java y ejecutarlo con Python 3:

```python
from pathlib import Path
import re
source = Path("VaultDoor1.java").read_text()
pairs = re.findall(r"password.charAt\((\d+)\)\s*==\s*'(.)'", source)
chars = [None] * 32
for index, char in pairs:
    chars[int(index)] = char
assert len(pairs) == 32 and None not in chars
password = "".join(chars)
assert all(password[int(i)] == c for i, c in pairs)
print("academy{" + password + "}")
```

Solución:

```text
academy{d35cr4mbl3_tH3_cH4r4cT3r5_179fbd}
```

4. Introducir la bandera completa en CyLab. Fue aceptada el **26 de octubre de 2026** con estado **Solved**, dentro del plazo de la tarea **Reversing 1**.

## Notas adicionales

- Los índices empiezan en cero. Cambiar el orden de las comparaciones solo oculta visualmente la contraseña.
- La bandera corresponde al archivo de esta tarea en CyLab; se conserva exactamente su prefijo, mayúsculas, minúsculas y sufijo.

## Referencias

- [vault-door-1 — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13493/12)
- [Código fuente original: VaultDoor1.java](https://challenge-files.cylabacademy.net/library/dd0ae9b406943de9f8bee5c8f5b509e72ad86fc3855bbe2f4f83228d6309a25c/VaultDoor1.java)

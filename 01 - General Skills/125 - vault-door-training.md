## Descripción

**vault-door-training**, reto de ingeniería inversa de picoCTF 2019, creado por Mark E. Haase. Dificultad: **fácil**.

La misión consiste en recuperar la contraseña de una puerta de la bóveda del laboratorio del Dr. Evil. Se proporciona el código fuente `VaultDoorTraining.java` que valida la entrada.

## Solución

1. Descargar `VaultDoorTraining.java` desde el enlace del reto y revisar `main` y `checkPassword`. El programa retira `academy{` y la llave final antes de comprobar la contraseña.

2. La función `checkPassword` compara la entrada con una cadena literal. Basta leer el argumento de `password.equals(...)` y añadir el prefijo y las llaves.

3. Guardar el siguiente script junto al archivo Java y ejecutarlo con Python 3:

```python
from pathlib import Path
import re
source = Path("VaultDoorTraining.java").read_text()
password = re.search(r'password.equals\("([^"]+)"\)', source).group(1)
print("academy{" + password + "}")
```

Solución:

```text
academy{w4rm1ng_Up_w1tH_jAv4_8352733cecd}
```

4. Introducir la bandera completa en CyLab. Fue aceptada el **26 de octubre de 2026** con estado **Solved**, dentro del plazo de la tarea **Reversing 1**.

## Notas adicionales

- Guardar la contraseña en el código fuente permite recuperarla directamente. No fue necesario ejecutar el Java descargado.
- La bandera corresponde al archivo de esta tarea en CyLab; se conserva exactamente su prefijo, mayúsculas, minúsculas y sufijo.

## Referencias

- [vault-door-training — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13493/7)
- [Código fuente original: VaultDoorTraining.java](https://challenge-files.cylabacademy.net/library/78ec91618d4c4219c55fbe2c9fc67ec6e248664564e6b2f13a54534aaf1d1000/VaultDoorTraining.java)

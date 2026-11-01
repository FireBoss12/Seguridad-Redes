## Descripción

**credstuff**, reto de criptografía de picoCTF 2022, creado por Will Hong / LT 'syreal' Jones.

Se proporciona una filtración simulada de credenciales. Debe encontrarse la contraseña del usuario `cultiris` y descifrarla. La posición de cada usuario coincide con la posición de su contraseña.

## Solución

1. Descargar `leak.tar` y leer `usernames.txt` y `passwords.txt`. Los archivos deben mantenerse en su orden original.

2. Localizar `cultiris` en la línea **378** y tomar la contraseña de esa misma línea:

```text
npnqrzl{P7e1S_54I35_71Z3}
```

3. Aplicar ROT13. El siguiente código lee el contenido del TAR sin extraer archivos al sistema:

```python
from pathlib import Path
import codecs
import tarfile

with tarfile.open("leak.tar") as archivo:
    miembros = {Path(m.name).name: m for m in archivo.getmembers() if m.isfile()}
    usuarios = archivo.extractfile(miembros["usernames.txt"]).read().decode().splitlines()
    passwords = archivo.extractfile(miembros["passwords.txt"]).read().decode().splitlines()

assert len(usuarios) == len(passwords)
indice = usuarios.index("cultiris")
cifrado = passwords[indice]
print("Linea:", indice + 1)
print("Password cifrado:", cifrado)
print(codecs.decode(cifrado, "rot_13"))
```

Solución:

```text
academy{C7r1F_54V35_71M3}
```

La bandera se introdujo en CyLab y fue aceptada el **24 de octubre de 2026**. La plataforma la registró como **Solved late**, ya que la tarea estaba cerrada.

## Notas adicionales

- La relación entre usuario y contraseña se establece por el número de línea, no por similitud de nombres.
- ROT13 es reversible y no constituye una protección adecuada para una contraseña.
- Los datos analizados pertenecen al archivo de práctica del reto.

## Referencias

- [credstuff — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13441/261)
- [Archivo original del reto](https://challenge-files.cylabacademy.net/library/7f760cee144ac7237469fd6bfab7c748d6f1d101ca47c101187ca7d8f5c721f0/leak.tar)

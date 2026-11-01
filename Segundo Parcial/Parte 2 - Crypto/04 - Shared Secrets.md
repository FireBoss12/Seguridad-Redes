## Descripción

Reconstruir el secreto compartido a partir de información filtrada y descifrar el mensaje.

## Solución

1. Descargar los archivos originales indicados en las referencias y colocarlos juntos en una carpeta de trabajo.

2. El mensaje filtra el exponente privado b del cliente. Con A, b y p se reconstruye el secreto compartido A^b mod p. El cifrado utiliza solamente shared % 256 como byte XOR.

3. Ejecutar el siguiente código con Python 3 desde esa carpeta:

```python
from pathlib import Path
datos = dict(line.split(' = ', 1) for line in
             Path('message.txt').read_text().strip().splitlines())
shared = pow(int(datos['A']), int(datos['b']), int(datos['p']))
flag = bytes(x ^ (shared % 256) for x in bytes.fromhex(datos['enc']))
print(flag.decode())
```

4. El análisis recuperó esta bandera:

```text
academy{dh_s3cr3t_e3954beb}
```

5. Introducir la bandera en CyLab Security Academy. **Fue aceptada** y se observó `Challenge solved!` el **31 de octubre de 2026**.

## Notas adicionales

Filtrar uno de los exponentes privados rompe el secreto compartido. Se analizó encryption.py como texto; no se ejecutó para evitar sobrescribir message.txt.

## Referencias

- [Shared Secrets — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13495/715)
- [message.txt](https://challenge-files.cylabacademy.net/library/3d87f526f5eef74cdb3852713a6af0841a25766386490f66c43c39e7a83b6529/message.txt)
- [encryption.py](https://challenge-files.cylabacademy.net/library/3d87f526f5eef74cdb3852713a6af0841a25766386490f66c43c39e7a83b6529/encryption.py)

## Descripción

Recuperar una clave derivada de la hora y descifrar un mensaje AES en modo ECB.

## Solución

1. Descargar los archivos originales indicados en las referencias y colocarlos juntos en una carpeta de trabajo.

2. La clave AES es SHA-256 del timestamp decimal, truncado a 16 bytes. Se exploró una ventana de una hora alrededor del timestamp indicado; el propio valor central produjo la bandera.

3. Ejecutar el siguiente código con Python 3 desde esa carpeta:

```python
from pathlib import Path
import hashlib,re
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes
texto = Path('message.txt').read_text()
timestamp = int(re.search(r'around (\d+)',texto)[1])
ciphertext = bytes.fromhex(re.search(r'hex\): ([0-9a-f]+)',texto)[1])
for t in range(timestamp-3600,timestamp+3601):
    key = hashlib.sha256(str(t).encode()).digest()[:16]
    dec = Cipher(algorithms.AES(key),modes.ECB()).decryptor()
    plain = dec.update(ciphertext)+dec.finalize()
    if plain.startswith(b'academy{'):
        count = plain[-1]
        assert 1 <= count <= 16 and plain[-count:] == bytes([count])*count
        print(t, plain[:-count].decode())
        break
```

4. El análisis recuperó esta bandera:

```text
academy{sa3S_sEc9t_65bbf411}
```

5. Introducir la bandera en CyLab Security Academy. **Fue aceptada** y se observó `Challenge solved!` el **31 de octubre de 2026**.

## Notas adicionales

El timestamp correcto fue 1790147508 UTC. Aunque AES es robusto, una clave derivada de un dato predecible reduce el espacio de búsqueda.

## Referencias

- [Timestamped Secrets — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13495/722)
- [message.txt](https://challenge-files.cylabacademy.net/library/a258890eabd4e7c1a16026988a277f2d49573ed77bcc63457a4302424e37c253/message.txt)
- [encryption.py](https://challenge-files.cylabacademy.net/library/a258890eabd4e7c1a16026988a277f2d49573ed77bcc63457a4302424e37c253/encryption.py)

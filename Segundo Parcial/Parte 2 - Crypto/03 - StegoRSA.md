## Descripción

Recuperar una clave privada RSA posiblemente oculta y descifrar el mensaje.

## Solución

1. Descargar los archivos originales indicados en las referencias y colocarlos juntos en una carpeta de trabajo.

2. El comentario del JPEG contiene una clave privada PEM codificada en hexadecimal. Se recuperó la clave y se usó para descifrar flag.enc con RSA PKCS#1 v1.5.

3. Ejecutar el siguiente código con Python 3 desde esa carpeta:

```python
from pathlib import Path
from PIL import Image
from cryptography.hazmat.primitives.serialization import load_pem_private_key
from cryptography.hazmat.primitives.asymmetric import padding
comentario = Image.open('image.jpg').info['comment'].decode()
pem = bytes.fromhex(comentario)
clave = load_pem_private_key(pem, password=None)
print(clave.decrypt(Path('flag.enc').read_bytes(), padding.PKCS1v15()).decode())
```

4. El análisis recuperó esta bandera:

```text
academy{rs4_k3y_1n_1mg_3e14722a}
```

5. Introducir la bandera en CyLab Security Academy. **Fue aceptada** y se observó `Challenge solved!` el **31 de octubre de 2026**.

## Notas adicionales

La clave privada estaba en los metadatos del archivo. No fue necesario factorizar el módulo RSA. Se usaron Pillow y cryptography.

## Referencias

- [StegoRSA — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13495/719)
- [flag.enc](https://challenge-files.cylabacademy.net/library/9158482a92a4408128c3c320458089d0e8c2c1d8d8120ddaaabdf90397e4cedb/flag.enc)
- [image.jpg](https://challenge-files.cylabacademy.net/library/9158482a92a4408128c3c320458089d0e8c2c1d8d8120ddaaabdf90397e4cedb/image.jpg)

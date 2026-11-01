## Descripción

Reto de criptografía que combina esteganografía en una imagen JPEG y cifrado Atbash. El enunciado invita a jugar al escondite y proporciona el archivo [atbash.jpg](https://challenge-files.cylabacademy.net/library/771a76c980170940b6bce49ef90b4fbcbaafc74b555625fec08aca0dd2ecae2c/atbash.jpg).

## Solución

1. Descargar la imagen y extraer los datos ocultos con Steghide utilizando una contraseña vacía:

```bash
steghide extract -sf atbash.jpg -p "" -xf encrypted.txt
```

2. Leer el archivo extraído:

```bash
cat encrypted.txt
```

Contenido recuperado:

```text
zxzwvnb{zgyzhs_xizxp_y1y5x980}
```

3. Aplicar Atbash, que sustituye cada letra por su opuesta en el alfabeto: `A ↔ Z`, `B ↔ Y`, etc.

```python
from pathlib import Path
import string

cifrado = Path("encrypted.txt").read_text().strip()
normal = string.ascii_lowercase + string.ascii_uppercase
invertido = string.ascii_lowercase[::-1] + string.ascii_uppercase[::-1]
tabla = str.maketrans(normal, invertido)

print(cifrado.translate(tabla))
```

Solución:

```text
academy{atbash_crack_b1b5c980}
```

La extracción y el descifrado se reprodujeron con la imagen original el 21 de octubre de 2026.

## Notas adicionales

- La contraseña utilizada en Steghide es vacía: `-p ""`.
- `-sf` indica la imagen que contiene el mensaje y `-xf` el archivo de salida.
- Las cifras, guiones bajos y llaves se conservan al aplicar la sustitución Atbash.
- Atbash es una transformación reversible: aplicarlo dos veces recupera el mensaje inicial.

## Referencias

- [Imagen original atbash.jpg](https://challenge-files.cylabacademy.net/library/771a76c980170940b6bce49ef90b4fbcbaafc74b555625fec08aca0dd2ecae2c/atbash.jpg)
- [Conversación con el procedimiento](https://chatgpt.com/share/6ad8f2fc-e384-83e8-8820-5eea40621d6b)
- [Manual de Steghide](https://steghide.sourceforge.net/documentation/manual.pdf)

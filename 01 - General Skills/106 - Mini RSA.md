## Descripción

Reto de criptografía de dificultad media de picoCTF 2021, creado por Sara. Utiliza un exponente pequeño y un mensaje con relleno, cuyo cubo supera el módulo RSA. Se proporcionan `N`, `e = 3` y el ciphertext en el archivo `values`.

## Solución

1. Descargar el [archivo values](https://challenge-files.cylabacademy.net/library/28a2479cff9eab20837067152fcead0a079e378b38249280192aef28a975269a/values).

2. Utilizar la relación de RSA:

```text
c = m^3 mod N
m^3 = c + k*N
```

Se buscan valores pequeños de `k` hasta encontrar un cubo perfecto. La raíz debe calcularse con enteros para evitar errores de precisión.

3. Normalizar el ciphertext. En el archivo analizado, el valor proporcionado es mayor que `N`, por lo que se utiliza `c = c_original % N` antes de buscar `k`.

4. Ejecutar el siguiente código en la carpeta que contiene `values`.

```python
from pathlib import Path
import re

datos = Path("values").read_text()
n = int(re.search(r"N:\s*(\d+)", datos).group(1))
e = int(re.search(r"e:\s*(\d+)", datos).group(1))
c_original = int(re.search(r"ciphertext \(c\):\s*(\d+)", datos).group(1))
c = c_original % n
assert e == 3

def raiz_cubica_entera(numero):
    x = 1 << ((numero.bit_length() + 2) // 3)
    while True:
        siguiente = (2 * x + numero // (x * x)) // 3
        if siguiente >= x:
            return x
        x = siguiente

for k in range(1_000_000):
    candidato = c + k * n
    m = raiz_cubica_entera(candidato)
    if m ** 3 == candidato:
        assert pow(m, e, n) == c
        texto = m.to_bytes((m.bit_length() + 7) // 8, "big").decode()
        print("k:", k)
        print(texto.strip())
        break
else:
    raise ValueError("No se encontro un cubo exacto en el rango probado")
```

Resultado:

```text
k: 3533
academy{e_sh0u1d_b3_lArg3r_35f26e1a}
```

5. Introducir la flag en CyLab. Fue aceptada y el reto quedó marcado como resuelto el 19 de octubre de 2026.

## Notas adicionales

- El valor normalizado cumple `m**3 = (c_original % N) + 3533*N`.
- En esta versión del archivo, `c_original // N = 3533` y el entero original ya es un cubo perfecto. También puede recuperarse el mensaje tomando directamente su raíz cúbica exacta.
- El texto recuperado contiene espacios de relleno y un salto de línea; se eliminan con `strip()`.
- La comprobación `pow(m, e, n) == c` confirma el descifrado con el ciphertext reducido.

## Referencias

- [Mini RSA — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13360/188)
- [Archivo original values](https://challenge-files.cylabacademy.net/library/28a2479cff9eab20837067152fcead0a079e378b38249280192aef28a975269a/values)

## Descripción

**Crack the Power**, reto de criptografía de picoMini by CMU-Africa, creado por Yahaya Meddy.

Se proporciona un mensaje cifrado con un módulo formado por primos grandes. El objetivo es recuperar la flag sin factorizar el módulo, aprovechando el exponente y el tamaño del mensaje.

## Solución

1. Descargar `message.txt` y leer los parámetros. En esta instancia el exponente es `e = 20`.

2. Buscar la raíz entera de orden 20 del ciphertext. Al comprobar que la raíz es exacta y que `c < n`, se recupera el mensaje sin calcular los factores del módulo.

```text
c = m^20
m = raiz_entera_20(c)
```

3. Ejecutar el siguiente código en la carpeta del archivo:

```python
from pathlib import Path
import re

datos = Path("message.txt").read_text()
v = {k: int(n) for k, n in re.findall(r"([nec])\s*=\s*(\d+)", datos)}
n, e, c = v["n"], v["e"], v["c"]
assert c < n

inferior = 0
superior = 1 << ((c.bit_length() + e - 1) // e)
while inferior < superior:
    medio = (inferior + superior + 1) // 2
    if medio ** e <= c:
        inferior = medio
    else:
        superior = medio - 1

m = inferior
assert m ** e == c
print(m.to_bytes((m.bit_length() + 7) // 8, "big").decode())
```

Solución:

```text
academy{t1ny_e_d9b985d8}
```

La bandera se introdujo en CyLab y fue aceptada el **24 de octubre de 2026**. La plataforma la registró como **Solved late**, ya que la tarea estaba cerrada.

## Notas adicionales

- Se comprobó `m**e == c`; no se utilizó una aproximación de punto flotante.
- No fue necesario factorizar `n` ni obtener un inverso modular.
- El ataque de raíz directa depende de que el mensaje no haya sufrido una reducción modular que oculte su potencia exacta.

## Referencias

- [Crack the Power — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13441/522)
- [Archivo original del reto](https://challenge-files.cylabacademy.net/library/c85258d1bfc43eacb36ad1dad1f13f53e3bb9de78790da47f98669733ded9001/message.txt)

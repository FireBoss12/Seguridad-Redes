## Descripción

Se encontró un mensaje numérico y se proporciona un esquema de descifrado: calcular cada número módulo 37 y utilizar los residuos como índices de un alfabeto de 37 caracteres.

- `0–25`: letras mayúsculas `A–Z`.
- `26–35`: dígitos `0–9`.
- `36`: guion bajo `_`.

## Solución

1. Descargar [message.txt](https://challenge-files.cylabacademy.net/library/153c6663b971f4d124ad181fdbf1c21ad47dc241b7a578ab47253d6461f2f145/message.txt). El archivo contiene:

```text
239 396 131 87 188 147 309 295 165 248 353 383 299 258 137 291 145 180 262 178 252 148
```

2. Calcular el residuo de cada número al dividirlo entre 37 y sustituirlo por su carácter.

| Número | Residuo módulo 37 | Carácter |
| --- | --- | --- |
| 239 | 17 | `R` |
| 396 | 26 | `0` |
| 131 | 20 | `U` |
| 87 | 13 | `N` |
| 188 | 3 | `D` |
| 147 | 36 | `_` |

3. Automatizar el procedimiento con Python:

```python
from pathlib import Path

numeros = [int(valor) for valor in Path("message.txt").read_text().split()]
caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_"
mensaje = "".join(caracteres[numero % 37] for numero in numeros)

print(f"academy{{{mensaje}}}")
```

Solución:

```text
academy{R0UND_N_R0UND_0686D44A}
```

El resultado se calculó con los 22 números del archivo original y coincide con la flag registrada en la conversación.

## Notas adicionales

- El alfabeto utilizado es exactamente `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_`.
- Los índices comienzan en cero: `0` corresponde a `A` y `26` al dígito `0`.
- El módulo 37 reduce cada valor al intervalo de 0 a 36.
- El mensaje se coloca dentro de `academy{...}`, conforme al enunciado de esta versión.

## Referencias

- [Archivo original message.txt](https://challenge-files.cylabacademy.net/library/153c6663b971f4d124ad181fdbf1c21ad47dc241b7a578ab47253d6461f2f145/message.txt)
- [Conversación con el mensaje y el resultado](https://chatgpt.com/share/6ad8f2fc-e384-83e8-8820-5eea40621d6b)

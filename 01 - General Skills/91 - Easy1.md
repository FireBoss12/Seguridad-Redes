## Descripción

El cifrado de un solo uso puede ser criptográficamente seguro, pero no cuando se conoce la clave. El reto proporciona el mensaje cifrado, la clave y una tabla para recuperar el texto original.

- Mensaje cifrado: `UFJKXQZQUNB`.
- Clave: `SOLVECRYPTO`.

## Solución

1. Asignar a las letras los valores `A = 0, B = 1, ..., Z = 25`.

2. Restar el valor de la letra de la clave al de la letra cifrada en cada posición y aplicar módulo 26:

```text
P = (C - K) mod 26
```

Por ejemplo, `U - S = 20 - 18 = 2`, que corresponde a `C`.

3. Automatizar el descifrado con Python.

```python
cifrado = "UFJKXQZQUNB"
clave = "SOLVECRYPTO"

resultado = "".join(
    chr((ord(c) - ord(k)) % 26 + ord("A"))
    for c, k in zip(cifrado, clave)
)

print(resultado)
print(f"academy{{{resultado}}}")
```

Resultado:

```text
CRYPTOISFUN
```

Solución:

```text
academy{CRYPTOISFUN}
```

## Notas adicionales

- El mensaje y la clave tienen 11 caracteres, por lo que se utilizan directamente, letra por letra.
- Un one-time pad seguro necesita una clave aleatoria, secreta, de la misma longitud que el mensaje y que se utilice una sola vez.
- El texto recuperado es `CRYPTOISFUN`. La flag completa, confirmada en los resultados proporcionados, es `academy{CRYPTOISFUN}`.

## Referencias

- [Tabla proporcionada por el reto](https://challenge-files.cylabacademy.net/library/14a944b4b00c6d6e9213b62098e0c8a8d77219757b1a51d9af4bc15e263b6b92/table.txt)
- [Conversación con los datos y la solución](https://chatgpt.com/share/6acd12fb-e128-83e8-8198-d54fc84f0bb4)

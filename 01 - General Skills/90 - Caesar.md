## Descripción

Descifra este mensaje.

Reto de criptografía de picoCTF 2019, creado por Sanjay C y Daniel Tunitis, en el que se proporciona el archivo `data.enc`.

[Mensaje proporcionado por el reto](https://challenge-files.cylabacademy.net/library/a934e747e5c05fde57aa329d9f6f79b4113c18908d017e17e2e340f147f6fb81/data.enc)

## Solución

1. Descargar `data.enc` y leer su contenido.

```text
academy{xmjnndiboczmpwdxjiqaptvumw}
```

2. Identificar un cifrado César en el contenido entre llaves. El prefijo `academy` ya está en texto claro y se conserva.

3. Probar los 26 desplazamientos posibles con Python.

```python
with open("data.enc", encoding="utf-8") as archivo:
    cifrado = archivo.read().strip()

prefijo, contenido = cifrado.split("{", 1)
contenido = contenido.rstrip("}")

for desplazamiento in range(26):
    mensaje = "".join(
        chr((ord(c) - ord("a") - desplazamiento) % 26 + ord("a"))
        if "a" <= c <= "z" else c
        for c in contenido
    )
    print(desplazamiento, f"{prefijo}{{{mensaje}}}")
```

4. Seleccionar el resultado legible. El desplazamiento de 21 posiciones hacia atrás produce:

```text
21 academy{crossingtherubiconvfuyazrb}
```

Solución:

```text
academy{crossingtherubiconvfuyazrb}
```

## Notas adicionales

- Un desplazamiento de 21 posiciones hacia atrás equivale a 5 posiciones hacia adelante.
- La fórmula utilizada es `P = (C - desplazamiento) mod 26`.
- La flag se verificó directamente con el archivo del enlace proporcionado.
- El mensaje y el sufijo de la flag pueden ser diferentes en otras cuentas o archivos del reto.

## Referencias

- [Archivo original data.enc](https://challenge-files.cylabacademy.net/library/a934e747e5c05fde57aa329d9f6f79b4113c18908d017e17e2e340f147f6fb81/data.enc)
- [Función chr de Python](https://docs.python.org/3/library/functions.html#chr)

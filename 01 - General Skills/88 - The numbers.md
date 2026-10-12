## Descripción

Los números... ¿qué significan?

Reto de criptografía de picoCTF 2019, creado por Danny, en el que una imagen representa la flag mediante números.

[Imagen proporcionada por el reto](https://challenge-files.cylabacademy.net/library/664bc3a85525cfd5a2af151d29f2744ba334880e28e60f9a513aba13633199d4/the_numbers.png)

## Solución

1. Abrir la imagen y transcribir la secuencia.

```text
16 9 3 15 3 20 6 { 20 8 5 14 21 13 2 5 18 19 13 1 19 15 14 }
```

2. Interpretar los números como posiciones del alfabeto: `1 = A, 2 = B, ..., 26 = Z`.

Por ejemplo, `20 8 5` corresponde a `THE` y `14 21 13 2 5 18 19` a `NUMBERS`.

3. Convertir la secuencia. El texto de la imagen es:

```text
PICOCTF{THENUMBERSMASON}
```

4. Convertir el contenido entre llaves y utilizar el formato de la flag compartida.

```python
numeros = [20, 8, 5, 14, 21, 13, 2, 5, 18, 19, 13, 1, 19, 15, 14]

mensaje = "".join(chr(ord("a") + numero - 1) for numero in numeros)

print(mensaje)
print(f"picoCTF{{{mensaje}}}")
```

Solución:

```text
picoCTF{thenumbersmason}
```

## Notas adicionales

- La correspondencia utilizada se conoce como A1Z26.
- Se numeran las 26 letras del alfabeto inglés; no se incluye la `ñ`.
- La imagen codifica tanto el prefijo como el contenido entre llaves.
- La secuencia se verificó directamente en la imagen del reto. La flag se conserva con las mayúsculas y minúsculas proporcionadas.

## Referencias

- [Archivo original the_numbers.png](https://challenge-files.cylabacademy.net/library/664bc3a85525cfd5a2af151d29f2744ba334880e28e60f9a513aba13633199d4/the_numbers.png)
- [Función chr de Python](https://docs.python.org/3/library/functions.html#chr)

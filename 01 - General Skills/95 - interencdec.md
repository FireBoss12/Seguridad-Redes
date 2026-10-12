## Descripción

Reto en el que un archivo contiene varias capas de codificación y cifrado. En la conversación se trabajó con el archivo `enc_flag(1)`, cuya solución utiliza dos decodificaciones Base64 y un descifrado César.

## Solución

1. Leer el archivo y decodificar la primera capa Base64.

2. Interpretar el resultado como una representación de bytes de Python, de la forma `b'...'`, utilizando `ast.literal_eval`.

3. Decodificar la segunda capa Base64. La cadena intermedia registrada en la conversación fue:

```text
hjhkltf{jhlzhy_k3jy9wa3k_9km0jmlh}
```

4. Aplicar un desplazamiento César de 7 posiciones hacia atrás a las letras. Por ejemplo, `hjhkltf` se transforma en `academy`.

Código para reproducir el procedimiento con el archivo original:

```python
import ast
import base64

with open("enc_flag(1)", "rb") as archivo:
    datos = archivo.read().strip()

capa1 = base64.b64decode(datos)
base64_interno = ast.literal_eval(capa1.decode("utf-8"))
capa2 = base64.b64decode(base64_interno).decode("utf-8")
print("Después de Base64:", capa2)

resultado = []
for caracter in capa2:
    if "a" <= caracter <= "z":
        resultado.append(chr((ord(caracter) - ord("a") - 7) % 26 + ord("a")))
    elif "A" <= caracter <= "Z":
        resultado.append(chr((ord(caracter) - ord("A") - 7) % 26 + ord("A")))
    else:
        resultado.append(caracter)

print("Flag:", "".join(resultado))
```

Resultado:

```text
academy{caesar_d3cr9pt3d_9df0cfea}
```

## Notas adicionales

- Base64 es una codificación; el cifrado César constituye la última capa del reto.
- `ast.literal_eval` interpreta la representación de bytes sin ejecutar código arbitrario.
- Los números, guiones bajos y llaves se conservan al aplicar el desplazamiento.
- El contenido original del adjunto no se incluye en el texto del chat compartido. La cadena intermedia y la flag se documentan a partir de la solución registrada allí.

## Referencias

- [Conversación con el procedimiento y la flag](https://chatgpt.com/share/6acd12fb-e128-83e8-8198-d54fc84f0bb4)
- [Documentación de Base64 en Python](https://docs.python.org/3/library/base64.html)
- [Documentación de ast.literal_eval](https://docs.python.org/3/library/ast.html#ast.literal_eval)

## Descripción

**rail-fence**, reto de criptografía de picoCTF 2022, creado por Will Hong.

Se proporciona un mensaje cifrado mediante Rail Fence con cuatro rieles. El texto descifrado indica una frase que debe colocarse, sin texto adicional, dentro del formato de flag.

## Solución

1. Descargar `message.txt` y utilizar los **cuatro rieles** indicados por el enunciado.

2. Reconstruir el recorrido en zigzag y contar cuántos caracteres corresponden a cada riel.

3. Dividir el ciphertext con esas cantidades y recorrer las filas siguiendo el zigzag original:

```python
from pathlib import Path
from collections import Counter

cifrado = Path("message.txt").read_text().rstrip("\r\n")
rieles = 4
periodo = 2 * (rieles - 1)
ruta = [min(i % periodo, periodo - i % periodo) for i in range(len(cifrado))]
cantidades = Counter(ruta)
filas = []
posicion = 0
for riel in range(rieles):
    filas.append(iter(cifrado[posicion:posicion + cantidades[riel]]))
    posicion += cantidades[riel]

texto = "".join(next(filas[riel]) for riel in ruta)
print(texto)
frase = texto.split(":", 1)[1].strip()
print("academy{" + frase + "}")
```

Texto recuperado:

```text
The flag is: WH3R3_D035_7H3_F3NC3_8361N_4ND_3ND_8CEF1166
```

4. Colocar únicamente la frase que sigue a `The flag is:` dentro del formato `academy{...}`.

Solución:

```text
academy{WH3R3_D035_7H3_F3NC3_8361N_4ND_3ND_8CEF1166}
```

La bandera se introdujo en CyLab y fue aceptada el **24 de octubre de 2026**. La plataforma la registró como **Solved late**, ya que la tarea estaba cerrada.

## Notas adicionales

- Rail Fence es una transposición: cambia la posición de los caracteres, no sus valores.
- Para cuatro rieles, el recorrido se repite cada seis posiciones.
- Se conservaron los espacios del mensaje durante la reconstrucción; solo se quitaron los saltos de línea del final del archivo.

## Referencias

- [rail-fence — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13441/289)
- [Archivo original del reto](https://challenge-files.cylabacademy.net/library/54f070d7a4fbb401b7ae06e5f41a3071cc195039368a58d9c6bb6f5a95b7913c/message.txt)

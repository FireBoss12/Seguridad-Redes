## Descripción

Recuperar un mensaje con caracteres permutados en bloques de tres. La primera palabra tiene tres letras.

## Solución

1. Descargar los archivos originales indicados en las referencias y colocarlos juntos en una carpeta de trabajo.

2. El mensaje está permutado en bloques de tres. Probar las seis permutaciones mostró que el orden de índices 2,0,1 transforma heT en The y recupera la oración completa.

3. Ejecutar el siguiente código con Python 3 desde esa carpeta:

```python
from pathlib import Path
texto = Path('message.txt').read_text().rstrip('\r\n')
resultado = ''
for i in range(0, len(texto), 3):
    bloque = texto[i:i+3]
    resultado += ''.join(bloque[j] for j in (2,0,1)) if len(bloque)==3 else bloque
print(resultado)
```

4. El análisis recuperó esta bandera:

```text
academy{7R4N5P051N6_15_3XP3N51V3_C1CBA2A2}
```

5. Introducir la bandera en CyLab Security Academy. **Fue aceptada** y se observó `Challenge solved!` el **31 de octubre de 2026**.

## Notas adicionales

La salida comienza con The flag is academy{. La transposición modifica las posiciones, no los valores de los caracteres.

## Referencias

- [transposition-trial — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13495/312)
- [message.txt](https://challenge-files.cylabacademy.net/library/304dc08e455ad3c33cf532bb41f44a7e939e8e2ad161d9c9012b8375dee48829/message.txt)

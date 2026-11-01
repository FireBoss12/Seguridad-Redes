## Descripción

Analizar el código de cifrado y escribir la función inversa para descifrar el archivo.

## Solución

1. Descargar los archivos originales indicados en las referencias y colocarlos juntos en una carpeta de trabajo.

2. El código aplica XOR al mensaje invertido con la clave trudeau y multiplica cada carácter por shared_key*311. Se invirtieron las operaciones en orden contrario.

3. Ejecutar el siguiente código con Python 3 desde esa carpeta:

```python
from pathlib import Path
import ast,re
texto = Path('enc_flag').read_text()
a,b = map(int, re.findall(r'^[ab] = (\d+)', texto, re.M))
key = pow(pow(31,b,97),a,97)
cipher = ast.literal_eval(texto.split('cipher is: ')[1])
assert all(n % (key*311) == 0 for n in cipher)
clave = 'trudeau'
intermedio = ''.join(chr(n//(key*311) ^ ord(clave[i%len(clave)]))
                    for i,n in enumerate(cipher))
print(intermedio[::-1])
```

4. El análisis recuperó esta bandera:

```text
academy{custom_d2cr0pt6d_b1f6d02d}
```

5. Introducir la bandera en CyLab Security Academy. **Fue aceptada** y se observó `Challenge solved!` el **31 de octubre de 2026**.

## Notas adicionales

Los parámetros de la instancia son a=87, b=22, p=97 y g=31. Se usó ast.literal_eval para interpretar la lista numérica sin ejecutar código arbitrario.

## Referencias

- [Custom encryption — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13495/412)
- [enc_flag](https://challenge-files.cylabacademy.net/library/8d05f9bf51ff1004789993cef4fe191582d2e543bf5127ab684b100f5960ba62/enc_flag)
- [custom_encryption.py](https://challenge-files.cylabacademy.net/library/8d05f9bf51ff1004789993cef4fe191582d2e543bf5127ab684b100f5960ba62/custom_encryption.py)

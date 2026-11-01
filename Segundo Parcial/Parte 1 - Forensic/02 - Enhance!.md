## Descripción

Encontrar la flag en una imagen SVG.

## Solución

1. Descargar los archivos originales indicados en las referencias y colocarlos juntos en una carpeta de trabajo.

2. La imagen es SVG: además de verla, se puede inspeccionar su XML. La bandera está dividida entre elementos tspan con tamaño de fuente diminuto.

3. Ejecutar el siguiente código con Python 3 desde esa carpeta:

```python
import xml.etree.ElementTree as ET
raiz = ET.parse('drawing.flag.svg').getroot()
fragmentos = [e.text or '' for e in raiz.iter()
              if e.tag.endswith('}tspan')]
print(''.join(''.join(fragmentos).split()))
```

4. El análisis recuperó esta bandera:

```text
academy{3nh4nc3d_9f31c04b}
```

5. Introducir la bandera en CyLab Security Academy. **Fue aceptada** y se observó `Challenge solved!` el **31 de octubre de 2026**.

## Notas adicionales

El texto tenía un tamaño de aproximadamente 0.00352781 px. Leer el XML evita depender del zoom del visor.

## Referencias

- [Enhance! — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13494/265)
- [drawing.flag.svg](https://challenge-files.cylabacademy.net/library/e64e2668a8f34ef7ddcbdd713ba52720a8804ff3a0914677983d29a4b48c3e6a/drawing.flag.svg)

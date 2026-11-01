## Descripción

Recuperar la flag de un archivo eliminado en una imagen de disco.

## Solución

1. Descargar los archivos originales indicados en las referencias y colocarlos juntos en una carpeta de trabajo.

2. Se descomprimió la imagen de 100 MiB y se examinó su sistema FAT32. Una entrada eliminada de LOG, en el offset 18654784, conservaba el clúster inicial 33252 y un tamaño de 87 bytes. En ese clúster había un GZIP recuperable.

3. Ejecutar el siguiente código con Python 3 desde esa carpeta:

```python
from pathlib import Path
import gzip, struct
imagen = gzip.decompress(Path('disko-4.dd.gz').read_bytes())
u16 = lambda p: struct.unpack_from('<H', imagen, p)[0]
u32 = lambda p: struct.unpack_from('<I', imagen, p)[0]
sector = u16(11)
cluster_size = sector * imagen[13]
data_start = (u16(14) + imagen[16] * u32(36)) * sector
# Entrada eliminada identificada al recorrer los directorios FAT32.
entry = 18654784
assert imagen[entry] == 0xe5
cluster = (u16(entry+20) << 16) | u16(entry+26)
size = u32(entry+28)
offset = data_start + (cluster-2)*cluster_size
print('cluster, size, offset:', cluster, size, offset)
recuperado = imagen[offset:offset+size]
Path('recuperado.gz').write_bytes(recuperado)
print(gzip.decompress(recuperado).decode())
```

4. El análisis recuperó esta bandera:

```text
academy{d3l_d0n7_h1d3_w3ll_9748d144}
```

5. Introducir la bandera en CyLab Security Academy. **Fue aceptada** y se observó `Challenge solved!` el **31 de octubre de 2026**.

## Notas adicionales

La imagen usa sectores y clústeres de 512 bytes, 32 sectores reservados y dos FAT de 1576 sectores. El contenido recuperado estaba en el offset 18654208. Al borrar un archivo pueden permanecer sus datos y parte de la entrada de directorio.

## Referencias

- [DISKO 4 — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13494/704)
- [disko-4.dd.gz](https://challenge-files.cylabacademy.net/library/73410159cc8aafa59ec856dcc13ab8b30a50f6827eef6627d3e346bbd3c0085a/disko-4.dd.gz)

## Descripción
We found this file. Recover the flag. [tunn3l_v1s10n](https://challenge-files.cylabacademy.net/library/3b5add918cb4cf98fa62ef4e05eb8c55c6c9ae547a939c6be992ee3aa656ee69/tunn3l_v1s10n)

1.- Weird that it won't display right...

## Solución
```
wget https://challenge-files.cylabacademy.net/library/3b5add918cb4cf98fa62ef4e05eb8c55c6c9ae547a939c6be992ee3aa656ee69/tunn3l_v1s10n

xxd -l 64 tunn3l_v1s10n

cp tunn3l_v1s10n fixed.bmp

python3 - <<'PY'
from pathlib import Path
import struct

p = Path("fixed.bmp")
data = bytearray(p.read_bytes())

# Offset donde empiezan los datos de imagen
data[0x0A:0x0E] = struct.pack("<I", 54)

# Tamaño correcto del header DIB
data[0x0E:0x12] = struct.pack("<I", 40)

# Altura real de la imagen para revelar la parte oculta
data[0x16:0x1A] = struct.pack("<I", 850)

p.write_bytes(data)
PY

file fixed.bmp

xdg-open fixed.bmp

academy{qu1t3_a_v13w_2020}
```

## Notas Adicionales

## Referencias
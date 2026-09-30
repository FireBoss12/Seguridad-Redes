## Descripción
We found this [file](https://challenge-files.cylabacademy.net/library/8388ecc430588d15064755583476bec46e23d42a6d8de6e8995c19e40f2e4c58/c0rrupt-mystery). Recover the flag.
## Solución
````
Descargamos el archivo del reto:

```bash
cd ~/Downloads
wget https://challenge-files.cylabacademy.net/library/8388ecc430588d15064755583476bec46e23d42a6d8de6e8995c19e40f2e4c58/c0rrupt-mystery
````

Revisamos el tipo de archivo:

```
file c0rrupt-mystery
```

El sistema lo detectó solamente como:

```
data
```

Después revisamos los primeros bytes del archivo:

```
xxd -l 64 c0rrupt-mystery
```

Se observó que el archivo tenía una estructura parecida a un PNG, pero con varios bytes del encabezado dañados.

Creamos una copia para reparar el archivo:

```
cp c0rrupt-mystery fixed.png
```

Después ejecutamos un script en Python para corregir la firma PNG y algunos chunks importantes del archivo:

```
python3 - <<'PY'
p = "fixed.png"

with open(p, "rb") as f:
    data = bytearray(f.read())

data[0:8] = bytes.fromhex("89 50 4E 47 0D 0A 1A 0A")
data[12:16] = b'IHDR'

data[70:74] = bytes.fromhex("00 00 16 25")
data[78:82] = bytes.fromhex("38 D8 2C 82")

data[83:87] = bytes.fromhex("00 00 FF A5")
data[87:91] = b'IDAT'

with open(p, "wb") as f:
    f.write(data)

print("Archivo reparado:", p)
PY
```

Verificamos que ahora sí fuera reconocido como una imagen PNG:

```
file fixed.png
```

Después abrimos la imagen:

```
xdg-open fixed.png
```

Solución:  
academy{c0rrupt10n_1847995}
## Notas adicionales
- Los archivos PNG comienzan con una firma específica en hexadecimal: `89 50 4E 47 0D 0A 1A 0A`.
- El archivo tenía dañados algunos elementos importantes de la estructura PNG, como la firma, `IHDR` e `IDAT`.
- Al reparar estos bytes, el archivo pudo volver a interpretarse correctamente como una imagen.
## Referencias
[https://www.w3.org/TR/png/](https://www.w3.org/TR/png/)

[https://en.wikipedia.org/wiki/PNG](https://en.wikipedia.org/wiki/PNG)

[https://docs.python.org/3/library/functions.html](https://docs.python.org/3/library/functions.html)
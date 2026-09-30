## Descripción
I stopped using YellowPages and moved onto WhitePages... but [the page they gave me](https://challenge-files.cylabacademy.net/library/164023ae7e53a7b325e50a82f7cd942427fd0f38084d555c162501500fc475c3/whitepages.txt) is all blank!
## Solución
````
Descargamos el archivo `whitepages.txt` y nos movemos a la carpeta donde se encuentra:

```bash
cd ~/Downloads
````

Revisamos el contenido del archivo en hexadecimal:

```
xxd whitepages.txt | head
```

Aunque el archivo parece estar vacío, contiene dos tipos diferentes de espacios: espacios normales y caracteres Unicode `EM SPACE`.

Estos se pueden interpretar como valores binarios:

```
EM SPACE -> 0
Espacio normal -> 1
```

Ejecutamos el siguiente script en Python para convertir los espacios a binario y después a texto:

```
python3 - <<'PY'
data = open("whitepages.txt", "r", encoding="utf-8").read()

bits = data.replace("\u2003", "0").replace(" ", "1")

texto = ""
for i in range(0, len(bits), 8):
    byte = bits[i:i+8]
    if len(byte) == 8:
        texto += chr(int(byte, 2))

print(texto)
PY
```
Solución:
academy{not_all_spaces_are_created_equal_d4c2f3dcae81af992c8e86ddecdf2dd5}
## Notas adicionales
El archivo utiliza diferentes caracteres de espacio para representar bits en binario. Aunque visualmente parecen iguales, tienen distintos valores Unicode.
## Referencias
https://unicode.org/
https://docs.python.org/3/library/functions.html
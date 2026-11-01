## Descripción

Descubrir y extraer una carga oculta en una imagen JPG.

## Solución

1. Descargar el archivo original indicado en las referencias y colocarlo en una carpeta de trabajo.

2. En el comentario del JPG aparece la cadena Base64 `c3RlZ2hpZGU6Y0VGNmVuZHZjbVE9`. Al decodificarla se obtiene `steghide:cEF6endvcmQ=`, que indica la herramienta y una contraseña a su vez codificada. Decodificar `cEF6endvcmQ=` devuelve la contraseña `pAzzword`.

3. Reproducir las dos decodificaciones con Python 3:

```python
import base64
comentario = "c3RlZ2hpZGU6Y0VGNmVuZHZjbVE9"
herramienta, pwd_b64 = base64.b64decode(comentario).decode().split(":")
print(herramienta, base64.b64decode(pwd_b64).decode())
# steghide pAzzword
```

4. Con autorización explícita del propietario de la máquina se ejecutó Steghide para extraer la carga oculta usando esa contraseña:

```sh
steghide extract -sf img.jpg -p pAzzword -xf extracted.txt
```

5. El archivo `extracted.txt` contenía esta bandera:

```text
academy{h1dd3n_1n_1m4g3_a2158aa5}
```

6. Introducir la bandera en CyLab Security Academy. **Fue aceptada** y se observó `Challenge solved!` el **31 de octubre de 2026**.

## Notas adicionales

La pista estaba encadenada: el comentario Base64 revelaba la herramienta (`steghide`) y, tras una segunda decodificación, la contraseña. Steghide es externo a la biblioteca estándar; se usó únicamente para la extracción autorizada. El archivo extraído se guardó como evidencia local y no se incorpora al repositorio.

## Referencias

- [Hidden in plainsight — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13494/524)
- [img.jpg](https://challenge-files.cylabacademy.net/library/714093cf55b6f82d117c53a2a1d44f4956e0ccc7655b1fe2efee99e12b314f53/img.jpg)

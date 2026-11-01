## Descripción

Analizar una captura PCAP para recuperar datos ocultos por un intruso. La descripción destaca la importancia del tiempo de los paquetes. Reto de Forensics, dificultad fácil, de picoCTF 2025.

## Solución

1. Descargar `myNetworkTraffic.pcap` y revisar los datos TCP y las marcas de tiempo con TShark:

```bash
tshark -r myNetworkTraffic.pcap -T fields -e frame.number -e frame.time_epoch -e tcp.len -e tcp.payload
```

2. La captura tiene 22 paquetes. Los datos TCP están codificados en Base64, pero los paquetes no están almacenados en orden cronológico. Los segmentos que forman la bandera tienen 12 bytes de carga TCP, salvo el último, de 4 bytes. Los segmentos de 8 bytes contienen datos de distracción.

3. Decodificar de hexadecimal a bytes, después de Base64 a texto, y ordenar los segmentos seleccionados por `frame.time_epoch`. Código utilizado para reproducirlo:

```python
import base64
import subprocess
from decimal import Decimal

salida = subprocess.check_output([
    "tshark", "-r", "myNetworkTraffic.pcap", "-T", "fields",
    "-e", "frame.number", "-e", "frame.time_epoch",
    "-e", "tcp.len", "-e", "tcp.payload",
], text=True)

segmentos = []
for linea in salida.splitlines():
    numero, tiempo, longitud, carga = linea.split("\t")
    if int(longitud) not in (12, 4):
        continue
    contenido = base64.b64decode(bytes.fromhex(carga))
    segmentos.append((Decimal(tiempo), int(numero), contenido))

segmentos.sort()
for _, numero, contenido in segmentos:
    print(numero, contenido.decode())
print(b"".join(contenido for _, _, contenido in segmentos).decode())
```

4. El orden recuperado es:

| Paquete | Fragmento decodificado |
| --- | --- |
| 19 | `academy` |
| 1 | `{1t_w4s` |
| 11 | `nt_th4t` |
| 12 | `_34sy_t` |
| 16 | `bh_4r_d` |
| 15 | `d2075f0` |
| 17 | `}` |

5. Concatenar los fragmentos e introducir la bandera completa. La plataforma la acepta y la tarea alcanza `CHALLENGES 9 / 9`.

Solución:

```text
academy{1t_w4snt_th4t_34sy_tbh_4r_dd2075f0}
```

La bandera fue introducida en la plataforma y aceptada con el mensaje `Correct flag!` el 17 de octubre de 2026.

## Notas adicionales

- El orden en el archivo no coincide con el orden temporal de los paquetes.
- El criterio de longitud descrito corresponde a esta captura concreta.
- Se demuestra una transferencia de datos fragmentados y codificados; la captura no permite afirmar por sí sola qué vulnerabilidad inicial se utilizó para entrar al sistema.
- Se utilizó TShark incluido con Wireshark. Debe estar disponible en el PATH o sustituirse `tshark` por su ruta completa.

## Referencias

- [Ph4nt0m 1ntrud3r — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13116/459)
- [Archivo original del reto](https://challenge-files.cylabacademy.net/library/88815ae7a4641c35f494d4d4b56e618428fe5cfb6a8b47c7a600eb98d670a72b/myNetworkTraffic.pcap)

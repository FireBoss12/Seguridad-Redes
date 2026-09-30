## Descripción
We found this [packet capture](https://challenge-files.cylabacademy.net/library/f76620763560ca0683be36e0ed4648743f969ab4d852fda0d8fb4d3ae21a173d/shark-on-wire-2-capture.pcap). Recover the flag that was pilfered from the network.
## Solución
````
Abrimos el archivo `shark-on-wire-2-capture.pcap` en Wireshark.

Aplicamos el siguiente filtro para mostrar únicamente los paquetes UDP enviados al puerto 22 y cuyos puertos de origen estuvieran en el rango utilizado para codificar caracteres:

```text
udp.dstport == 22 && udp.srcport >= 5000 && udp.srcport <= 5200
````

Después revisamos los puertos de origen de los paquetes en el orden en que aparecen.

La información estaba codificada utilizando la siguiente operación:

```
Puerto de origen - 5000 = valor ASCII
```

Por ejemplo:

```
5097 - 5000 = 97  -> a
5099 - 5000 = 99  -> c
5097 - 5000 = 97  -> a
5100 - 5000 = 100 -> d
5101 - 5000 = 101 -> e
5109 - 5000 = 109 -> m
5121 - 5000 = 121 -> y
5123 - 5000 = 123 -> {
```

Al convertir todos los puertos de origen a sus caracteres ASCII correspondientes se obtuvo:

```
academy{p1LLf3r3d_data_v1a_st3g0}
```

Solución: 
academy{p1LLf3r3d_data_v1a_st3g0}
## Notas adicionales
- El archivo `.pcap` contiene tráfico de red capturado.
- La flag estaba oculta utilizando los números de los puertos UDP como valores ASCII.
- El puerto `5000` se utilizó como marcador y no representaba un carácter de la flag.
## Referencias
[https://www.wireshark.org/docs/](https://www.wireshark.org/docs/)
[https://www.wireshark.org/docs/dfref/u/udp.html](https://www.wireshark.org/docs/dfref/u/udp.html)
[https://www.ascii-code.com/](https://www.ascii-code.com/)

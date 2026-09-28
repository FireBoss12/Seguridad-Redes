## Descripción
We found this [packet capture](https://challenge-files.cylabacademy.net/library/e64f2c2aaf9bf531af7be1787c1407c47a4cc7b57f251d5108a1151e9721a2d6/shark-on-wire-1-capture.pcap). Recover the flag.
## Solución
````
Primero se abre el archivo:

```text
shark-on-wire-1-capture.pcap
````

con **Wireshark**.

Después, en la barra de filtros de visualización se utiliza:

```
udp.stream eq 6
```
Esto muestra únicamente los paquetes pertenecientes al stream UDP número 6.

Luego:

1. Se selecciona cualquiera de los paquetes mostrados.
2. Se hace clic derecho.
3. Se selecciona:

```
Follow → UDP Stream
```

Wireshark reconstruye la conversación completa de ese flujo UDP y muestra los datos intercambiados.

Dentro del contenido aparece directamente la flag
Solución: 
academy{StaT31355_636f6e6e}
## Notas adicionales
- Un archivo `.pcap` contiene paquetes capturados de una red.
- Wireshark permite analizar protocolos, direcciones IP, puertos y contenido transmitido.
- Un **stream** representa una conversación o flujo de datos entre dispositivos.
- La opción **Follow UDP Stream** reconstruye los datos de una comunicación UDP para facilitar su lectura.
- Los filtros de visualización de Wireshark permiten aislar tráfico específico.
- En este reto fue necesario revisar un stream UDP concreto para encontrar la flag.
- Antes de revisar paquete por paquete, conviene utilizar filtros y funciones como `Follow Stream`.
## Referencias
- CyLab Academy — archivo proporcionado en el reto.
- Wireshark — herramienta de análisis de tráfico de red.
- Wireshark Display Filters — filtros para aislar paquetes dentro de una captura.
- UDP Streams — reconstrucción de conversaciones basadas en UDP.
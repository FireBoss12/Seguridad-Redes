## Descripción
We found this [packet capture](https://challenge-files.cylabacademy.net/library/2d15538465c5948f0f0626d0cdd271f74363c00aa99d694730fe98331946ab88/webnet0-capture.pcap) and [key](https://challenge-files.cylabacademy.net/library/2d15538465c5948f0f0626d0cdd271f74363c00aa99d694730fe98331946ab88/picopico.key). Recover the flag.


1.- Try using a tool like Wireshark.

2.- How can you decrypt the TLS stream?

## Solución
```
HTTP/1.1 200 OK
Date: Fri, 23 Aug 2019 15:56:36 GMT
Server: Apache/2.4.29 (Ubuntu)
Last-Modified: Mon, 12 Aug 2019 16:50:05 GMT
ETag: "5ff-58fee50dc3fb0-gzip"
Accept-Ranges: bytes
Vary: Accept-Encoding
Content-Encoding: gzip
Pico-Flag: picoCTF{nongshim.shrimp.crackers}
Content-Length: 821
Keep-Alive: timeout=5, max=100
Connection: Keep-Alive
Content-Type: text/html


academy{nongshim.shrimp.crackers}
```

## Notas Adicionales
**TLS (Transport Layer Security)** es el sistema de seguridad digital moderno que protege la información en internet. Este protocolo, que evolucionó a partir del antiguo SSL, garantiza que los datos viajen de forma privada y segura entre el navegador y el servidor, evitando que terceros intercepten o alteren correos, compras o datos confidenciales.

## Referencias
- Kali Linux
## Descripción
We found this [packet capture](https://challenge-files.cylabacademy.net/library/afb7599dd63cad30a04eb98d0e4057608120371eb3e8943b632505e32c8b622c/webnet1-capture.pcap) and [key](https://challenge-files.cylabacademy.net/library/afb7599dd63cad30a04eb98d0e4057608120371eb3e8943b632505e32c8b622c/picopico.key). Recover the flag.


1.- Try using a tool like Wireshark.

2.- How can you decrypt the TLS stream?

## Solución
```
ssldump -r capture.pcap -d -k picopico.key | grep pico -A 2

picoCTF{honey.roasted.peanuts}
```

## Notas Adicionales

## Referencias
- Kali Linux
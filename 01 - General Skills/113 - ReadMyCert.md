## Descripción

Reto de criptografía que propone explorar una solicitud de firma de certificado, o CSR. Se proporciona el archivo [readmycert.csr](https://challenge-files.cylabacademy.net/library/5106e781bbd36dcc1335e6ad005b28467f171c07351768e71d06bf9cafb3c1f6/readmycert.csr).

## Solución

1. Descargar el archivo CSR y mostrar su información con OpenSSL:

```bash
openssl req -in readmycert.csr -noout -text
```

2. Mostrar únicamente el sujeto de la solicitud:

```bash
openssl req -in readmycert.csr -noout -subject
```

Resultado obtenido con el archivo original:

```text
subject=CN=academy{read_mycert_52274715}, name=ctfPlayer
```

3. Identificar la flag en el campo `CN` o Common Name.

Solución:

```text
academy{read_mycert_52274715}
```

4. Comprobar la firma de la solicitud:

```bash
openssl req -in readmycert.csr -noout -verify
```

La comprobación devolvió `Certificate request self-signature verify OK`. El sujeto y la firma se verificaron con OpenSSL el 21 de octubre de 2026.

## Notas adicionales

- Una CSR es una solicitud de firma de certificado; el comando utilizado es `openssl req`.
- `-noout` evita mostrar la representación PEM y `-subject` muestra los campos del sujeto.
- La flag está escrita en el Common Name; no se necesita una clave privada para leer ese campo.

## Referencias

- [Archivo original readmycert.csr](https://challenge-files.cylabacademy.net/library/5106e781bbd36dcc1335e6ad005b28467f171c07351768e71d06bf9cafb3c1f6/readmycert.csr)
- [Conversación con el procedimiento](https://chatgpt.com/share/6ad8f2fc-e384-83e8-8820-5eea40621d6b)

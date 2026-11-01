# Pendientes del segundo parcial

## Contexto y destino

Continuar este examen de CyLab Security Academy. Al corte de este archivo hay **16/20 flags aceptadas: Forensic 7/10 y Crypto 9/10**. Las 16 soluciones aceptadas ya están documentadas; no repetir sus envíos.

- Vault de Obsidian: `C:\Users\bolis\OneDrive\Documentos\Notas-Hacking`.
- Repositorio: https://github.com/FireBoss12/Seguridad-Redes
- Notas: `Segundo Parcial/Parte 1 - Forensic` y `Segundo Parcial/Parte 2 - Crypto`.
- Copia de trabajo y archivos descargados: `C:\Users\bolis\Documents\Codex\Proyectos\Notas-Hacking\Segundo Parcial\Archivos`.
- Obsidian Git está configurado para sincronizar después de 10 minutos sin editar mientras Obsidian permanezca abierto. Verificar en GitHub que los cambios llegaron.
- Fecha de entrega mostrada por la plataforma: 31 de octubre de 2026, 23:59. Comprobar disponibilidad y estado actual al continuar.

## Tres flags Forensic recuperadas, pendientes de validar

Estas cadenas se obtuvieron de los archivos, pero **no se confirmó su aceptación en CyLab**. Enviarlas en su reto correspondiente, comprobar `Challenge solved!` y luego actualizar la nota y el índice.

### Hidden in plainsight

- Reto: https://learn.cylabacademy.org/assignments/13494/524
- Flag recuperada: `academy{h1dd3n_1n_1m4g3_a2158aa5}`.
- En el comentario del JPG aparece `c3RlZ2hpZGU6Y0VGNmVuZHZjbVE9`.
- Primera decodificación Base64: `steghide:cEF6endvcmQ=`; segunda decodificación de la contraseña: `pAzzword`.
- Se ejecutó Steghide, con autorización explícita del usuario, para extraer el archivo:

```sh
steghide extract -sf img.jpg -p pAzzword -xf extracted.txt
```

- La flag está en `Archivos/Hidden in plainsight/extracted.txt`.

### Timeline 0

- Reto: https://learn.cylabacademy.org/assignments/13494/720
- Flag recuperada: `academy{71m311n3_0u7113r_h3r_43a2e7af}`.
- Imagen: `partition4.img.gz`; sistema ext4 tras descomprimir.
- Las pistas indican crear una línea temporal MAC y buscar marcas de tiempo muy antiguas.
- El archivo `/bin/bcab`, inode 4945, tiene un timestamp anómalo del 1 de enero de 1985, 17:00 UTC.
- Contenido: `NzFtMzExbjNfMHU3MTEzcl9oM3JfNDNhMmU3YWYK`.
- Decodificar Base64 y envolver el resultado sin salto de línea en `academy{}`.
- El script de análisis local `timeline-ext.py` enumera inodes y lee extents sin montar la imagen.

### Timeline 1

- Reto: https://learn.cylabacademy.org/assignments/13494/721
- Flag recuperada: `academy{573417h13r_7h4n_7h3_1457_58527bb222}`.
- Imagen: `timeline-1-partition4.img.gz`; sistema ext4.
- Ordenando las fechas recientes se identifica `/etc/chat`, inode 32716, modificado el 1 de diciembre de 2025, 21:50:07 UTC.
- Contenido: `NTczNDE3aDEzcl83aDRuXzdoM18xNDU3XzU4NTI3YmIyMjIK`.
- Decodificar Base64 y envolver el resultado sin salto de línea en `academy{}`.

## rsa_oracle: pendiente de resolver

- Reto: https://learn.cylabacademy.org/assignments/13495/422
- Archivos locales: `Archivos/rsa_oracle/secret.enc` y `password.enc`.
- Archivo original del mensaje: https://challenge-files.cylabacademy.net/library/c160444b2e2c0d9b093294670f0feec4d0e65abfcfc56e9524fb337c65cb9110/secret.enc
- Contraseña cifrada: https://challenge-files.cylabacademy.net/library/c160444b2e2c0d9b093294670f0feec4d0e65abfcfc56e9524fb337c65cb9110/password.enc
- Se lanzó una instancia en `chatelaine.cylabacademy.net:18568`; **puede haber expirado**. Obtener el host y puerto actuales desde la plataforma.
- El menú ofrece `E` para cifrar y `D` para descifrar; el oráculo rechaza descifrar directamente la contraseña.
- Próximo enfoque, aún no ejecutado: explotar la multiplicatividad de RSA sin padding. Obtener el cifrado de un factor conocido, multiplicarlo por el ciphertext de la contraseña y pedir el descifrado del producto. Deshacer el factor para recuperar la contraseña, respetando las conversiones exactas de la implementación.
- Inspeccionar `secret.enc` para identificar su formato y usar la contraseña recuperada con el algoritmo correspondiente; no se ha verificado todavía cuál usa esta instancia.

## Cierre de entrega

1. Confirmar las cuatro flags pendientes en CyLab, sin marcar aceptadas antes de comprobarlo.
2. Documentar los procedimientos finales con el formato de las notas existentes: Descripción, Solución con código y flag, Notas adicionales y Referencias.
3. Actualizar el índice a 20/20 solo cuando ambas partes muestren 10/10.
4. Guardar evidencias de aceptación y verificar commits y subida a GitHub.
5. Entregar al usuario el enlace del repositorio para anexarlo a la entrega.

No incorporar imágenes de disco grandes ni ejecutables de herramientas al repositorio. Las notas ya enlazan los archivos originales.

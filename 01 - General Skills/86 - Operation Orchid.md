## Descripción

Reto de análisis forense en el que una flag había sido cifrada antes de eliminar el archivo original. Era necesario examinar el historial de comandos para recuperar la contraseña y posteriormente descifrar el archivo.

## Solución

1. Analizar las particiones.
    

```bash
mmls disk.flag.img
```

La partición Linux principal comenzaba en:

```text
411648
```

2. Buscar archivos relacionados con la flag y el historial.
    

```bash
fls -r -o 411648 disk.flag.img | grep -Ei 'flag|ash_history'
```

Se encontró:

```text
+ r/r 1875: .ash_history
+ r/r * 1876(realloc): flag.txt
+ r/r 1782: flag.txt.enc
```

3. Leer `.ash_history`.
    

```bash
icat -o 411648 disk.flag.img 1875
```

Dentro del historial apareció:

```bash
openssl aes256 -salt -in flag.txt -out flag.txt.enc -k unbreakablepassword1234567
```

4. Extraer el archivo cifrado.
    

```bash
icat -o 411648 disk.flag.img 1782 > /tmp/flag.txt.enc
```

5. Descifrarlo utilizando la contraseña encontrada.
    

```bash
openssl aes256 -d -salt \
-in /tmp/flag.txt.enc \
-out /tmp/flag.txt \
-k unbreakablepassword1234567
```

6. Leer la flag.
    

```bash
cat /tmp/flag.txt
```

Resultado:

```text
academy{h4un71ng_p457_0cf3a06d}
```

## Notas adicionales

- El archivo original `flag.txt` había sido eliminado mediante `shred -u`.
    
- El archivo cifrado permanecía disponible como `flag.txt.enc`.
    
- `.ash_history` conservaba el comando utilizado para cifrar la flag.
    
- La contraseña encontrada fue:
    

```text
unbreakablepassword1234567
```

## Referencias

- Sleuth Kit
    
- `fls`
    
- `icat`
    
- OpenSSL
    
- AES-256
    
- Análisis de historial de shell
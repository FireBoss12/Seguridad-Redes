## Descripción

Reto de análisis forense de una imagen de disco utilizando herramientas de Sleuth Kit. El objetivo era identificar el tamaño de la partición Linux y enviar la respuesta al checker remoto.

## Solución

1. Descomprimir la imagen de disco.
    

```bash
cd /tmp
gunzip disk.img.gz
```

2. Analizar la tabla de particiones.
    

```bash
mmls disk.img
```

La salida mostró:

```text
Slot      Start        End          Length       Description
002:      0000002048   0000204799   0000202752   Linux (0x83)
```

3. La columna `Length` indica el tamaño de la partición en sectores.
    

```text
202752
```

4. Conectarse al checker remoto usando `nc`.
    

```bash
nc HOST PUERTO
```

5. Introducir como respuesta:
    

```text
202752
```

6. Se obtuvo la flag:
    

```text
academy{mm15_f7w!}
```

## Notas adicionales

- `mmls` pertenece a Sleuth Kit.
    
- La unidad utilizada por `mmls` era de sectores de `512 bytes`.
    
- No era necesario convertir el valor a MB o GB.
    
- El checker esperaba el valor mostrado en `Length`.
    

## Referencias

- Sleuth Kit
    
- `mmls`
    
- Particiones de disco
    
- Netcat
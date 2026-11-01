## Descripción

Reto de análisis forense donde era necesario examinar las particiones de una imagen de disco, encontrar archivos relacionados con la flag y recuperar su contenido mediante Sleuth Kit.

## Solución

1. Ver las particiones del disco.
    

```bash
mmls disk.flag.img
```

La partición Linux de interés comenzaba en:

```text
360448
```

2. Confirmar que el offset correspondía a un sistema de archivos válido.
    

```bash
fsstat -o 360448 disk.flag.img | head
```

3. Buscar archivos relacionados con la flag.
    

```bash
fls -r -o 360448 disk.flag.img | grep -Ei 'flag|ash_history'
```

Se obtuvo:

```text
+ r/r 2363: .ash_history
++ r/r * 2082(realloc): flag.txt
++ r/r 2371: flag.uni.txt
```

4. Extraer el contenido de `flag.uni.txt` utilizando su inode.
    

```bash
icat -o 360448 disk.flag.img 2371
```

5. Se obtuvo:
    

```text
academy{by73_5urf3r_217f681f}
```

## Notas adicionales

- El `*` en `flag.txt` indicaba que el archivo había sido eliminado.
    
- `(realloc)` indicaba que sus bloques podían haber sido reasignados.
    
- `fls` permite listar archivos dentro de un sistema de archivos.
    
- `icat` permite mostrar el contenido de un archivo utilizando su inode.
    
- `-o 360448` establece el offset de la partición.
    

## Referencias

- Sleuth Kit
    
- `mmls`
    
- `fsstat`
    
- `fls`
    
- `icat`
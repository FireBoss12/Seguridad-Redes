## Descripción

Reto introductorio de análisis forense utilizando `srch_strings`, una herramienta incluida en Sleuth Kit. El objetivo era buscar cadenas de texto dentro de una imagen de disco hasta encontrar la flag.

## Solución

1. Descargar la imagen comprimida.
    

```bash
cd /tmp
wget https://challenge-files.cylabacademy.net/library/cb4d1ac86836c86e1ea16a4be1d8cf72c0465c6edcc0ab886728040a28dd7966/dds1-alpine.flag.img.gz
```

2. Descomprimirla.
    

```bash
gunzip dds1-alpine.flag.img.gz
```

3. Buscar cadenas de texto dentro de la imagen.
    

```bash
srch_strings dds1-alpine.flag.img
```

4. Filtrar directamente posibles flags.
    

```bash
srch_strings dds1-alpine.flag.img | grep -i "academy"
```

5. Se encontró:
    

```text
academy{f0r3ns1c4t0r_n30phyt3_6502313d}
```

## Notas adicionales

- `srch_strings` funciona de manera similar al comando `strings`, pero forma parte de Sleuth Kit.
    
- `grep` permite filtrar la gran cantidad de cadenas obtenidas.
    
- No fue necesario montar la imagen de disco.
    

## Referencias

- Sleuth Kit
    
- `srch_strings`
    
- `grep`
    
- Análisis forense de discos
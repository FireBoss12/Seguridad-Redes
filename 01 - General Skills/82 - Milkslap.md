## Descripción

Reto de esteganografía en una imagen PNG. La página web utiliza una imagen llamada `concat_v.png` como fondo y contiene información escondida mediante LSB.

## Solución

1. Revisar el código de la página para localizar archivos relacionados.
    

```bash
curl -s http://chatelaine.cylabacademy.net:23325/ | grep -iE "css|stylesheet"
```

2. Revisar el archivo CSS.
    

```bash
curl -s http://chatelaine.cylabacademy.net:23325/style.css | grep -iE "png|jpg|url"
```

Se encontró:

```text
background-image: url(concat_v.png);
```

3. Descargar la imagen.
    

```bash
cd /tmp
wget http://chatelaine.cylabacademy.net:23325/concat_v.png
```

4. Instalar `zsteg`.
    

```bash
sudo apt update
sudo apt install ruby-full build-essential -y
sudo gem install zsteg
```

5. Debido al gran tamaño vertical de la imagen, `zsteg` mostraba:
    

```text
stack level too deep (SystemStackError)
```

Se aumentó el stack de Ruby y se extrajo directamente el canal correspondiente.

```bash
RUBY_THREAD_VM_STACK_SIZE=500000000 zsteg concat_v.png -E b1,b,lsb,xy
```

6. Se obtuvo la flag:
    

```text
academy{imag3_m4n1pul4t10n_sl4p5}
```

## Notas adicionales

- La imagen tenía dimensiones `1280 x 47520`.
    
- La información estaba escondida en el canal azul mediante LSB.
    
- `b1,b,lsb,xy` indica 1 bit, canal azul, Least Significant Bit y recorrido XY.
    
- El aumento de `RUBY_THREAD_VM_STACK_SIZE` evita el error de recursión de `zsteg`.
    

## Referencias

- `zsteg`
    
- Ruby
    
- Esteganografía LSB
    
- Inspección de HTML/CSS
## Descripción

Reto de análisis forense donde era necesario recuperar una llave privada SSH desde una imagen de disco y utilizarla para iniciar sesión en una máquina remota.

## Solución

1. Analizar las particiones de la imagen.
    

```bash
mmls disk.img
```

2. Buscar archivos SSH dentro de la partición Linux.
    

```bash
fls -r -o 206848 disk.img | grep -E 'id_ed25519|\.ssh'
```

Se obtuvo:

```text
+ d/d 3916: .ssh
++ r/r 2345: id_ed25519
++ r/r 2346: id_ed25519.pub
```

3. Extraer la llave privada.
    

```bash
icat -o 206848 disk.img 2345 > /tmp/key_file
```

4. Establecer los permisos requeridos por SSH.
    

```bash
chmod 600 /tmp/key_file
```

5. Iniciar sesión utilizando la llave.
    

```bash
ssh -i /tmp/key_file -p 35403 ctf-player@chatelaine.cylabacademy.net
```

6. Aceptar la huella del servidor escribiendo:
    

```text
yes
```

7. Ya dentro de la máquina, listar los archivos.
    

```bash
ls -la
```

Se encontró:

```text
flag.txt
```

8. Leer la flag.
    

```bash
cat flag.txt
```

Resultado:

```text
academy{k3y_5l3u7h_f52dbc2c}
```

## Notas adicionales

- `id_ed25519` es la llave privada.
    
- `id_ed25519.pub` es únicamente la llave pública y no sirve para autenticarse como cliente.
    
- SSH requiere permisos restrictivos sobre una llave privada, por eso se utilizó `chmod 600`.
    
- El puerto `35403` correspondía a la instancia utilizada durante el reto y puede cambiar al lanzar otra instancia.
    

## Referencias

- Sleuth Kit
    
- `fls`
    
- `icat`
    
- SSH
    
- ED25519
    
- Permisos de archivos en Linux
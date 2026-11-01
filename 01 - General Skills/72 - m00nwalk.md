## Descripción
Decode this [message](https://challenge-files.cylabacademy.net/library/d825fde6581b1311eafdd403da1cc96f1f98fe3fe84cd71d850310ebb3908088/message.wav) from the moon.
## Solución
Clonar el repositorio

```
git clone https://github.com/colaclanth/sstv.git
cd sstv
```

Crear y activar el entorno virtual

```
python3 -m venv .venv
source .venv/bin/activate
```
Instalar SSTV

```
pip install .
```

Para verificar la instalación:

```
pip list | grep -i sstv
```

Resultado:

```
sstv        0.1
```
Decodificar el audio

El archivo `message.wav` se encontraba en la carpeta de Descargas.

Se ejecutó:

```
sstv -d ~/Downloads/message.wav -o ~/Downloads/flag.png
```
Solución:
picoCTF{beep_boop_im_in_space}

## Notas adicionales
```
SSTV significa **Slow Scan Television** y permite transmitir imágenes mediante señales de audio.
- El archivo `message.wav` estaba codificado en modo **Scottie 1**.
- La herramienta `sstv` convirtió el audio en una imagen PNG donde se encontraba la flag.
- Se utilizó un entorno virtual de Python para instalar y ejecutar la herramienta sin modificar el Python del sistema.
```
## Referencias
```
- colaclanth. **sstv - SSTV decoder written in Python**. GitHub.  
  https://github.com/colaclanth/sstv

- Python Software Foundation. **venv — Creation of virtual environments**.  
  https://docs.python.org/3/library/venv.html

- Wikipedia. **Slow-scan television**.  
  https://en.wikipedia.org/wiki/Slow-scan_television
```
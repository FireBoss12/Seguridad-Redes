## Descripción

**morse-code**, reto de criptografía de picoCTF 2022, creado por Will Hong.

Se proporciona un archivo WAV que contiene un mensaje en código Morse. El enunciado pide escribir el resultado en mayúsculas, sustituir las pausas entre palabras por guiones bajos y utilizar el formato `academy{...}`.

## Solución

1. Descargar `morse_chal.wav`. El archivo contiene audio PCM de 16 bits, mono, a 44100 Hz.

2. Calcular la energía del audio en ventanas de aproximadamente 5 ms para separar tonos y silencios.

3. Clasificar los tonos cortos como puntos y los largos como rayas. En este archivo duran aproximadamente 0,1 y 0,3 segundos. Los silencios de unos 0,4 segundos separan letras; los de unos 0,8 segundos, palabras.

4. Convertir los símbolos a caracteres y usar guiones bajos entre palabras:

```python
from pathlib import Path
import wave
import numpy as np

with wave.open("morse_chal.wav", "rb") as audio:
    assert audio.getnchannels() == 1 and audio.getsampwidth() == 2
    frecuencia = audio.getframerate()
    muestras = np.frombuffer(audio.readframes(audio.getnframes()), dtype=np.int16).astype(float)

ventana = round(frecuencia * 0.005)
marcos = muestras[:len(muestras) // ventana * ventana].reshape(-1, ventana)
rms = np.sqrt((marcos ** 2).mean(axis=1))
activo = rms > rms.max() * 0.2
limites = np.r_[0, np.flatnonzero(activo[1:] != activo[:-1]) + 1, len(activo)]
segmentos = [(bool(activo[a]), (b-a) * ventana / frecuencia) for a, b in zip(limites, limites[1:])]

simbolos = []
letra = ""
for tono, duracion in segmentos:
    if tono:
        letra += "." if duracion < 0.2 else "-"
    else:
        if duracion > 0.2 and letra:
            simbolos.append(letra)
            letra = ""
        if duracion > 0.6:
            simbolos.append("/")
if letra:
    simbolos.append(letra)

tabla = {
    ".-":"A", "-...":"B", "-.-.":"C", "-..":"D", ".":"E", "..-.":"F",
    "--.":"G", "....":"H", "..":"I", ".---":"J", "-.-":"K", ".-..":"L",
    "--":"M", "-.":"N", "---":"O", ".--.":"P", "--.-":"Q", ".-.":"R",
    "...":"S", "-":"T", "..-":"U", "...-":"V", ".--":"W", "-..-":"X",
    "-.--":"Y", "--..":"Z", "-----":"0", ".----":"1", "..---":"2",
    "...--":"3", "....-":"4", ".....":"5", "-....":"6", "--...":"7",
    "---..":"8", "----.":"9",
}
mensaje = "".join("_" if s == "/" else tabla[s] for s in simbolos).strip("_")
print("academy{" + mensaje + "}")
```

Secuencia recuperada:

```text
.-- .... ....- --... / .... ....- --... .... / ----. ----- -.. / .-- ..--- ----- ..- ----. .... --...
```

Solución:

```text
academy{WH47_H47H_90D_W20U9H7}
```

La bandera se introdujo en CyLab y fue aceptada el **24 de octubre de 2026**. La plataforma la registró como **Solved late**, ya que la tarea estaba cerrada.

## Notas adicionales

- Los umbrales de duración descritos corresponden a este WAV y se comprobaron con sus segmentos.
- Las cifras forman parte del mensaje: se conservan `4`, `7`, `9`, `0` y `2` tal como se decodifican.
- El prefijo es `academy`, mientras que el contenido se escribe en mayúsculas.
- El código utiliza NumPy para calcular la energía de las muestras.

## Referencias

- [morse-code — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13441/280)
- [Archivo original del reto](https://challenge-files.cylabacademy.net/library/3728bfa4e8314fddd6b7e9f3fae9cb453b459a0bd4b3a29a9224701152f0cd89/morse_chal.wav)

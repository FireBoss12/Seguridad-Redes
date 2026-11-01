## Descripción

Tapping es un reto en el que, al conectarse a la instancia, se recibe la flag representada mediante código Morse. Cada grupo de puntos y rayas corresponde a una letra o un número.

Mensaje recibido:

```text
.- -.-. .- -.. . -- -.-- { -- ----- .-. ... ...-- -.-. ----- -.. ...-- .---- ... ..-. ..- -. ..--- .---- ---.. -.-. ..-. ----. --... ----. }
```

## Solución

1. Separar los grupos de código Morse por espacios.

2. Convertir cada grupo mediante su equivalencia. Por ejemplo, `.-` corresponde a `A`, `-----` a `0` y `...--` a `3`.

3. Conservar las llaves que delimitan la flag.

4. Automatizar la conversión con Python.

```python
mensaje = ".- -.-. .- -.. . -- -.-- { -- ----- .-. ... ...-- -.-. ----- -.. ...-- .---- ... ..-. ..- -. ..--- .---- ---.. -.-. ..-. ----. --... ----. }"
tabla = {
    ".-": "A", "-.-.": "C", "-..": "D", ".": "E",
    "--": "M", "-.--": "Y", "-----": "0", ".-.": "R",
    "...": "S", "...--": "3", ".----": "1", "..": "I",
    "..-.": "F", "..-": "U", "-.": "N", "..---": "2",
    "---..": "8", "----.": "9", "--...": "7",
}

resultado = "".join(
    token if token in "{}" else tabla[token]
    for token in mensaje.split()
)

print(resultado)
```

Resultado:

```text
ACADEMY{M0RS3C0D31SFUN218CF979}
```

## Notas adicionales

- La tabla del código reproduce los símbolos presentes en este mensaje.
- El código Morse no distingue mayúsculas de minúsculas. La representación obtenida se muestra en mayúsculas.
- Si la plataforma exige su prefijo en minúsculas, la variante registrada en el chat es:

```text
academy{M0RS3C0D31SFUN218CF979}
```

## Referencias

- [Conversación con el mensaje y la solución](https://chatgpt.com/share/6acd12fb-e128-83e8-8198-d54fc84f0bb4)
- Código Morse internacional.

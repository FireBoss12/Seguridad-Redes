## Descripción

Reto de criptografía en el que se pregunta qué significan las banderas de la imagen [flag.png](https://challenge-files.cylabacademy.net/library/187296d0c352a8451662153842fc9794b9f247a1ac949978113ddfcb9a1bb76f/flag.png). Se deben interpretar las señales náuticas como letras y números.

## Solución

1. Descargar y abrir `flag.png`.

2. Leer las banderas de izquierda a derecha. El prefijo representado en la imagen es `PICOCTF` y las llaves aparecen dibujadas como texto.

3. Sustituir las señales del interior de las llaves por sus caracteres:

| Posición | Carácter |
| --- | --- |
| 1 | `F` |
| 2 | `1` |
| 3 | `A` |
| 4 | `G` |
| 5 | `5` |
| 6 | `A` |
| 7 | `N` |
| 8 | `D` |
| 9 | `5` |
| 10 | `T` |
| 11 | `U` |
| 12 | `F` |
| 13 | `F` |

4. Concatenar el mensaje conservando el prefijo de la imagen:

```text
PICOCTF{F1AG5AND5TUFF}
```

La transcripción corresponde a la imagen original revisada el 21 de octubre de 2026. No se registró una validación de esta cadena en la plataforma durante esta documentación.

## Notas adicionales

- La letra `F` aparece como un rombo rojo sobre fondo blanco; `N`, como un patrón de cuadros azules y blancos.
- En el contenido hay dígitos `1` y `5`; deben distinguirse de las letras de aspecto parecido.
- Se conserva `PICOCTF` en mayúsculas, tal como está representado. Las variantes con prefijo `academy` o `picoCTF` no son la transcripción literal.
- El reto se resuelve por reconocimiento de señales; no requiere extraer datos ocultos ni ejecutar un script.

## Referencias

- [Imagen original flag.png](https://challenge-files.cylabacademy.net/library/187296d0c352a8451662153842fc9794b9f247a1ac949978113ddfcb9a1bb76f/flag.png)
- [Conversación con la revisión de la imagen](https://chatgpt.com/share/6ad8f2fc-e384-83e8-8820-5eea40621d6b)
- [Alfabeto y banderas de señales — Naval History and Heritage Command](https://www.history.navy.mil/research/library/online-reading-room/title-list-alphabetically/p/phonetic-alphabet-and-signal-flags.html)

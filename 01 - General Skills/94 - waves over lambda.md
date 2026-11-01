## Descripción

Reto de criptografía que utiliza una sustitución monoalfabética: cada letra cifrada se reemplaza siempre por la misma letra del texto original. El mensaje contiene una frase inicial con la flag y un fragmento narrativo en inglés.

Mensaje recibido:

```text
kpeslmvf hglg uf xpal ycms - ylgbagekx_uf_k_pdgl_cmotqm_dqqkspfcpv

jg jglg epv oakh oplg vhme m bamlvgl py me hpal pav py pal fhur vucc jg fmj hgl fuei, meq vhge u aeqglfvppq ypl vhg yulfv vuog jhmv jmf ogmev tx m fhur ypaeqglues ue vhg fgm.  u oafv mkiepjcgqsg u hmq hmlqcx gxgf vp cppi ar jhge vhg fgmoge vpcq og fhg jmf fueiues; ypl ylpo vhg opogev vhmv vhgx lmvhgl rav og uevp vhg tpmv vhme vhmv u oushv tg fmuq vp sp ue, ox hgmlv jmf, mf uv jglg, qgmq juvhue og, rmlvcx juvh ylushv, rmlvcx juvh hpllpl py oueq, meq vhg vhpashvf py jhmv jmf xgv tgyplg og.
```

## Solución

1. Buscar patrones repetidos. La secuencia `jg jglg` corresponde a `we were`, lo que permite identificar `j → w`, `g → e` y `l → r`.

2. Reconocer la frase inicial `congrats here is your flag` y completar las equivalencias usando el resto del texto.

3. Construir la tabla de sustitución utilizada en este mensaje.

```text
Cifrado: abcdefghijklmopqrstuvxy
Original: uqlvnsehkwcramodpgbityf
```

4. Guardar el mensaje cifrado en `mensaje.txt` y aplicar la tabla con Python.

```python
with open("mensaje.txt", encoding="utf-8") as archivo:
    cifrado = archivo.read()

tabla = str.maketrans(
    "abcdefghijklmopqrstuvxy",
    "uqlvnsehkwcramodpgbityf"
)

texto = cifrado.translate(tabla)
print(texto)
```

La primera línea recuperada fue:

```text
congrats here is your flag - frequency_is_c_over_lambda_vddcgoslot
```

Solución:

```text
frequency_is_c_over_lambda_vddcgoslot
```

## Notas adicionales

- El texto cifrado se obtiene al conectarse a la instancia del reto.
- La tabla contiene las equivalencias de todas las letras presentes en el mensaje.
- Los espacios, números y signos se conservan.
- El valor aparece sin llaves ni prefijo en el texto descifrado.
- El sufijo de la flag corresponde a esta instancia del reto y puede variar en otro mensaje.

## Referencias

- [Conversación con el mensaje cifrado y la solución](https://chatgpt.com/share/6acd12fb-e128-83e8-8198-d54fc84f0bb4)
- Sustitución monoalfabética y análisis de frecuencia.

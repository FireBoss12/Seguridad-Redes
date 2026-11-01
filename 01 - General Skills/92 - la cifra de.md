## Descripción

Reto de criptografía en el que se proporciona un texto cifrado sobre la historia del cifrado Vigenère. Es necesario identificar la clave y recuperar la flag incluida en el mensaje.

Mensaje recibido:

```text
Ne iy nytkwpsznyg nth it mtsztcy vjzprj zfzjy rkhpibj nrkitt ltc tnnygy ysee itd tte cxjltk

Ifrosr tnj noawde uk siyyzre, yse Bnretèwp Cousex mls hjpn xjtnbjytki xatd eisjd

Iz bls lfwskqj azycihzeej yz Brftsk ip Volpnèxj ls oy hay tcimnyarqj dkxnrogpd os 1553 my Mnzvgs Mazytszf Merqlsu ny hox moup Wa inqrg ipl. Ynr. Gotgat Gltzndtg Gplrfdo

Ltc tnj tmvqpmkseaznzn uk ehox nivmpr g ylbrj ts ltcmki my yqtdosr tnj wocjc hgqq ol fy oxitngwj arusahje fuw ln guaaxjytrd catizm tzxbkw zf vqlckx hizm ceyupcz yz tnj fpvjc hgqqaifoesd{m311a50_0x_a1rn3x3_h1ah3xgm955b0g}

Yse lncsz bplr-izcarpnzjo dkxnroueius zf g uzlefwpnfmeznn cousex mzwkapr, cfd mgip axtfnj 1467 gj Lkty Bgyeiyyl Argprzn.

Ehk Atgksèce Inahkw ts zmprkkzrk xzmkytmkx narqpd zmp Argprzn Oiyh zr Gqmexyt Cousex.

Ny 1508, Jumlntjd Txnehkrtuy nyvkseej yse yt-narqpd zfmurf ceiyl (a sferoc zf ymtfzjo arusahjes) zmlt ctflj qltkw me g hciznnar hzmvtyety zf zmp Volpnèxj Nivmpr.

Hjwlgxz’s yjnoti moupwez fapkfcej ny 1555 ay f notytnafeius zf zmp fowdt. Zmp lubpr nfwvkx zf zmp arusahjes gwp nub dhokeej wpgaqlrrd, muz yse gqahggpty fyd zmp itipx rjetkwd axj xidjo be rpatx zf g ryestyii ppy vmcayj, hhohs cgs me jnqfkwpnz bttn jlcn hzrxjdpusoety.
```

## Solución

1. Identificar un cifrado Vigenère. El inicio `Ne iy` corresponde a `It is`; con `K = (C - P) mod 26` se obtiene la clave `FLAG`.

2. Repetir la clave únicamente sobre las letras del alfabeto inglés y aplicar `P = (C - K) mod 26`. Los espacios, números, signos y letras acentuadas se conservan sin avanzar la clave.

3. Guardar el texto cifrado en `mensaje.txt` y ejecutar el siguiente código.

```python
import re

clave = "FLAG"
with open("mensaje.txt", encoding="utf-8") as archivo:
    cifrado = archivo.read()

resultado = []
posicion = 0

for caracter in cifrado:
    if "A" <= caracter <= "Z" or "a" <= caracter <= "z":
        base = ord("A") if caracter.isupper() else ord("a")
        desplazamiento = ord(clave[posicion % len(clave)]) - ord("A")
        resultado.append(chr((ord(caracter) - base - desplazamiento) % 26 + base))
        posicion += 1
    else:
        resultado.append(caracter)

texto = "".join(resultado)
print(texto)
print(re.search(r"academy\{[^}]+\}", texto).group(0))
```

El mensaje descifrado comienza con:

```text
It is interesting how in history people often receive credit for things they did not create

During the course of history, the Vigenère Cipher has been reinvented many times
```

4. Extraer la flag del texto recuperado.

Resultado:

```text
academy{b311a50_0r_v1gn3r3_c1ph3rbb955b0a}
```

## Notas adicionales

- El mensaje se obtiene al conectarse a la instancia del reto; se documenta el texto de la instancia compartida.
- La clave utilizada fue `FLAG`.
- La clave avanza únicamente al procesar caracteres `A-Z` o `a-z`. Aplicarla también a las letras acentuadas cambia el resultado.
- La flag aparece junto al texto histórico, sin un espacio previo.
- El resultado corresponde al mensaje de esta instancia del reto.

## Referencias

- [Conversación con el mensaje cifrado y la solución](https://chatgpt.com/share/6acd12fb-e128-83e8-8198-d54fc84f0bb4)
- Cifrado Vigenère y tabla recta.

## Descripción

Reto de criptografía de dificultad media de picoCTF 2021, creado por Sara. Propone revisar qué ocurre cuando el módulo `n` de RSA es pequeño. Se proporcionan `n`, `e` y el ciphertext en el archivo `values`.

## Solución

1. Descargar el [archivo values](https://challenge-files.cylabacademy.net/library/e712cf9934db77224f35b37326b9c7867a0f2941cc6fa3c7d5a041ddf348fcac/values).

2. Factorizar `n`. Se consultó FactorDB y se comprobaron los dos factores multiplicándolos:

```text
p = 2074606527507983503944226222695401999839
q = 659880377875535146491994798968813949893149
```

3. Calcular la función de Euler y el exponente privado:

```text
tn = (p - 1) * (q - 1)
d = pow(e, -1, tn)
m = pow(c, d, n)
```

4. Convertir el mensaje recuperado a texto. En esta instancia, la conversión habitual en big-endian muestra los caracteres en orden inverso; se utiliza little-endian para leer la flag.

```python
n = 1368992139315019955067447961537607041364451719382349005056752379702694554965203011
e = 65537
c = 717608817902276639011922897702552744324264244069272484013719744328086856277690292
p = 2074606527507983503944226222695401999839
q = 659880377875535146491994798968813949893149

assert p * q == n
tn = (p - 1) * (q - 1)
d = pow(e, -1, tn)
m = pow(c, d, n)
assert pow(m, e, n) == c

# Esta instancia representa el mensaje con el orden de bytes little-endian.
texto = m.to_bytes((m.bit_length() + 7) // 8, "little").decode()
print(texto.strip())
```

Solución:

```text
academy{sma11_N_n0_g0od_a3ac7152}
```

5. Enviar la flag a CyLab. Fue aceptada y el reto quedó marcado como resuelto el 19 de octubre de 2026.

## Notas adicionales

- El problema está en la posibilidad de factorizar el módulo de esta instancia.
- Se verificó que `p * q == n` y que volver a cifrar el mensaje recuperado produce el ciphertext original.
- El orden de bytes afecta cómo se interpreta el entero como texto. Con big-endian se obtiene la flag al revés; little-endian recupera el orden correcto de esta versión.
- `e = 65537` no impide el descifrado cuando se conocen los factores de `n`.

## Referencias

- [Mind your Ps and Qs — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13360/162)
- [Archivo original values](https://challenge-files.cylabacademy.net/library/e712cf9934db77224f35b37326b9c7867a0f2941cc6fa3c7d5a041ddf348fcac/values)
- [Factorización consultada en FactorDB](https://factordb.com/index.php?query=1368992139315019955067447961537607041364451719382349005056752379702694554965203011)

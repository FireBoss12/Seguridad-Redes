## Descripción

**EVEN RSA CAN BE BROKEN???**, reto de criptografía de picoCTF 2025, creado por Michael Crotty.

Un servicio entrega una flag cifrada y los valores públicos de RSA. Se debe analizar el módulo para recuperar el mensaje.

## Solución

1. Iniciar la instancia y conectarse al servicio. En la sesión utilizada:

```bash
nc xebec.cylabacademy.net 47749
```

2. Leer `N`, `e` y `cyphertext`. El módulo recibido es par, por lo que uno de sus factores primos es `2`.

3. Calcular el otro factor y la función de Euler:

```text
p = 2
q = N // 2
phi(N) = (p - 1) * (q - 1) = q - 1
```

4. Obtener el exponente privado, descifrar y comprobar el resultado con los parámetros de la sesión:

```python
n = 24269887718709067691180970625419863173394048868609369745399986798178927851996467259208309581403825411378733485290932462571445959989397627393538772605229662
e = 65537
c = 20859458711712371115165189045071643254063707563290850403082880660641429154886578815557682301742852512173566875013238969780219152642599326687920880703545209

assert n % 2 == 0
p = 2
q = n // p
tn = (p - 1) * (q - 1)
d = pow(e, -1, tn)
m = pow(c, d, n)
assert pow(m, e, n) == c

print(m.to_bytes((m.bit_length() + 7) // 8, "big").decode())
```

Solución:

```text
academy{tw0_1$_pr!m39cf1fb4f}
```

La bandera se introdujo en CyLab y fue aceptada el **24 de octubre de 2026**. La plataforma la registró como **Solved late**, ya que la tarea estaba cerrada.

## Notas adicionales

- El módulo de esta instancia es par: basta una división entre dos para factorizarlo.
- Se verificó que volver a cifrar el plaintext recuperado produce el ciphertext original.
- El archivo `encrypt.py` solicita los primos mediante `get_primes`; su implementación no está incluida. La debilidad se identifica directamente en el módulo recibido.
- El puerto y los parámetros pueden cambiar en otra instancia.

## Referencias

- [EVEN RSA CAN BE BROKEN??? — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13441/470)
- [Código original encrypt.py](https://challenge-files.cylabacademy.net/library/742b4d10be646510247831837d9876dafee7f7eb0eea7ee82eaf8f04981ef2d3/encrypt.py)

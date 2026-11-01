## Descripción

Examinar parámetros criptográficos y el código para recuperar el mensaje; el enunciado sugiere una debilidad en un valor pequeño.

## Solución

1. Descargar los archivos originales indicados en las referencias y colocarlos juntos en una carpeta de trabajo.

2. El código genera un exponente privado d de 256 bits para un módulo de aproximadamente 2096 bits. Se aplicó el ataque de Wiener mediante convergentes de la fracción continua e/n.

3. Ejecutar el siguiente código con Python 3 desde esa carpeta:

```python
from pathlib import Path
from math import isqrt
x = dict(line.split(' = ',1) for line in Path('message.txt').read_text().strip().splitlines())
n,e,c = (int(x[k]) for k in ('n','e','c'))
a,b = e,n
p0,p1,q0,q1 = 0,1,1,0
while b:
    coef = a//b
    a,b = b,a%b
    k,d = coef*p1+p0,coef*q1+q0
    p0,p1,q0,q1 = p1,k,q1,d
    if k==0 or (e*d-1)%k:
        continue
    phi = (e*d-1)//k
    s = n-phi+1
    discriminante = s*s-4*n
    if discriminante >= 0 and isqrt(discriminante)**2 == discriminante:
        p = (s+isqrt(discriminante))//2
        q = (s-isqrt(discriminante))//2
        if p*q != n:
            continue
        m = pow(c,d,n)
        assert pow(m,e,n) == c
        print(m.to_bytes((m.bit_length()+7)//8,'big').decode())
        break
```

4. El análisis recuperó esta bandera:

```text
academy{sm4ll_d_073963cb}
```

5. Introducir la bandera en CyLab Security Academy. **Fue aceptada** y se observó `Challenge solved!` el **31 de octubre de 2026**.

## Notas adicionales

Un módulo grande no compensa un exponente privado demasiado pequeño. Se comprobó el discriminante de la ecuación de los factores y el producto p*q.

## Referencias

- [Small Trouble — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13495/718)
- [message.txt](https://challenge-files.cylabacademy.net/library/3a16f68729491af8a7840a7cc2a1244c8d49b8da749f91330e5cf92516820f1f/message.txt)
- [encryption.py](https://challenge-files.cylabacademy.net/library/3a16f68729491af8a7840a7cc2a1244c8d49b8da749f91330e5cf92516820f1f/encryption.py)

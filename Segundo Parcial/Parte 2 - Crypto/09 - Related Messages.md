## Descripción

Analizar dos mensajes relacionados cifrados con RSA tras corregir un error tipográfico.

## Solución

1. Descargar los archivos originales indicados en las referencias y colocarlos juntos en una carpeta de trabajo.

2. Se cifraron dos mensajes relacionados con el mismo N y exponente e=17. output.txt filtra Message-Message_fixed=-3. El máximo común divisor de dos polinomios módulo N permite recuperar el mensaje corregido.

3. Ejecutar el siguiente código con Python 3 desde esa carpeta:

```python
from pathlib import Path
from math import comb
c1,c2,delta,N = map(int, Path('output.txt').read_text().split())
e = 17
def trim(a):
    while a and a[-1]==0:
        a.pop()
    return a
def rem(a,b):
    a = a[:]
    inv = pow(b[-1],-1,N)
    while len(a)>=len(b):
        pos = len(a)-len(b)
        factor = a[-1]*inv % N
        for i,v in enumerate(b):
            a[pos+i] = (a[pos+i]-factor*v) % N
        trim(a)
    return a
# x es Message_fixed; Message = x + delta.
f = [(-c2)%N] + [0]*(e-1) + [1]
g = [comb(e,i)*pow(delta,e-i,N)%N for i in range(e+1)]
g[0] = (g[0]-c1)%N
while g:
    f,g = g,rem(f,g)
assert len(f)==2
m = (-f[0]*pow(f[1],-1,N)) % N
assert pow(m,e,N)==c2 and pow(m+delta,e,N)==c1
print(m.to_bytes((m.bit_length()+7)//8,'big').decode())
```

4. El análisis recuperó esta bandera:

```text
academy{m3ssage_w1th_typ0}
```

5. Introducir la bandera en CyLab Security Academy. **Fue aceptada** y se observó `Challenge solved!` el **31 de octubre de 2026**.

## Notas adicionales

Es un ataque de mensajes relacionados de Franklin-Reiter. Los coeficientes del código están en orden de grado creciente. Se verificaron los dos ciphertexts antes de convertir el entero a texto.

## Referencias

- [Related Messages — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13495/713)
- [chall.py](https://challenge-files.cylabacademy.net/library/d33371f1a01fd9671ac08d9ce0a486325fd0e8ed66ce83fc97ee9a5a07a64cb9/chall.py)
- [output.txt](https://challenge-files.cylabacademy.net/library/d33371f1a01fd9671ac08d9ce0a486325fd0e8ed66ce83fc97ee9a5a07a64cb9/output.txt)

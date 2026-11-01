## Descripción
Cookie Monster has hidden his top-secret cookie recipe somewhere on his website. As an aspiring cookie detective, your mission is to uncover this delectable secret. Can you outsmart Cookie Monster and find the hidden recipe? You can access the Cookie Monster [here](http://chatelaine.cylabacademy.net:33002/) and good luck
## Solución
```
┌──(kali㉿kali)-[~]
└─$ curl -i -s -X POST http://xebec.cylabacademy.net:28527/login.php -d "username=test&password=test"
HTTP/1.1 200 OK
Date: Thu, 01 Oct 2026 18:38:48 GMT
Server: Apache/2.4.68 (Debian)
X-Powered-By: PHP/8.3.33
Set-Cookie: secret_recipe=YWNhZGVteXtjMDBrMWVfbTBuc3Rlcl9sMHZlc19jMDBraWVzXzFFMDY0MjJBfQ%3D%3D; expires=Thu, 01 Oct 2026 19:38:48 GMT; Max-Age=3600; path=/
Vary: Accept-Encoding
Content-Length: 167
Content-Type: text/html; charset=UTF-8

<h1>Access Denied</h1><p>Cookie Monster says: 'Me no need password. Me just need cookies!'</p><p>Hint: Have you checked your cookies lately?</p><a href='/'>Go back</a>                                                                                                                                                                                                                                           
┌──(kali㉿kali)-[~]
└─$ python3 - <<'PY'
import urllib.parse
import base64

cookie = "YWNhZGVteXtjMDBrMWVfbTBuc3Rlcl9sMHZlc19jMDBraWVzXzFFMDY0MjJBfQ%3D%3D"

decoded_url = urllib.parse.unquote(cookie)
flag = base64.b64decode(decoded_url).decode()

print(flag)
PY
```
Solución:
academy{c00k1e_m0nster_l0ves_c00kies_22E83C85}
## Notas adicionales

## Referencias
- Firefox
- http://chatelaine.cylabacademy.net:33002/
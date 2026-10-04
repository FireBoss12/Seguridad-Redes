## Descripción
Alright, enough of using my own encryption. Flask session cookies should be plenty secure! [server.py](https://challenge-files.cylabacademy.net/library/c424f4d4e7dce22f005f91fbdde5810705f89174622720a89563603e569df59d/server.py) [http://xebec.cylabacademy.net:44991/](http://xebec.cylabacademy.net:44991/)
## Solución
```
curl -s -i http://wily-courier.picoctf.net:55166/

Set-Cookie: session=eyJ2ZXJ5X2F1dGgiOiJibGFuayJ9.arH4WQ.PpYiWbqz1PR6R36_T3d2cmUOJik; HttpOnly; Path=/

{"very_auth":"blank"}

tassie

eyJ2ZXJ5X2F1dGgiOiJhZG1pbiJ9.arH4dA.Uww1NjWe9855AKHd16t0vj8myh0

curl -s -b "session=eyJ2ZXJ5X2F1dGgiOiJhZG1pbiJ9.arH4dA.Uww1NjWe9855AKHd16t0vj8myh0" http://wily-courier.picoctf.net:55166/display

Flag: academy{cO0ki3s_yum_a5389124}
```
Solución:
academy{cO0ki3s_yum_a5389124}
## Notas adicionales
## Referencias

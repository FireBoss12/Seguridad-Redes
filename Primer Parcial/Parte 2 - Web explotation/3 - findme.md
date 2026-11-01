## Descripción
Help us test the form by submiting the username as `test` and password as `test!` The website running [here](http://xebec.cylabacademy.net:43380/).
## Solución
```
┌──(kali㉿kali)-[~]
└─$ curl -i -s http://xebec.cylabacademy.net:16868/
HTTP/1.1 200 OK
X-Powered-By: Express
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Last-Modified: Wed, 23 Sep 2026 00:59:17 GMT
ETag: W/"42e-1a0cbc62a88"
Content-Type: text/html; charset=UTF-8
Content-Length: 1070
Date: Thu, 01 Oct 2026 18:44:15 GMT
Connection: keep-alive
Keep-Alive: timeout=5

<!DOCTYPE html>
<html>

<head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Welcome</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootswatch/3.2.0/united/bootstrap.min.css" />
        <style type="text/css">
                .form-signin {
                        width: 100%;
                        max-width: 420px;
                        padding: 15px;
                        margin: auto;
                }
        </style>
</head>

<body>
        <div class="text-center">
                <h1>Help us test this form</h1>
                <h1>username:test and password:test!</h1>
        </div>
        <form class="form-signin" action="/login" method="post">
                <div class="text-center mb-4">
                        <!-- user input-->

                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" placeholder="username" class="form-control" required autofocus />
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" class="form-control" placeholder="Password" required />
                        <br.>
                                <!-- submit button -->
                                <input type="submit" id="loginForm" class="btn btn-success" value="test" />

                </div>
        </form>
</body>

</html>                                                                                                                                                                                                                                           
┌──(kali㉿kali)-[~]
└─$ curl -i -s -X POST http://xebec.cylabacademy.net:16868/login -d "username=test&password=test!"
dquote> curl -i -s http://xebec.cylabacademy.net:16868/next-page/id=YWNhZGVteXtwcm94aWVzX2Fs
dquote> 
                                                                                                                                                                                                                                           
┌──(kali㉿kali)-[~]
└─$ curl -i -s http://xebec.cylabacademy.net:16868/next-page/id=YWNhZGVteXtwcm94aWVzX2Fs
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 264
ETag: W/"108-QpnKO6MaCB+MAK9lFBxYgXMuYnM"
Date: Thu, 01 Oct 2026 18:44:59 GMT
Connection: keep-alive
Keep-Alive: timeout=5

<!DOCTYPE html>
<head>
    <title>flag</title>
</head>
<body>
    <script>
        setTimeout(function () {
           // after 2 seconds
           window.location = "/next-page/id=bF90aGVfd2F5Xzg0MmUzYTI4fQ==";
        }, 0.5)
      </script>
    <p></p>
</body>                                                                                                                                                                                                                                           
┌──(kali㉿kali)-[~]
└─$ python3 - <<'PY'
import base64

parts = [
    "YWNhZGVteXtwcm94aWVzX2Fs",
    "bF90aGVfd2F5Xzg0MmUzYTI4fQ=="
]

print("".join(base64.b64decode(p).decode() for p in parts))
PY
```

Solución:
```
academy{proxies_all_the_way_af51e23b}
```
## Notas adicionales

## Referencias
- FireFox
- KaliLinux
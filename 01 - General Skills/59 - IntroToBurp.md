## DESCRIPCION
This website puts a two-factor prompt between you and the flag. Register an account, then take a close look at the requests your browser is actually sending. Try [here](http://chatelaine.cylabacademy.net:15247/) to find the flag
## SOLUCION
```

Me registré normalmente con el usuario Francisco en el formulario principal.

Después el sitio redirigió a /dashboard y pidió un código OTP.

La petición normal del OTP usa formulario, pero modifiqué la petición para mandarla vacia, sin nada

El servidor omitió la validación correcta del OTP y respondió:

Welcome, sasa you sucessfully bypassed the OTP request.
Your Flag: academy{#0TP_Bypvss_SuCc3$S_007829ce}

```

## NOTAS ADICIONALES
- Se usa el burpSuite para interceptar
## REFERENCIAS
- Gemini IA
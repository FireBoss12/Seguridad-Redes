## Descripción
How about trying to match a regular expression

The website is running [here](http://saturn.picoctf.net:60705/).
## Solución
- Acceder al enlace del sitio web proporcionado en el reto.
- Abrir las herramientas de desarrollador del navegador (clic derecho -> Inspeccionar)
- Revisar el código fuente. Dentro de la etiqueta `<script>` se encuentra un comentario con la pista del patrón: `// ^p.....F!?`.
- Analizar la expresión regular:
    
    - `^p` : La cadena debe iniciar con la letra "p".
	
	- `.....` : Representa exactamente 5 caracteres cualesquiera (los puntos son comodines)
	- `F` : Termina con una "F" mayúscula.
- La palabra `picoCTF` cumple exactamente con esta estructura
- Ingresar `picoCTF` en el cuadro de texto de la página y enviar.
- La página mostrará una alerta emergente con la flag.
Solución:
picoCTF{succ3ssfully_matchtheregex_8ad436ed}
## Notas adicionales
- **Expresión Regular (Regex):** Secuencia de caracteres que define un patrón de búsqueda. Es muy útil para validar formatos o encontrar texto específico.
- **Metacarácter (`.`):** En Regex, el punto actúa como un comodín que equivale a cualquier carácter individual.
## Referencias
- Regex101 (Para probar y entender patrones Regex): [https://regex101.com/](https://regex101.com/?utm_source=gemini)
    
- MDN Web Docs - Expresiones Regulares: [https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions?utm_source=gemini)
## Descripción

Un reporte financiero contiene información censurada. Algunas partes se ocultaron correctamente y otras solamente se cubrieron visualmente. Se debe recuperar una clave que no se eliminó del PDF. Reto de Forensics, dificultad media, de picoCTF 2022.

## Solución

1. Descargar `Financial_Report_for_ABC_Labs.pdf`.

2. Extraer el texto del PDF, en lugar de limitarse a leer su representación visual. Se utilizó `pypdf`:

```python
from pypdf import PdfReader

lector = PdfReader("Financial_Report_for_ABC_Labs.pdf")
for pagina in lector.pages:
    print(pagina.extract_text())
```

3. La extracción muestra, entre otras líneas:

```text
Breakdown - Just painted over in MS word.
This is not the flag, keep looking
Expenses from the
academy{C4n_Y0u_S33_m3_fully}
Redacted document.
```

4. Identificar la cadena con formato de bandera y enviarla. La plataforma confirma `Correct flag!`.

Solución:

```text
academy{C4n_Y0u_S33_m3_fully}
```

La bandera fue introducida en la plataforma y aceptada con el mensaje `Correct flag!` el 17 de octubre de 2026.

## Notas adicionales

- Cubrir un texto con una figura no garantiza que se elimine del archivo.
- La línea `This is not the flag, keep looking` es un señuelo.
- Dependencia: `python -m pip install pypdf`.

## Referencias

- [Redaction gone wrong — CyLab Security Academy](https://learn.cylabacademy.org/assignments/13116/290)
- [Archivo original del reto](https://challenge-files.cylabacademy.net/library/455e6e9581a9272cf0cd6a8f2da0a7cdcfefdb52dc7a7f9c09a27705e2c94103/Financial_Report_for_ABC_Labs.pdf)

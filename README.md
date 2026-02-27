# 📚 Biblioteca Colaborativa

Este proyecto tiene como objetivo **aprender a trabajar colaborativamente con Git y GitHub** creando una biblioteca digital.  
Cada participante añadirá su propio libro siguiendo un flujo común, lo que permitirá practicar clonación de repositorios, creación de archivos, edición de un archivo compartido y gestión de cambios.

---

## 🚀 Cómo participar

### 1. Clonar el repositorio
Descarga el proyecto en tu máquina local:
```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>
```
### 2. Crear tu página de libro
- En la carpeta pages/ encontrarás un archivo llamado template.html.
- Haz una copia de ese archivo y renómbralo con el título de tu libro, por ejemplo:
```bash
pages/template.html
```
- Edita el contenido para que refleje la información de tu libro: **Título**,**Autor**,**Descripción**

### 3. Editar el archivo principal
Abre index.html y añade un enlace a tu nueva página de libro dentro de la lista de la biblioteca.
```bash

<li><a href="pages/orwell.html">1984</a></li>

```
### 4. Registrar tus cambios en Git
Guarda y sube tus modificaciones
```bash
git add .
git commit -m "Añadí mi libro: [libro]"
git push
```

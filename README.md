# Todo List App con Nuxt 3

## Configuración y Ejecución

### Requisitos Previos
- Node.js 
- pnpm
- MongoDB

### Pasos para Configurar y Ejecutar la Aplicación

1. Clonar el repositorio:
git clone [https://github.com/tu-usuario/todo-list-app.git](https://github.com/https://github.com/LAMMedina/To-Do-List)
cd todo-list-app


2. Instalar dependencias:
pnpm install en raiz del proyecto y en frontend


3. Iniciar MongoDB:
Crear un cluster en MongoDB Atlas y crear un usuario con acceso a la base de datos.
Crear un archivo .env en la raiz del proyecto y agregar la siguiente linea:
MONGODB_URI=mongodb+srv://**usuario**:**contraseña**@cluster0.cdbug.mongodb.net/**nombre_de_la_base_de_datos**?retryWrites=true&w=majority&appName=Cluster0

4. Iniciar el servidor de desarrollo:
En la raiz del proyecto ejecutar:
pnpm run dev


5. Abrir la aplicación:
Visita `http://localhost:3000` en tu navegador.

## Decisiones Técnicas

Como alguien nuevo en Nuxt.js, tomé varias decisiones técnicas basadas en mi investigación y aprendizaje:


1. **Componentes**: Dividí la aplicación en componentes reutilizables (TaskList, TaskForm, TaskEdit) para mejorar la organización del código y la mantenibilidad. La verdad ya tenia componentes parecidos en otros proyectos de react. Y pues use la documentacion de nuxt para crearlos. aunque no se si sea la mejor manera de hacerlo.

2. **Fetch API**: Utilicé la Fetch API nativa para las llamadas a la API en lugar de axios porque axios al parecer no lo soporta Nuxt 3, pero la Fetch API es más que suficiente para mis necesidades.

3. **Tailwind CSS**: Implementé Tailwind para el diseño, la verdad me encanta usarlo y es muy facil de usar, ademas que los componentes de react que ya tenia los tenian implementados.

4. **MongoDB**: Elegí MongoDB como base de datos por su fácil integración con Node.js. Anque no sabia Mongo antes, habia trabajado mas con mysql, libsql de turso, y postgresql. 



# Mi Aprendizaje con Nuxt.js

Como alguien que no sabia trabajar en Nuxt.js, enfrenté este proyecto como una oportunidad emocionante para aprender y crecer como desarrollador. Aquí está un resumen de mi proceso de aprendizaje:

## Recursos Utilizados

1. **Documentación Oficial de Nuxt.js**: https://nuxt.com/docs
   - Esta fue mi primera parada para entender los conceptos básicos de Nuxt 3.

2. **Tutorial de YouTube "Aprende Nuxt.js 3 Ahora!" por Yirsis Hertz**: https://www.youtube.com/watch?v=PxeQ9xBUyxM
   - Este video fue increíblemente útil para ver cómo se construye una aplicación real con Nuxt 3.

3. **Foro de la Comunidad Nuxt.js**: https://github.com/nuxt/nuxt/discussions
   - Un recurso invaluable para resolver dudas específicas y ver cómo otros desarrolladores abordan problemas similares.

## Desafíos y Soluciones

1. **Entender la estructura de Nuxt 3**: 
   - Desafío: La estructura de carpetas y el enrutamiento automático eran similar a astro que es el framework que usaba antes, pero no exactamente igual.
   - Solución: Practiqué creando páginas y componentes con el video de Yirsis Hertz, y experimenté con el enrutamiento y bueno tampoco es tan complicado.

2. **Optimización**:
**Cachear las consultas a la base de datos.**
   - Desafío: Son pocos datos a cachear y no se si valdra la pena usar cache, pero bueno es una buena practica, aparte que es bueno para el rendimiento ya que se actualizara y no se hara una consulta cada vez. y para que no quede siempre cacheado use un TTL de 60 segundos.
   - Solución: Me apoye de la documentacion de node cache y de la libreria de express-cache-middleware para implementarla en mi backend. La decidi implementar con node cache ya que es mas sencilla de usar y no requiere de una configuracion adicional.

   *Beneficios:*
- Reduce la carga en la base de datos
- Mejora los tiempos de respuesta para consultas frecuentes
- Aumenta la escalabilidad de la aplicación

**Lazy loading de las paginas.**
   Implementé lazy loading para los componentes `TaskForm` y `TaskEdit` utilizando `defineAsyncComponent`. Esto mejora el tiempo de carga inicial de la aplicación al cargar estos componentes solo cuando son necesarios.

   *Beneficios:*
- Reduce el tamaño del bundle inicial
- Mejora el tiempo de carga de la página principal
- Optimiza el uso de recursos del cliente


3. **Depuración de Errores**: 
   - Desafío: A veces, los errores en Nuxt no eran claros o fáciles de rastrear.
   - Solución: me apoye en leer cuidadosamente los registros de errores de Nuxt e invesitgarlos a ver de que trataba el error.

4. **Seguridad**:
   - Desafío: Me costo entender la implementacion de seguridad en nuxt, y como se hacia.
   - Solución: Me apoye en el uso de helmet para los encabezados de seguridad y csp para la politica de seguridad de mi backend.


# Reflexiones Finales y Lecciones Aprendidas

Como desarrollador novato en Nuxt.js, este proyecto ha sido una experiencia de aprendizaje increíblemente valiosa. Aquí comparto algunas reflexiones finales y lecciones clave que he aprendido:

1. **La importancia de la planificación**: Al principio, me lancé directamente a codificar sin una planificación adecuada. Pronto me di cuenta de que tomar el tiempo para planificar la estructura de la aplicación y sus componentes ahorra mucho tiempo y dolores de cabeza a largo plazo.

2. **Aprender a leer documentación**: Al principio, me sentía abrumado por la documentación oficial de Nuxt.js. Sin embargo, aprendí que dedicar tiempo a leer y entender la documentación es crucial. Ahora, siempre empiezo con la documentación oficial antes de buscar tutoriales o preguntar en foros.

3. **La comunidad es un recurso valioso**: Aunque no encontre muchos tutoriales de nuxt 3 de los divulgadores que sigo de los cuales me gusta aprender vi mucha variedad de formas de implementar el SPA nativo, igual con la documentacion oficial de nuxt 3 fse puede lograr casi cualquier cosa.

4. **Equilibrio entre rendimiento y funcionalidad**: Aprendí que es importante encontrar un equilibrio entre añadir nuevas características y mantener un buen rendimiento. Las optimizaciones que implementé me enseñaron a pensar en el rendimiento desde las etapas iniciales del desarrollo.

5. **Seguridad desde el diseño**: Implementar medidas de seguridad me hizo darme cuenta de que la seguridad no debe ser una ocurrencia tardía, sino que debe considerarse desde el principio del diseño de la aplicación. ya que es muy importante.

6. **La potencia de los frameworks modernos**: Trabajar con Nuxt.js me mostró cuán poderosos pueden ser los frameworks modernos. La cantidad de funcionalidades es impresionante y me ayudó a entender por qué estos frameworks son tan populares en el desarrollo web actual.

7. **Nunca dejar de aprender**: Este proyecto me enseñó que en el desarrollo web, siempre hay algo nuevo que aprender. Me siento motivado para seguir explorando y aprendiendo más sobre Nuxt.js y otras tecnologías relacionadas.

En general, aunque hubo momentos de frustración y desafíos, y no dormi para poder completar este proyecto me ha dado una gran sensación de logro. Me siento mucho más confiado en mis habilidades con Nuxt.js y emocionado por aplicar lo que he aprendido en futuros proyectos.
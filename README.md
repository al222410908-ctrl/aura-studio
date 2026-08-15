# Aura Studio

Actúa como un Diseñador UI/UX Senior y Desarrollador Frontend Expert en React, Tailwind CSS y Framer Motion. 

Quiero que crees la interfaz completa para: [EJEMPLO: Una plataforma SaaS de gestión de proyectos / Una landing page para una agencia de diseño / Un panel de administración].

Nombre de la marca/proyecto: [NOMBRE DE TU MARCA/PROYECTO].

---

### 🎨 1. SISTEMA DE DISEÑO Y ESTÉTICA (ANTI-CLICHÉ DE IA)

- EVITA TOTALMENTE el aspecto "IA genérica" (nada de gradientes neón púrpura/azul brillante sobre fondo negro puro).

- Paleta de Colores: Usa una paleta sofisticada, editorial y moderna:

  * Fondo principal: [EJEMPLO: Dark Mode elegante con carbón profundo #0D0F12 o Light Mode cálido arena/alabastro #F8F7F4].

  * Superficies/Tarjetas: Tonalidades sutilmente contrastadas con bordes ultra-finos (border-slate-800/20 o ring-1).

  * Color de Acento: [EJEMPLO: Verde esmeralda apagado, Terracota refinado, o Azul Cobalto profundo].

- Tipografía: Utiliza jerarquía visual marcada con tipografías modernas (como 'Plus Jakarta Sans', 'Satoshi' o 'Inter'). Títulos en semibold/bold con `letter-spacing` ajustado (`tracking-tight`), textos legibles en escala fija.

- Profundidad: Micro-sombras suaves, textura o sutiles efectos de cristal (backdrop-blur) bien aplicados, sin abusar.

---

### 📐 2. ESTRUCTURA Y UX (INFORMACIÓN CLARA Y COMPLETA)

- Muestra la información de forma transparente y legible desde el primer vistazo. No ocultes contenido clave dentro de desplegables innecesarios o scrollbars ocultos.

- La estructura debe incluir las siguientes secciones organizadas de forma lógica y fluida:

  1. [Sección 1: Hero con propuesta de valor clara, badge flotante, visual principal y CTAs principales]

  2. [Sección 2: Prueba social / Métricas o logos de clientes]

  3. [Sección 3: Características clave / Módulos interactivos en formato grid asimétrico/Bento Grid]

  4. [Sección 4: Demostración visual / Preview de producto]

  5. [Sección 5: Precios / Planes con toggle mensual/anual o Tabla comparativa clara]

  6. [Sección 6: Preguntas Frecuentes (FAQ) en formato Accordion dinámico]

  7. [Sección 7: Footer completo con enlaces organizados, copyright y badges de estado]

---

### 📱 3. RESPONSIVIDAD PERFECTA Y ESTABILIDAD (ZERO BUGS)

- Mobile-First & Tablet/iPad Native: Adapta los layouts de forma nativa.

  * Escritorio: Grids de 3 o 4 columnas con espacio amplio.

  * iPad/Tablet: Reorganización a 2 columnas bien espaciadas, menú responsivo o hamburguesa pulido.

  * Móvil: Contenedores en 1 sola columna, botones con área de toque amplia (mínimo 44px de alto), navegación inferior o drawer fluido.

- Estabilidad: Aplica `overflow-x-hidden` en el contenedor principal para prevenir cualquier scroll horizontal no deseado o elementos desbordados.

---

### ⚡ 4. ANIMACIONES Y MICRO-INTERACCIONES

- Utiliza animaciones suaves y elegantes (Framer Motion o Tailwind transitions):

  * Carga inicial (Entrance): Revelado progresivo de componentes de abajo hacia arriba (`fade-in-up`) con ligero `stagger`.

  * Micro-interacciones: Efecto hover sutil en tarjetas (`scale-[1.01]`, elevación de sombra, o iluminación sutil en el borde).

  * Botones: Feedback inmediato al hacer click/hover (cambio de tono refinado, no brincos bruscos).

  * Transiciones: Todas las transiciones deben tener duración `duration-300` o `duration-200` y curva `ease-out`.

---

### 🛠️ 5. REGLAS DE CÓDIGO

- Crea componentes modulares, limpios y bien comentados.

- Utiliza iconos de Lucide-React consistentes en tamaño y grosor de línea.

- Genera datos de prueba (mock data) reales y detallados (no textos 'Lorem Ipsum' genéricos, pon texto real en español ajustado al nicho).

Genera la página/interfaz completa, funcional, interactiva y con el código pulido listo para ser usado.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a67b6f19-33e6-4481-b437-82350c7f6bfc).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

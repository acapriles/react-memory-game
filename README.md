## Juego de Memoria en React

Este proyecto es el resultado de un recto aboral. 

---

### Demo e instalación:

[Demo online](https://6467fb2aa4054b2565b3cd28--aesthetic-melomakarona-d6c8ec.netlify.app/home)

```plaintext
cd nombre_proyecto
yarn
yarn dev
```

### Instrucciones del juego:

Inicio del juego:

*   Las cartas se barajan.
*   Se muestran por 3 segundos.
*   Se colocan boca abajo.

Desarrollo del juego:

*   Cuando dos cartas son seleccionadas, deben ser comparadas para verificar si son iguales, además de aumentar el contador de turnos.
*   Si hay un match, las cartas deben permanecer por 1 seg y luego desaparecer, además de aumentar el contador de aciertos.
*   Si no hay un match, las cartas deben permanecer por 1 seg y luego volver a esconderse (mientras las cartas se muestren no se deben poder seleccionar otras cartas).

Conclusión del juego:

*   Una vez que todos los pares de cartas sean encontrados, debe mostrarse un mensaje indicando en cuantos turnos terminó el juego y dos botones: Repetir e Inicio. El botón de repetir reiniciará el juego y el botón de inicio redireccionará a la Vista principal.

---

### Tecnologías y plataformas utilizadas:

*   Vite
*   React 18
*   TypeScript
*   Axios
*   React Router V6
*   Redux Tool Kit
*   SASS
*   React Card Flip
*   The Rick and Morty API
*   RESTful API

---

### Estructura de carpetas del Proyecto:

```plaintext
-memory-game
    -api (configuración de axios y manejo de api)
    -assets (imágenes estáticas)
    -components (componentes o widgets usados en las pantallas)
    -helpers (funciones usadas dentro del proyecto)
    -interfaces (definición de las interfaces globales de TS)
    -layouts (template del diseño global)
    -pages (páginas o vistas principales)
    -routes (sistema de navegación de la app)
    -sass (todo lo correspondiente con el diseño gráfico)
    -store (menejo del estado global de la app a través de Redux)
    -App.tsx y main.tsx (punto de inicio del sistema)
```

---

### Consideraciones finales:

El proyecto no pose pruebas unitarias ni tampon pruebas de integración.
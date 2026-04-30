# 🌍 Countries Explorer

Aplicación web construida con **React + TypeScript + Vite** que permite explorar países, filtrarlos por región y descubrir lugares cercanos como restaurantes, hoteles y parques.

---

## ✨ Características

- 🔍 Búsqueda de países en tiempo real
- 🌎 Filtro por continentes
- 📍 Exploración de lugares cercanos (restaurantes, cafés, bares, etc.)
- ⚡ Navegación rápida con React Router
- 💅 UI moderna con TailwindCSS
- 🔄 Manejo de estado con URL params (query state)
- ⏳ Skeleton loaders para mejor UX

---

## 📸 Vista previa

![Home](public/preview-1.png)

![Places](public/preview-2.png)

---

## 🛠️ Tecnologías

- ⚛️ React
- 🟦 TypeScript
- ⚡ Vite
- 🎨 TailwindCSS
- 🔁 React Query
- 🧭 React Router

---

## 🚀 Instalación

```bash
# Clonar repositorio
git clone https://github.com/Lainercaceres11/places-country.git

# Entrar al proyecto
cd tu-repo

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

---

## 🔐 Variables de entorno

Antes de ejecutar el proyecto, debes crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
VITE_PEXELS_ACCESS_KEY=your_pexels_api_key
VITE_RAPID_API_KEY=your_rapidapi_key
VITE_RAPID_API_HOST=your_rapidapi_host
VITE_PLACES_KEY=your_places_api_key
```

## 📂 Estructura del proyecto

```

src/
│
├── components/
├── hooks/
├── pages/
├── features/
├── request/
└── providers/

```

---

## 🧠 Hooks personalizados

El proyecto incluye hooks reutilizables como:

- `useQueryState` → sincroniza estado con la URL
- `useCountries` → obtiene países por región
- `usePlacesNearby` → obtiene lugares cercanos

---

## 🎯 Mejores prácticas implementadas

- Separación de lógica en hooks
- Componentes reutilizables
- Manejo de estados de carga
- Evita re-renders innecesarios
- Código tipado con TypeScript

---

## 📦 Build

```bash
npm run build
```

---

## 📄 Licencia

MIT

---

## 👨‍💻 Autor

Desarrollado por **Lainer Caceres**

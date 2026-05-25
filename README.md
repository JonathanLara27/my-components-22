# Components Design System

[![Angular](https://img.shields.io/badge/Angular-17+-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![Sass](https://img.shields.io/badge/Sass-hotpink?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh/)

Librería de componentes UI y sistema de diseño modular basado en **Angular**, estructurado bajo los principios de **Clean Architecture** y **Atomic Design**. Este proyecto centraliza los *Design Tokens* y componentes core para Grupo Red Salud, garantizando consistencia visual, escalabilidad y mantenibilidad.

## 🚀 Características Principales

* **Arquitectura Modular:** Basado en el patrón 7-1 (ITCSS), separando tokens, componentes y layouts.
* **Tokens Semánticos:** Sistema de variables que permite *theming* completo (branding) sin modificar la lógica del componente.
* **Reactividad Eficiente:** Implementación con `ChangeDetectionStrategy.OnPush` y Angular Signals.
* **Tipografía y Grilla:** Sistema robusto de utilidades CSS para layouts coherentes.

## 📂 Estructura del Proyecto

```text
src/app/scss/
├── abstracts/    # Variables (Tokens), Mixins, Funciones
├── base/         # Reset, Utilities, Tipografía
├── components/   # Botones, Cards, Inputs, Banners
└── layout/       # Grid System, Page Layouts
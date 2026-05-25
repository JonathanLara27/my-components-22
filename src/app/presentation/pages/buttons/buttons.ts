import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; // Si necesitas ngClass/ngStyle, aunque el control flow no lo exige

interface ButtonConfig {
  label: string;
  variantClass: string;
  sizeClass?: string;
  isDisabled?: boolean;
  icon?: string;
}

@Component({
  selector: 'app-buttons',
  standalone: true, // Implícito en v17+, pero buena práctica declararlo
  imports: [CommonModule],
  templateUrl: './buttons.html',
  styleUrl: './buttons.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Buttons {

  // Catálogo de componentes para renderizar
  public buttonCatalog = signal<ButtonConfig[]>([
    // ==========================================
    // 🔴 1. PRIMARIOS (Alta prioridad)
    // ==========================================
    { label: 'Primario', variantClass: 'btn-primary' },
    { label: 'Primario Small', variantClass: 'btn-primary', sizeClass: 'btn-sm' },
    { label: 'Primario Large', variantClass: 'btn-primary', sizeClass: 'btn-lg' },
    { label: 'Guardar', variantClass: 'btn-primary', icon: 'save' },
    { label: 'Deshabilitado', variantClass: 'btn-primary', isDisabled: true },

    // ==========================================
    // 🔵 2. SECUNDARIOS (Prioridad Media)
    // ==========================================
    { label: 'Secundario', variantClass: 'btn-secondary' },
    { label: 'Secundario Small', variantClass: 'btn-secondary', sizeClass: 'btn-sm' },
    { label: 'Secundario Large', variantClass: 'btn-secondary', sizeClass: 'btn-lg' },
    { label: 'Filtrar', variantClass: 'btn-secondary', icon: 'filter_alt' },
    { label: 'Deshabilitado', variantClass: 'btn-secondary', isDisabled: true },

    // ==========================================
    // ⚪ 4. OUTLINES (Contornos)
    // ==========================================
    { label: 'Outline Base', variantClass: 'btn-outline' },
    { label: 'Outline Primary', variantClass: 'btn-outline-primary' },
    { label: 'Outline Secondary', variantClass: 'btn-outline-secondary' },
    { label: 'Outline Small', variantClass: 'btn-outline', sizeClass: 'btn-sm' },
    { label: 'Outline Large', variantClass: 'btn-outline', sizeClass: 'btn-lg' },
    { label: 'Imprimir', variantClass: 'btn-outline', icon: 'print' },
    // { label: 'Deshabilitado', variantClass: 'btn-outline', isDisabled: true },

    // ==========================================
    // 👻 5. TEXT BUTTONS (Fantasmas)
    // ==========================================
    { label: 'Text Button', variantClass: 'btn-text' },
    { label: 'Text Small', variantClass: 'btn-text', sizeClass: 'btn-sm' },
    { label: 'Leer más', variantClass: 'btn-text', icon: 'read_more' },
    // { label: 'Deshabilitado', variantClass: 'btn-text', isDisabled: true },

    // ==========================================
    // 🔣 6. ICON BUTTONS (Para Tablas / Toolbars)
    // ==========================================
    // Ícono Primario (Ej. Botón de agregar nuevo registro)
    { label: '', variantClass: 'btn-primary', sizeClass: 'btn-icon', icon: 'add' },

    // Íconos Outline (Ej. Acciones de tabla estándar)
    { label: '', variantClass: 'btn-outline', sizeClass: 'btn-icon', icon: 'edit' },
    { label: '', variantClass: 'btn-outline-primary', sizeClass: 'btn-icon', icon: 'share' },

    // Ícono Text (Ej. Menú de tres puntos "kebab" muy usado en M3)
    { label: '', variantClass: 'btn-text', sizeClass: 'btn-icon', icon: 'more_vert' },

    // Tamaños especiales de Íconos
    { label: '', variantClass: 'btn-outline', sizeClass: 'btn-icon btn-sm', icon: 'visibility' },
    { label: '', variantClass: 'btn-primary', sizeClass: 'btn-icon btn-lg', icon: 'search' },

    // Ícono Deshabilitado
    { label: '', variantClass: 'btn-outline', sizeClass: 'btn-icon', icon: 'delete', isDisabled: true },
  ]).asReadonly();

}
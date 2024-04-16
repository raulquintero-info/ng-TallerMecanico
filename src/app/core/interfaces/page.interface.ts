export interface Page<T> {
    content: T[]; // Los elementos de la página actual
    totalPages: number; // Número total de páginas
    totalElements: number; // Número total de elementos en todas las páginas
    number: number; // Número de la página actual
    size: number; // Tamaño de la página (número de elementos por página)
    // Otras propiedades relevantes para la paginación, como si hay una página siguiente/anterior, etc.
  }
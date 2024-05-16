export interface Category {
  id_categoria: number;
  nombre: string;
  fechacreacion?: Date| null;
  fk_creadopor?: number | null;
  fechaactualizacion?: Date| null;
  fk_actualizadopor?: number| null;
  fechaeliminacion?: Date | null;
  fk_eliminadopor?: number | null;
  }
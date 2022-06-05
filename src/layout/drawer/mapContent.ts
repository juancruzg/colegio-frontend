import { DrawerSections } from "@/enums/DrawerSections";

export const sectionWordingMap = new Map<DrawerSections, string>([
  [DrawerSections.ADMINISTRATION, "Administración"],
  [DrawerSections.ADVANCED_CONFIG, "Configuración avanzada"],
  [DrawerSections.REPORTS, "Reportes"],
]);

export const content = {
  students: {
    label: "Alumnos",
    caption: "Ver o editar alumnos",
  },
  classrooms: {
    label: "Aulas",
    caption: "Administrar aulas",
  },
  standardBearers: {
    label: "Abanderados",
    caption: "Ver abanderados y su promedio",
  },
  marks: {
    label: "Notas",
    caption: "Filtrar notas por alumno, curso, materia, etc",
  },
  subjects: {
    label: "Materias",
    caption: "Agregar, editar o quitar materias",
  },
  grades: {
    label: "Años",
    caption: "Agregar, editar o quitar años",
  },
  divisions: {
    label: "Divisiones",
    caption: "Agregar o quitar divisiones",
  },
};

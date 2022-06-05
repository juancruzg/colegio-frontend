import { Genders } from "@/enums/Genders";

export const gendersMap = new Map<Genders, string>([
  [Genders.MALE, "Masculino"],
  [Genders.FEMALE, "Femenino"],
  [Genders.OTHER, "Otro"],
]);

export const studentForm = {
  name: {
    label: "Nombre",
    missingText: "Por favor escribe un nombre",
  },
  surname: {
    label: "Apellido",
    missingText: "Por favor escribe un apellido",
  },
  id: {
    label: "DNI",
    missingText: "Por favor escribe un DNI",
    invalidText: "Por favor ingrese un DNI válido",
  },
  birthDate: {
    label: "Fecha de nacimiento",
    missingText: "Por favor selecciona una fecha de nacimiento",
    greaterThanTodayText:
      "Por favor selecciona una fecha de nacimiento menor a hoy",
  },
  address1: {
    label: "Calle",
  },
  address2: {
    label: "Número",
  },
  city: {
    label: "Ciudad",
  },
  state: {
    label: "Provincia",
  },
  phoneNumber: {
    label: "Teléfono",
  },
  email: {
    label: "Email",
  },
  submitButton: "guardar",
};

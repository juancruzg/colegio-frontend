import { Genders } from "@/enums/Genders";

export const gendersMap = new Map<Genders, string>([
  [Genders.MALE, "Masculino"],
  [Genders.FEMALE, "Femenino"],
  [Genders.OTHER, "Otro"],
]);

export const gendersOptionContent = {
  label: "Género",
};

import { States } from "@/enums/States";

export const statesMap = new Map<States, string>([
  [States.BUENOS_AIRES, "Buenos Aires"],
  [States.CATAMARCA, "Catamarca"],
  [States.CHACO, "Chaco"],
  [States.CHUBUT, "Chubut"],
  [States.CORDOBA, "Córdoba"],
  [States.CORRIENTES, "Corrientes"],
  [States.ENTRE_RIOS, "Entre Ríos"],
  [States.FORMOSA, "Formosa"],
  [States.JUJUY, "Jujuy"],
  [States.LA_PAMPA, "La Pampa"],
  [States.LA_RIOJA, "La Rioja"],
  [States.MENDOZA, "Mendoza"],
  [States.MISIONES, "Misiones"],
  [States.NEUQUEN, "Neuquén"],
  [States.RIO_NEGRO, "Río Negro"],
  [States.SALTA, "Salta"],
  [States.SANTA_CRUZ, "Santa Cruz"],
  [States.SANTA_FE, "Santa Fe"],
  [States.SANTIAGO_DEL_ESTERO, "Santiago del Estero"],
  [States.SAN_JUAN, "San Juan"],
  [States.SAN_LUIS, "San Luis"],
  [States.TIERRA_DEL_FUEGO, "Tierra del Fuego"],
  [States.TUCUMAN, "Tucumán"],
]);

export const statesOptionContent = {
  label: "Provincia",
};

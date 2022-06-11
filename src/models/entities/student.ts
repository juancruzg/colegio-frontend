import { Genders } from "@/enums/Genders";

export interface Student {
  id: number;
  name: string;
  surname: string;
  birthDate?: Date | null;
  grade?: number | null;
  division?: string | null;
  address1?: string | null;
  address2?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  city?: string | null;
  state?: string | null;
  gender?: Genders | null;
}

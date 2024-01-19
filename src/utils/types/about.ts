import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type CardValueProps = {
  logo: StaticImport;
  tittle: string;
  description?: string;
};

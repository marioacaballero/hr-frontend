import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CardValueProps {
  logo: StaticImport;
  tittle: string;
  description: string;
}

function CardValue({ logo, tittle, description }: CardValueProps) {
  return (
    <div className="mx-28 flex w-96 flex-col items-center justify-center gap-2 px-3">
      <Image alt="logo" src={logo} width={100} height={100} />
      <h3 className="mt-4 h-20 px-10 text-center text-3xl font-medium">
        {tittle}
      </h3>
      <p className="h-40 w-full rounded-2xl bg-gray-300 p-4 text-center text-xl shadow-md shadow-gray-400">
        {description}
      </p>
    </div>
  );
}

export default CardValue;

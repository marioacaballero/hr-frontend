import Image from "next/image";
import comunity from "../../../../public/Comunidad.png";

function Comunity() {
  return (
    <div className="flex flex-col items-center justify-between bg-white pb-16 pt-24">
      <h2 className="mb-6 w-full text-center text-3xl font-medium">
        Nuestra Comunidad
      </h2>
      <Image src={comunity} alt="comunity" sizes="100vw" className="w-full" />
    </div>
  );
}

export default Comunity;

import { LiaSaveSolid } from "react-icons/lia";
import { MdOutlineChangeCircle } from "react-icons/md";
import { TbFileSearch } from "react-icons/tb";

const LeftPanel = () => {
  return (
    <div className="flex w-1/6 flex-col gap-6 px-4 py-32">
      <label className="flex items-center gap-2 font-semibold hover:text-verde-loro">
        <MdOutlineChangeCircle className="text-3xl" />
        <p>Cambiar de aviso</p>
      </label>
      <label className="flex items-center gap-2 font-semibold hover:text-verde-loro">
        <TbFileSearch className="text-3xl" />
        <p>Vista previa</p>
      </label>
      <label className="flex items-center gap-2 font-semibold hover:text-verde-loro">
        <LiaSaveSolid className="text-3xl" />
        <p>Guardar borrador</p>
      </label>
    </div>
  );
};

export default LeftPanel;

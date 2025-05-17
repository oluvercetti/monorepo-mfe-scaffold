
import  CustomizationPanel from "../../../components/brand-styling/navbar-design/customization-panel";
import  NavbarPreviewTab from "../../../components/brand-styling/navbar-design/navbar-preview-tab";
import BreadCrumb from "../../../components/brand-styling/navbar-design/bread-crumb";
import { useNavbarDesignStore , Colors} from "../../../stores/navbar-design-store"

export default function NavbarDesign() {
  const colors = useNavbarDesignStore((s) => s.colors);
    const setColor = useNavbarDesignStore((s) => s.setColor);
    const resetColor = () => {
      Object.keys(colors).forEach((key) => {
        setColor(key as keyof typeof Colors, Colors[key as keyof typeof Colors]);
      });
    }
    const isColorsDefault = Object.keys(Colors).every(
  (key) => colors[key] === Colors[key]
);
//
    return (
      <>
      <BreadCrumb/>
      <div className="flex min-h-screen ">
        <CustomizationPanel />
        <div className="flex-1 flex flex-col">
         
          <NavbarPreviewTab />
        </div>
      </div>
      <div className="bg-white h-16 flex justify-end items-center">
        <button
            type="button"
            className="h-10  rounded-lg border  w-32 border-[#EBEBEB] bg-white font-medium text-[#333333] text-[12px] leading-[18px] font-medium mr-2"
            onClick={() =>  resetColor()}
          >
            Cancel
          </button>
          <button
            type="button"
            className={`h-10  rounded-lg text-[14px] w-32 font-medium ${!isColorsDefault? 'bg-[#1659E6] text-white ' : 'text-[#C4C5C7] bg-[#F5F5F5] cursor-not-allowed'}`}
            
            disabled={isColorsDefault}
          >
            Save
          </button>
      </div>
      </>
    );
}
import CustomizationPanel from "../../../components/brand-styling/login-page-design/customization-panel";
import LoginPreview from "../../../components/brand-styling/login-page-design/login-preview";
import BreadCrumb from "../../../components/brand-styling/login-page-design/bread-crumb";

export default function LoginPageCustomization() {
  return (
    <>
    <BreadCrumb />
    <div className="flex">
        
      <CustomizationPanel />
      <div className="flex-1 flex items-center justify-center ">
        <LoginPreview />
      </div>
    </div>
    </>
  );
}
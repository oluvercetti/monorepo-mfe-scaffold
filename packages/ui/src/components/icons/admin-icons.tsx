import {
  Bell,
  CircleDollarSign,
  FileBox,
  FileSpreadsheet,
  LayoutGrid,
  ListChecks,
  Mail,
  Palette,
  Tags,
  Users,
} from "lucide-react";

export const BrandIcon = () => <Palette className="h-5 w-5 text-blue-600" />;
export const EntitiesIcon = () => <LayoutGrid className="h-5 w-5 text-blue-600" />;
export const ReusableListIcon = () => <ListChecks className="h-5 w-5 text-blue-600" />;

export const UsersIcon = () => <Users className="h-5 w-5 text-blue-600" />;
export const RolesIcon = () => <FileSpreadsheet className="h-5 w-5 text-blue-600" />;
export const TeamsIcon = () => <Users className="h-5 w-5 text-blue-600" />;

export const ModulesIcon = () => <FileBox className="h-5 w-5 text-blue-600" />;

export const ServiceCategoryIcon = () => <Tags className="h-5 w-5 text-blue-600" />;
export const ServiceIcon = () => <Tags className="h-5 w-5 text-blue-600" />;
export const BusinessObjectIcon = () => <CircleDollarSign className="h-5 w-5 text-blue-600" />;
export const AssetManagementIcon = () => <FileBox className="h-5 w-5 text-blue-600" />;

export const AlertIcon = () => <Bell className="h-5 w-5 fill-blue-600 text-blue-600" />;
export const EmailIcon = () => <Mail className="h-5 w-5 fill-blue-600 text-white" />;

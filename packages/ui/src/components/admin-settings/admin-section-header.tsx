interface AdminSectionHeaderProps {
  number: number;
  title: string;
  description: string;
}

const AdminSectionHeader = ({ number, title, description }: AdminSectionHeaderProps) => {
  return (
    <div className="mb-4 mt-8 flex flex-col gap-1">
      <h2 className="font-bold">
        {number}. {title}
      </h2>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export { AdminSectionHeader };

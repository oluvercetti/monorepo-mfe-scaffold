import UsersTable from "./users-table";

const UsersLayout = () => {
  return (
    <div className="rounded-lg bg-white p-4">
      <h2 className="text-2xl font-bold">Users</h2>
      <UsersTable />
    </div>
  );
};

export default UsersLayout;

import DashboardForm from "../page/testimonialchange";

const Topbar = () => (
  <>
    <div className="h-16 bg-white shadow-md flex items-center justify-between px-4 ml-64">
      <div className="font-semibold text-lg">Dashboard</div>
      <div>User Menu</div>
    </div>
    <DashboardForm />
  </>
);

export default Topbar;

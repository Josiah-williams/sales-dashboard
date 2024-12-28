import Sidebar from "./component/Sidebar";
import LeadFilter from './component/LeadFilter';
import DashboardCards from "../app/component/DashboardCards";
import DashboardTable from "../app/component/DashboardTable";

export default function Dashboard() {
  return (
    <div className="flex w-[100%] p-6 space-y-6">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-100 max-w-full overflow-hidden ">
       <LeadFilter />
        <main className="p-3 space-y-6 w-[100%] mr-[2px]">
          <DashboardCards />
          <DashboardTable />
        </main>
      </div>
    </div>
  );
}

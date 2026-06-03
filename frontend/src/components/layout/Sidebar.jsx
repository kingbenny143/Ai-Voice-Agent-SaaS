import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiPhone,
  FiCalendar,
  FiBarChart2,
  FiBook,
  FiSettings,
  FiCreditCard,
} from "react-icons/fi";

const Sidebar = () => {
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-200
    ${
      isActive
        ? "bg-slate-700 text-white"
        : "text-gray-300 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <div className="mb-10 gap-1 flex items-center justify-center">
        <h2 className="text-2xl font-bold">
          AI Voice Agent
        </h2>
      </div>

      <nav className="flex flex-col gap-7">

        <NavLink to="/dashboard" className={navLinkClass}>
          <FiHome size={20} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/calls" className={navLinkClass}>
          <FiPhone size={20} />
          <span>Phone Calls</span>
        </NavLink>

        <NavLink to="/bookings" className={navLinkClass}>
          <FiCalendar size={20} />
          <span>Bookings</span>
        </NavLink>

        <NavLink to="/knowledge-base" className={navLinkClass}>
          <FiBook size={20} />
          <span>Knowledge Base</span>
        </NavLink>

        <NavLink to="/ai-settings" className={navLinkClass}>
          <FiSettings size={20} />
          <span>AI Settings</span>
        </NavLink>

        <NavLink to="/analytics" className={navLinkClass}>
          <FiBarChart2 size={20} />
          <span>Analytics</span>
        </NavLink>

        <NavLink to="/billing" className={navLinkClass}>
          <FiCreditCard size={20} />
          <span>Billing</span>
        </NavLink>

      </nav>
    </aside>
  );
};

export default Sidebar;
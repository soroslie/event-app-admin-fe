import SidebarItem from './Sidebar/SidebarItem';

export default function Sidebar() {
  return (
    <div
      className="h-screen fixed overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6"
    >
      <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
        <h5 className="text-center">Event App Dashboard</h5>
        <div className="flex flex-col">
          <hr className="my-4 min-w-full" />

          <ul className="flex-col min-w-full flex list-none">
            <SidebarItem path="/" title="Home" />
            <SidebarItem path="/event" title="Event" />
            <SidebarItem path="/users" title="User" />
          </ul>

          <ul className="flex-col min-w-full flex list-none absolute bottom-0">
            <button
              className="bg-gradient-to-tr font-bold from-orange-400 to-orange-600 px-4 rounded-lg text-white flex items-center text-center justify-center gap-4 text-sm font-light py-3"
              type="button"
            >
              Logout
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

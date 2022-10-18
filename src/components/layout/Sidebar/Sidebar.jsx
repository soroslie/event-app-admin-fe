import { useNavigate } from 'react-router-dom';
import LocalStorageConstant from '../../../constants/local_storage';
import SidebarItem from './SidebarItem';
import SideBarButton from './SideBarButton';
import Divider from './Divider';

export default function Sidebar() {
  const navigate = useNavigate();
  const doLogout = () => {
    localStorage.removeItem(LocalStorageConstant.tokenKey);
    navigate('/login');
  };
  return (
    <div className="h-full fixed overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-40 md:w-64 z-10 py-4 md:px-6 px-3">
      <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
        <h5 className="text-center">Event App Dashboard</h5>
        <div className="flex flex-col">
          <Divider />
          <ul className="flex-col min-w-full flex list-none">
            <SidebarItem path="/" title="home" />
            <SidebarItem path="/event" title="event" />
            <SidebarItem path="/users" title="user" />
          </ul>
          <hr className="mx-2 min-w-full" />
          <ul className="flex-col min-w-full flex list-none">
            <SidebarItem path="/merchandise" title="merchandise" />
          </ul>
          <ul className="flex-col min-w-full flex list-none absolute bottom-0">
            <Divider />
            <SidebarItem path="/profile" title="profile" />
            <SideBarButton onClick={doLogout} title="logout" />
          </ul>
        </div>
      </div>
    </div>
  );
}

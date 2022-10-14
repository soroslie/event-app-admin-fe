import { useNavigate } from 'react-router-dom';
import LocalStorageConstant from '../../constants/local_storage';
import SidebarItem from './Sidebar/SidebarItem';
import SideBarButton from './Sidebar/SideBarButton';
import Divider from './Sidebar/Divider';

export default function Sidebar() {
  const navigate = useNavigate();
  const doLogout = () => {
    localStorage.removeItem(LocalStorageConstant.tokenKey);
    navigate('/login');
  };
  return (
    <div className="h-full fixed overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6">
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

          <ul className="flex-col min-w-full flex list-none absolute bottom-0">
            <Divider />
            <SidebarItem path="/profile" title="profile" />
            <Divider />
            <SideBarButton onClick={doLogout} title="logout" />
          </ul>
        </div>
      </div>
    </div>
  );
}

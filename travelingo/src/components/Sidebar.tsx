import { useState } from 'react';
import {
  HomeIcon,
  TicketIcon,
  StarIcon,
  MessageSquareIcon,
  ReceiptIcon,
  SettingsIcon,
  LogOutIcon,
  ArrowRightIcon,
  MenuIcon,
  XIcon,
} from 'lucide-react';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    if (window.innerWidth < 1024) setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-emerald-500 rounded-md text-white shadow-md"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon size={24} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-white px-6 py-8 flex flex-col justify-between
          rounded-tr-3xl rounded-br-3xl w-64 z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:flex
        `}
      >
        {/* Close Button (Mobile Only) */}
        <button
          className="lg:hidden self-end mb-6 p-2 rounded-md text-gray-600 hover:bg-gray-200"
          onClick={() => setIsOpen(false)}
        >
          <XIcon size={24} />
        </button>

        {/* Logo & Navigation */}
        <div className="mt-16 flex flex-col flex-grow overflow-y-auto mb-5">
          <h1 className="text-2xl font-sans font-bold mb-12">Travelingo</h1>
          <nav className="space-y-4 flex-grow mt-6">
            <SidebarItem icon={<HomeIcon size={20} />} label="Dashboard" active onClick={handleItemClick} />
            <SidebarItem icon={<TicketIcon size={20} />} label="Ticket" onClick={handleItemClick} />
            <SidebarItem icon={<StarIcon size={20} />} label="Favorite" onClick={handleItemClick} />
            <SidebarItem icon={<MessageSquareIcon size={20} />} label="Message" onClick={handleItemClick} />
            <SidebarItem icon={<ReceiptIcon size={20} />} label="Transaction" onClick={handleItemClick} />
            <SidebarItem icon={<SettingsIcon size={20} />} label="Setting" onClick={handleItemClick} />
          </nav>
        </div>

        {/* Discount Card & Log Out */}
        <div className="sm:mt-5 mb-3 p-3">
          <div className="bg-emerald-50 p-6 rounded-2xl relative overflow-hidden shadow-lg h-52 mb-8 sm:mt-5 ">
            <div className="text-orange-500 font-bold text-lg">
              50% <span className="text-black">Discount</span>
            </div>
            <p className="text-xs text-gray-600 mt-1 mb-8">
              Get a discount on certain days and don’t miss it.
            </p>
            <button className="bg-orange-500 h-8 w-8 rounded-full flex items-center justify-center text-white absolute bottom-4 right-4 shadow">
              <ArrowRightIcon size={16} />
            </button>
            <div className="absolute -bottom-4 -left-2 w-10 h-15 bg-emerald-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-200 rounded-full opacity-30"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-emerald-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-emerald-300 rounded-full opacity-80"></div>
          </div>

          <button
            onClick={handleItemClick}
            className="flex items-center space-x-3 text-gray-400 py-3 px-4 rounded-xl w-full hover:text-gray-600 mb-10"
          >
            <LogOutIcon size={20} />
            <span className="font-medium">Log Out</span>
          </button>
        </div>
      </aside>
    </>
  );
};

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  active?: boolean;
};

const SidebarItem = ({ icon, label, onClick, active = false }: SidebarItemProps) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-3 py-3 px-4 rounded-xl w-full 
      ${active ? 'bg-emerald-500 text-white shadow-lg' : 'text-gray-400 hover:bg-gray-100'}
    `}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </button>
);

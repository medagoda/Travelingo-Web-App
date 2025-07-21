import { SearchIcon, BellIcon } from 'lucide-react';

export const Header = () => {
  return (
    <div className="rounded-2xl p-4 sm:p-5">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full">
        {/* Left: Greeting */}
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Hello, Jemmy 👋🏻</h1>
          <p className="text-[11px] sm:text-xs mt-1 sm:mt-2 text-gray-500 font-semibold">
            Welcome back and explore the world
          </p>
        </div>

        {/* Right: Search + Notification */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-auto gap-3 sm:gap-4">
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <SearchIcon
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 rounded-3xl"
            />
            <input
              type="text"
              placeholder="Search direction"
              className="bg-white py-2 pl-10 pr-4 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
            />
          </div>

          {/* Notification Bell */}
          <div className="relative hover:scale-110 cursor-pointer">
            <div className="bg-white p-3 rounded-full">
              <BellIcon size={20} className="text-gray-500" />
            </div>
            <span className="absolute -top-1 -right-1 bg-orange-500 text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">
              2
            </span>
          </div> 
        </div>
      </div>
    </div>
  );
};

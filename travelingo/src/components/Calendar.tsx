import { ArrowRightIcon, ArrowLeftIcon, ChevronDownIcon } from 'lucide-react';

export const Calendar = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = [
    [27, 28, 29, 30, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31],
  ];

  const getDateClassName = (date: number) => {
    if (date === 3) return 'text-emerald-500';
    if (date === 20) return 'bg-emerald-500 text-white rounded-full';
    if (date === 21) return 'text-emerald-500';
    if (date === 22) return 'text-emerald-500';
    if (date === 23) return 'bg-emerald-500 text-white rounded-full';
    if (date < 1 || date > 31) return 'text-gray-300';
    return '';
  };

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 w-full mt-6">
      {/* Profile Header */}
      <div className="flex items-center justify-between flex-wrap mb-10">
        <div className="flex items-center space-x-3">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-sm">Jemmy Max</p>
            <p className="text-gray-500 text-xs">Traveler Enthusiast</p>
          </div>
        </div>
        <button className="p-1 hover:bg-gray-100 h-8 w-8 rounded-full flex items-center justify-center text-gray-500 shadow mt-2 sm:mt-0">
          <ChevronDownIcon size={16} />
        </button>
      </div>

      {/* Month Navigation */}
      <div className="flex justify-between items-center">
        <div className="flex items-center mb-10">
          <h2 className="text-lg sm:text-xl font-bold mt-5">May</h2>
          <span className="ml-2 text-gray-500 text-sm sm:text-base mt-5">2025</span>
        </div>
        <div className="flex space-x-2">
          <button className="p-1 hover:bg-gray-100 h-8 w-8 rounded-full flex items-center justify-center text-gray-300 shadow">
            <ArrowLeftIcon size={16} />
          </button>
          <button className="p-1 hover:bg-gray-100 h-8 w-8 rounded-full flex items-center justify-center text-gray-500 shadow">
            <ArrowRightIcon size={16} />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm overflow-x-auto">
        {days.map((day) => (
          <div key={day} className="text-gray-500 py-1 font-medium">
            {day}
          </div>
        ))}
        {dates.flat().map((date, index) => (
          <div key={index} className={`py-1 ${getDateClassName(date)}`}>
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

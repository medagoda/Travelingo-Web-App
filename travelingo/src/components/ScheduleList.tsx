import { MoreHorizontalIcon, CalendarIcon } from 'lucide-react';

export const ScheduleList = () => {
  const schedules = [
    {
      id: 1,
      title: 'Crocked Forest',
      date: '20 may - 23 may',
      attendees: 2,
      contacts: [
        'https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/men/2.jpg',
      ],
      image:
        'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1474&q=80',
    },
    {
      id: 2,
      title: 'Fem Waterfall',
      date: '20 may - 23 may',
      attendees: 2,
      contacts: [
        'https://randomuser.me/api/portraits/women/3.jpg',
        'https://randomuser.me/api/portraits/men/4.jpg',
      ],
      image:
        'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 3,
      title: 'Night Camping',
      date: '20 may - 23 may',
      attendees: 2,
      contacts: [
        'https://randomuser.me/api/portraits/men/5.jpg',
        'https://randomuser.me/api/portraits/women/6.jpg',
      ],
      image:
        'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1405&q=80',
    },
  ];

  return (

    <div className="bg-white rounded-xl p-6 -mt-6">
      <div className="flex justify-between items-center -mb-1">
        <h2 className="text-xl font-bold">My Schedule</h2>
        <button>
          <MoreHorizontalIcon size={20} className="text-gray-500" />
        </button>
      </div>
      <div className="space-y-8 p-6 mt-8">
        {schedules.map((schedule) => (
          <div
            key={schedule.id}
            className="flex items-center bg-white rounded-2xl shadow-md p-4 -mt-8 border border-gray-200 hover:-translate-x-3 hover:cursor-pointer"
          >
            <img
              src={schedule.image}
              alt={schedule.title}
              className="w-16 h-16 rounded-xl object-cover"
            />
            <div className="ml-4 flex-1">
              <h3 className="font-medium text-black">{schedule.title}</h3>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <CalendarIcon size={14} className="mr-1" />
                {schedule.date}
              </div>
              <div className="flex items-center mt-2 space-x-1">
                <span className="text-xs text-emerald-500">+{schedule.attendees}</span>
                <div className="flex space-x-1">
                  {schedule.contacts.map((url, idx) => (
                    <img
                      key={idx}
                      src={url}
                      alt={`contact-${idx}`}
                      className="w-5 h-5 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

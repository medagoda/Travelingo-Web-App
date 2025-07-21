import { useEffect, useState } from 'react';
import { MapPinIcon, StarIcon } from 'lucide-react';

export const ActivityCards = () => {
  const activities = [
    {
      id: 1,
      title: 'Mount climbing',
      location: 'Green Mountain',
      rating: 4.8,
      images: [
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80',
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      ],
    },
    {
      id: 2,
      title: 'Night camping',
      location: 'Lightning lake',
      rating: 4.8,
      images: [
        'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1405&q=80',
        'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      ],
    },
    {
      id: 3,
      title: 'Sky gazing',
      location: 'Blue Hills',
      rating: 4.8,
      images: [
        'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
        
      ],
    },
  ];

  const [imageIndexes, setImageIndexes] = useState(() =>
    activities.map(() => 0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes((prevIndexes) =>
        prevIndexes.map((currentIndex, i) => {
          const nextIndex = (currentIndex + 1) % activities[i].images.length;
          return nextIndex;
        })
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [activities]);

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-0">
      {activities.map((activity, i) => (
        <div
          key={activity.id}
          className="rounded-2xl overflow-hidden relative h-64 shadow-lg"
        >
          <img
            src={activity.images[imageIndexes[i]]}
            alt={activity.title}
            className="w-full h-full object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-3 sm:p-4 text-white w-full">
            <h3 className="font-bold text-lg sm:text-xl">{activity.title}</h3>
            <div className="flex flex-wrap items-center mt-1 sm:mt-2 text-sm gap-x-2">
              <MapPinIcon size={13} />
              <span>{activity.location}</span>
              <div className="flex items-center ml-auto">
                <StarIcon size={14} className="text-white fill-white mr-1" />
                <span>{activity.rating}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

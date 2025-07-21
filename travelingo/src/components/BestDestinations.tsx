import { MapPinIcon, StarIcon, SlidersIcon } from 'lucide-react';
export const BestDestinations = () => {
  const destinations = [{
    id: 1,
    name: 'Green wood forest',
    location: 'Telangana',
    rating: 4.8,
    price: 999,
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80'
    
  }, {
    id: 2,
    name: 'Green forest Camp',
    location: 'Chennai',
    rating: 4.8,
    price: 999,
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80'
  }, {
    id: 3,
    name: 'Desert Festival',
    location: 'Gujarat',
    rating: 4.8,
    price: 999,
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80'
  }];
  return <div className=' bg-white rounded-3xl p-5 mt-4 -mr-2'>
      <div className="flex justify-between items-center mb-5 p-6 overflow-y-auto -mt-5">
        <div className="">
          <h2 className="text-xl font-bold flex items-center -ml-6">
            Best Destination 🌈
          </h2>
          <span className="text-xs text-gray-500 font-normal -ml-6">
              100 Destination found
            </span>
        </div>
        <button className="flex items-center space-x-2 bg-white border border-gray-200 px-4 py-2 rounded-lg -mr-6">
          <SlidersIcon size={16} />
          <span>Filters</span>
        </button>
      </div>
      <div className="space-y-4 mb-3">
        {destinations.map(destination => <div key={destination.id} className="bg-white rounded-xl p-3 flex items-center">
            <img src={destination.image} alt={destination.name} className="w-16 h-16 rounded-lg object-cover" />
            <div className="flex-1 ml-4">
              <h3 className="font-medium">{destination.name}</h3>
              <div className="flex items-center mt-1 text-sm text-gray-500">
                <MapPinIcon size={14} className="mr-1" />
                <span>{destination.location}</span>
                <div className="ml-3 flex items-center">
                  <StarIcon size={14} className="text-yellow-400 mr-1" />
                  <span>{destination.rating}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold">₹{destination.price}</div>
              <div className="text-xs text-gray-500">/night</div>
            </div>
          </div>)}
      </div>
    </div>;
};
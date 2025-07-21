import { Header } from './Header';
import { ActivityCards } from './ActivityCards';
import { BestDestinations } from './BestDestinations';
import { Calendar } from './Calendar';
import { ScheduleList } from './ScheduleList';
import { PromoCard } from './PromoCard';

export const MainContent = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-1 sm:p-6 overflow-hidden h-full -mb-6">
      {/* Left Main Section */}
      <div className="flex-1 p-4 sm:p-6 overflow-y-auto rounded-3xl bg-gray-100 -ml-5 -mr-4 mb-6">
        <Header />
        <ActivityCards />

        <div className="flex flex-col xl:flex-row mt-10 gap-6 -mb-2">
          <div className="xl:w-3/5 w-full">
            <BestDestinations />
          </div>
          <div className="xl:w-2/5 w-full mb-3">
            <PromoCard />
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-full xl:w-[320px] mt-6 xl:mt-0 xl:ml-4 overflow-y-auto">
        <Calendar />
        <div className="mt-6">
          <ScheduleList />
        </div>
      </div>
    </div>
  );
};

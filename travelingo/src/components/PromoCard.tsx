export const PromoCard = () => {
  return (
    <div className="bg-[#1D1B3C] rounded-3xl p-4 sm:p-8 text-white h-full flex flex-col justify-between relative overflow-hidden items-center text-center w-full my-4">
      {/* Decorative background circle */}
      <div className="absolute bottom-0 right-0">
        <div className="bg-[#1D1B3C] w-20 h-20 sm:w-32 sm:h-32 rounded-full -mb-6 sm:-mb-10 -mr-6 sm:-mr-10 opacity-40"></div>
      </div>

      {/* Content */}
      <div className="z-10 flex flex-col items-center w-full">
        <img
          src="https://img.freepik.com/premium-psd/3d-cartoon-boy-smiling-portrait-isolated-transparent-background-png-psd_888962-1560.jpg"
          alt="Promo Visual"
          className="rounded-lg w-20 sm:w-full mb-2 sm:mb-4 object-cover h-16 sm:h-24 fill-[#1D1B3C]"
        />

        <div className="mt-8 sm:mt-16 w-full">
          <h3 className="text-lg sm:text-2xl font-bold leading-snug sm:leading-tight">
            Let's Explore<br />
            the beauty
          </h3>
          <p className="text-[11px] sm:text-xs mt-1 sm:mt-2 text-gray-300">
            Get special offers & news
          </p>

          <button className="w-full bg-emerald-500 text-white py-2 sm:py-3 px-4 rounded-lg mt-12 font-medium text-sm hover:bg-emerald-600 transition-all duration-300">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

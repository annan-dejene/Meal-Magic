const NoRecipieFound = () => {
  return (
    <div className="flex flex-col gap-8 min-h-[55vh] justify-center items-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-900">
        No Recipie Found
      </h1>
      <p className="text-sm sm:text-base lg:text-lg text-gray-600">
        We couldn&apos;t find any recipie matching your search
      </p>
    </div>
  );
};

export default NoRecipieFound;

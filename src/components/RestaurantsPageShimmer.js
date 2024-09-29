const RestaurantsPageShimmer = () => {
  const shimmerItems = Array.from({ length: 16 }, (_, index) => index);

  return (
    <div className="app-container mt-24" data-testid="shimmer">
      <div className="card-container">
        {shimmerItems.map((item) => (
          <div
            key={item}
            className="mx-8 my-8 p-1 w-72 h-48 bg-gray-300 rounded-xl"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantsPageShimmer;

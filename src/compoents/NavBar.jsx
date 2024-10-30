export default function NavBar({ sport, league, updateSport, updateLeague }) {
  function sportClick(e, sport, league) {
    e.preventDefault();
    updateSport(sport);
    updateLeague(league);
  }

  return (
    <div>
      <h2>
        NavBar - Selected: {sport} - {league}{" "}
      </h2>

      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-8"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={(e) => sportClick(e, "football", "nfl")}
                className={
                  sport === "football"
                    ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                }
                aria-current="page"
              >
                Football - NFL
              </button>
              <button
                onClick={(e) => sportClick(e, "baseball", "mlb")}
                className={
                  sport === "baseball"
                    ? "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                }
              >
                Baseball - MLB
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

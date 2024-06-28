function Auction() {
  return (
    <>
      <div className="grid grid-cols-2 my-[70px]">
        <div className="m-auto">
          <img
            className="w-full"
            src="../src/Components/Auction.png"
            alt="Auction"
          />
        </div>
        <div className="flex flex-col items-start justify-between ml-20">
          <div className="my-6">
            <p className="text-6xl">10,000</p>
            <p className="text-xl">OFFICES WORLDWIDE</p>
          </div>
          <div className="my-6">
            <p className="text-6xl">100</p>
            <p className="text-xl">COUNTRIES & TERRITORIES</p>
          </div>
          <div className="my-6">
            <p className="text-6xl">30,000</p>
            <p className="text-xl">SALES ASSOCIATIVES</p>
          </div>
          <div className="my-6">
            <p className="text-6xl">$150 BILLION</p>
            <p className="text-xl">ANNUAL SALES (USD)</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Auction;

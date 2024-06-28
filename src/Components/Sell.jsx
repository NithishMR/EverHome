import Footer from "./Footer";
import Highlights from "./SellSection/Highlights";
import Marketing from "./SellSection/Marketing";
import SellMainContent from "./SellSection/SellMainContent";
import SellNavigation from "./SellSection/SellNavigation";
import SellYourHome from "./SellSection/SellYourHome";

function Sell() {
  return (
    <>
      <SellNavigation />
      <SellMainContent />
      <Marketing />
      <Highlights />
      <SellYourHome />
      <Footer />
    </>
  );
}
export default Sell;

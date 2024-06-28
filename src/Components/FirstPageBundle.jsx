import Footer from "./Footer";
// import Navigation from "./Navigation";
// import LoginJoinPrompt from "./LoginJoinPrompt";
import MainSection from "./MainSection";
import Carousal from "./Carousal";
import Find from "./Find";
// import PrivacyAndCookies from "./PrivacyAndCookies";
function FirstPageBundle() {
  return (
    <>
      {/* <FullNavigation /> */}
      <Find />
      <Carousal />
      <MainSection></MainSection>
      <Footer />
    </>
  );
}
export default FirstPageBundle;

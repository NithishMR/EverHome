import Navigation from "./Navigation";
import LoginJoinPrompt from "./LoginJoinPrompt";
import PrivacyAndCookies from "./PrivacyAndCookies";
import { Outlet } from "react-router-dom";
function FullNavigation() {
  return (
    <>
      <PrivacyAndCookies />
      <LoginJoinPrompt />
      <Navigation />
      <Outlet />
    </>
  );
}
export default FullNavigation;

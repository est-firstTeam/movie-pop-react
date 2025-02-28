import { Outlet } from "react-router-dom";
import Header from "../components/header";
const BaseLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* TODO: footer자리 */}
    </div>
  );
};

export default BaseLayout;

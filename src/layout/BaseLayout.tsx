import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div>
      {/* TODO: header자리 */}
      <main>
        <Outlet />
      </main>
      {/* TODO: footer자리 */}
    </div>
  );
};

export default BaseLayout;

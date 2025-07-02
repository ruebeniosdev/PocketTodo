import { Outlet } from "@tanstack/react-router";

export const MainLayout = () => {
  return (
    <div className="min-h-screen p-6 bg-white">
      {/* navbar home, about */}
      <Outlet />
       {/* where ur content will go ... */} 
      {/* footer */}
    </div>
  );
};

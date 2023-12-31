import Sidebar from "@/components/sidebar/Sidebar";
import { adminRoutes } from "@/utils/routes/admin.routes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HTicketed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full overflow-hidden p-3 gap-3 text-gray-400">
      <Sidebar routes={adminRoutes} />
      <div className="w-[80%]">
        {/* <Navbar />   */}
        {children}
      </div>
    </div>
  );
}

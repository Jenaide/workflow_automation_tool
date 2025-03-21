import { Sidebar } from "@/components/Shared/sidebar/Sidebar";
import { Topbar } from "@/components/Shared/topbar/Topbar";

export default async function MainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex h-screen">
            {/* sidebar */}
            <aside className="w-[220px] h-screen border-r-4 fixed">
                <Sidebar />
            </aside>
            
            {/* top bar */}
            <div className="flex-1 flex flex-col ml-[220px]">
                <header className="h-[60px] bg-[#f2f4f7] dark:bg-background border-b-4 fixed w-[calc(100%-220px)]">
                    <Topbar />
                </header>

                <main className="flex-1 overflow-y-auto mt-[60px] p-6 bg-[#f2f4f7] dark:bg-background">
                    {children}
                </main>
            </div>
        </div>
    )
}
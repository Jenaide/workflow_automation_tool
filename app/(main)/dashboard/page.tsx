import { QuickActions } from "@/components/dashboard/quick-actions";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { SystemStatus } from "@/components/dashboard/system-status";
import { TasksOverview } from "@/components/dashboard/tasks-overview";

export default function DashboardPage() {
    return (
        <div className="p-6 space-y-3 overflow-y-auto">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <QuickActions />
                <SystemStatus className="md:col-span-2" />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <TasksOverview className="lg:col-span-2" />
                <RecentActivity />
            </div>
        </div>
    )
}
import { connections } from "@/components/constants";
import { ConnectionCard } from "./_components/connection-card";

export default function IntegrationPage() {
    return (
        <div className="p-4">
            <div className="grid grid-cols-4 gap-3">
                <ConnectionCard 
                    item={connections['discord']} 
                    classes='bg-[#a89bfc2f] dark:bg-[#14113a]'
                />
                <ConnectionCard 
                    item={connections['sheets']} 
                    classes='bg-[#f2fdf1] dark:bg-[#102022]'
                />
                <ConnectionCard 
                    item={connections['forms']} 
                    classes='bg-[#a89bfc2f] dark:bg-[#14113a]'
                />
                <ConnectionCard 
                    item={connections['drive']} 
                    classes='bg-[#f2fdf1] dark:bg-[#102022]'
                />
                <ConnectionCard 
                    item={connections['slack']} 
                    classes='bg-[#a89bfc2f] dark:bg-[#25201f]'
                />
                <ConnectionCard 
                    item={connections['trello']} 
                    classes='bg-[#4562f421] dark:bg-[#111630]'
                />
            </div>
        </div>
    )
};
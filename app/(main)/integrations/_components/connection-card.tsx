import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Image from "next/image";

interface ConnectionItem {
    icon: string;
    name: string;
    description: string;
    classes: string;
    isUpcoming: boolean;
}

interface ConnectionCardProps {
    item: ConnectionItem;
    classes?: string
}

export function ConnectionCard({ item, classes }: ConnectionCardProps) {
    return (
        <div className="bg-background p-4 border border-input rounded-md space-y-4">
            <div className="flex items-center justify-between">
                <div className={`w-9 h-9 rounded p-2 ${classes}`}>
                    <Image 
                        src={item.icon}
                        alt={item.name}
                        width={100}
                        height={100}
                    />
                </div>
                {/*<span className="text-sm py-1 px-2 block rounded  bg-[#f2fdf1] dark:bg-[#0d1a27] text-[#7bb66e]">Connected</span>*/}
            </div>

            <div className="space-y-2">
                <div className="text-xl font-medium">
                    {item.name}
                </div>
                <p className="text-sm font-normal text-muted-foreground">{item.description}</p>
            </div>

            {/*<Button className="w-full bg-[#e83a630c] hover:bg-[#e83a630c] dark:bg-[#0b0a1a] text-[#e83a63] border border-[#e83a630c] !mt-8">
                Disconnect
            </Button>*/}

            <Button variant={"outline"} disabled={item.isUpcoming} className={clsx('w-full bg-accent/50 dark:bg-[#0c1128] !mt-8',
                item.isUpcoming && 'text-[#ef621c]'
            )}>{item.isUpcoming ? 'Upcoming' : 'Connect'}</Button>
        </div>
    )
};
import { WorkflowBuilder } from "@/components/workflows/workflow-builder";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Create Workflow | Automation Tool",
    description: "Create a new automation workflow",
};

export default function NewWorkflowPage() {
    return (
        <div>
            <WorkflowBuilder />
        </div>
    )
}
export const orderStatuses = [
    { value: "on-time", label: "On time" },
    { value: "delay", label: "Delay" },
    { value: "delivered", label: "Delivered" },
];

export const orderTableHead = [
    "Order Id",
    "Destination",
    "Cargo",
    "Price",
    "Delivery Date",
    "Status",
    "Actions",
];

export const orderStatusColor = {
    "on-time" : "#3c51d7",
    delay: "#ef621c",
    delivered: "#30cf59"

};

export const connections = {
    slack: {
        icon: '/slack.png',
        name: "Slack",
        description: "Configure notifications and send messages to any Slack channel.",
        classes: "dark:bg-[#25201f]",
        isUpcoming: true,
    },
    discord: {
        icon: '/discord.png',
        name: "Discord",
        description: "Configure notifications and send messages to any Discord channel.",
        classes: "dark:bg-[#14113a]",
        isUpcoming: false,
    },
    sheets: {
        icon: '/sheets.png',
        name: "Google Sheets",
        description: "Enables you to create, update and modify spreadsheets.",
        classes: "dark:bg-[#102022]",
        isUpcoming: false,
    },
    forms: {
        icon: '/google-forms.png',
        name: "Google Forms",
        description: "Free, web-based tool within Google Workspace.",
        classes: "dark:bg-[#102022]",
        isUpcoming: false,
    },
    drive: {
        icon: '/google-drive.png',
        name: "Google Drive",
        description: "Cloud storage service that allows users to store, access.",
        classes: "dark:bg-[#102022]",
        isUpcoming: false,
    },
    trello: {
        icon: '/trello.png',
        name: "Trello",
        description: "Visual, web-based tool inspired by the Kanban system.",
        classes: "dark:bg-[#102022]",
        isUpcoming: false,
    },
}

export const automationTableHead = [
    "Automation name",
    "Creation date",
    "Status",
    "Actions",
]
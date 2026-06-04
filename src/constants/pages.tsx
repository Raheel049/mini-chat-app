import { Activity, Contact, Home, Rocket, Settings } from "lucide-react"

export const PAGE_BREAD_CRUMBS: string[] = [
    'contacts',
    'automations',
    'integrations',
    'settings',
]

type Props = {
    [page in string] : React.ReactNode
}

export const PAGE_ICON: Props = {
    AUTOMATIONS: <Activity color="#3352CC"/>,
    CONTACTS: <Contact />,
    INTEGRATIONS: <Rocket color="#3352CC" fill="#3352CC"/>,
    SETTINGS: <Settings color="#3352CC" fill="#3352CC" />,
    HOME: <Home color="#3352CC" fill="#3352CC"/>
}

export const PLANS = [
    {
        name: "Free Plan",
        description: 'Perfect for getting started',
        price:'$0',
        features: [
            'Boost engagement with target response',
            'Automate comment replies to enhance audience interaction',
            'Trun followers into customer with targeted messaging',

        ],
        cta: 'Get Started'
    },
    {
        name: "Smart AI Plan",
        description: 'Advanced features for poer users',
        price:'$99',
        features: [
            'All features from free plan',
            'AI-powered response generation',
            'Advanced analytics and insights',
            'Priority customer support',
            'Custom branding options'
        ],
        cta: "Upgrade Now",
    },
]
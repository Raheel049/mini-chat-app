import { Activity, Contact, Home, Rocket, Settings } from "lucide-react"

export const PAGE_BREAD_CRUMBS: string[] = [
    'contacts',
    'automation',
    'integration',
    'settings',
]

type Props = {
    [page in string] : React.ReactNode
}

export const PAGE_ICON: Props = {
    AUTOMATIONS: <Activity />,
    CONTACTS: <Contact />,
    INGRATIONS: <Rocket />,
    SETTINGS: <Settings />,
    HOME: <Home color="#3352CC" fill="3352CC"/>
}

export const PLANS = [
    {
        name: "Free Plan",
        description: 'Perfect for getting started',
        price:'$0',
        featuers: [
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
        featuers: [
            'All features from free plan',
            'AI-powered response generation',
            'Advanced analytics and insights',
            'Priority customer support',
            'Custom branding options'
        ],
        cta: "Upgrade Now",
    },
]
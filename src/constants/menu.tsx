import {v4 as uuid} from "uuid"
import { Home, User, Activity, Rocket, Settings } from "lucide-react"

type FieldProps = {
    label: string
    id: string
}

type SideBarProps = {
    icon: React.ReactNode
} & FieldProps

export const SIDEBAR_MENU : SideBarProps[] =[
    {
        id: uuid(),
        label : "home",
        icon : <Home className="h-[15px]" />
    },

    {
        id: uuid(),
        label : "automations",
        icon : <Activity className="h-[15px]"/>
    },

    {
        id: uuid(),
        label : "integrations",
        icon : <Rocket className="h-[15px]"/>
    },

    {
        id: uuid(),
        label : "settings",
        icon : <Settings className="h-[15px]"/>
    },
]
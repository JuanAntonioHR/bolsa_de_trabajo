export interface CompanyAdvertising {
    image: string
    title: string
    description: string
}

export interface Page {
    href: string
    name: string
    icon?: string
}

export interface TargetGroup {
    adviceHref: string
    adviceText: string
    description: string
    image: string
    signInHref: string
    signInText: string
    title: string
}
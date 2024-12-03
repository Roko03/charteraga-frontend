
export type RouteType = {
    id: number
    name: string
    imageUrl: string
    price: number
    mainAbilities: RouteAbilityType[]
    subtitle: string
    description: string
}

export type RouteAbilityType = {
    name: string
    range: 10
}

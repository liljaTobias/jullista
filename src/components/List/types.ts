export interface TListItem {
    id: number
    name: string
    claimed: boolean
}

export interface TViewListItem extends TListItem {
    checked: boolean
}
type ProducrtType = {
    created_at: Date
    creator: CreaterType
    creator_id: string
    description: string
    download_count: string
    download_url: string
    id: 1
    name: string
    price: string
    rank: string
    short_description: string
    updated_at: Date
}
type CreaterType = {
    created_at: Date
    id: number
    remember_token: null | string
    token: null | string
    updated_at: Date
    user_type: string
    username: string
}
export type {
    ProducrtType, CreaterType
}
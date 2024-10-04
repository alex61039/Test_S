export interface INews {
    article_id: string,
    title: string,
    description: string,
    pubDate: string,
    image_url?: string | null,
    category?: string | null,
}

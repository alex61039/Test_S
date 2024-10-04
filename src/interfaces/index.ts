export interface INews {
    article_id: string,
    title: string,
    link?: string | null,
    description: string,
    pubDate: string,
    image_url?: string | null,
    category?: string | null,
}

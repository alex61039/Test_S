import {INews} from "../interfaces";

export const filterArrById = (id: string | null | undefined) => {
    if(id !== null || undefined){
        let arr = localStorage.getItem("news")
        const data: INews[] = arr&&JSON.parse(arr);
        const item = data.find(it => it.article_id === id);
        return item;
    }
}

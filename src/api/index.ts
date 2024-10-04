import axios from "axios";
import {INews} from '../interfaces'

export const api = async (): Promise<INews[]> => {
    const dt: INews[] = await axios.get('data.ts').then(res => res.data)

    return dt
}

import axios from "axios"
import IComment from "../types/IComment";
import IPost from "../types/IPost";

export default class PostService {
    static async getAll(limit = 10, page = 0) : Promise<{ headers: Record<string, string>, data: IPost[] }> {
        const { headers, data } = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return { headers, data };
    }

    static async getById(postId: number) : Promise<{ headers: Record<string, string>, data: IPost }> {
        const { headers, data } = await axios.get<IPost>('https://jsonplaceholder.typicode.com/posts/' + postId);
        return { headers, data };
    }

    static async getCommentsByPostId(postId: number) : Promise<{ headers: Record<string, string>, data: IComment[] }> {
        const { headers, data }  = await axios.get<IComment[]>('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments');
        return { headers, data };
    }
}
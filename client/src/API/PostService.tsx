import axios from "axios"
import IComment from "../types/IComment";
import IPost from "../types/IPost";

export default class PostService {
    static async getAll(limit: number = 10, page: number = 0) : Promise<any> {
        const result = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return result;
    }

    static async getById(postId: number) : Promise<any> {
        const result = await axios.get<IPost>('https://jsonplaceholder.typicode.com/posts/' + postId);
        return result;
    }

    static async getCommentsByPostId(postId: number) : Promise<any> {
        const result = await axios.get<IComment>('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments');
        return result;
    }
}
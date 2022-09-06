import axios from "axios"

export default class PostService {
    static async getAll(limit = 10, page = 0) {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return result;
    }

    static async getById(postId) {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);
        return result;
    }

    static async getCommentsByPostId(postId) {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments');
        return result;
    }
}
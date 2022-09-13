export default interface IPost {
    body:   string,
    id:     number,
    title:  string,
    userId: number
}

export const defaultPost : IPost = {
    body:   '',
    id:     0,
    title:  '',
    userId: 0
}
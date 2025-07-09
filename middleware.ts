export { default } from "next-auth/middleware"

export const config =   {
    matcher : [
        '/review/:bookId',
        '/my-books',
        '/browse-books'
    ]
};
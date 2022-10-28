import { Post } from "./types/Post";
import { User, UserId } from "./types/User";

const db = new Map<UserId, User>();

function createPost(post: Post): Post {
    return {
        author: post.author,
        description: post.description,
        id: post.id,
        title: post.title
    }
}

const post = createPost({
    author: 'azee',
    description: 'oeoekzae',
    id: 'ozeoaze',
    title: 'paozek'
})

const user: User = {
    id: 'izzeea',
    firstName: 'Chalom',
    lastName: 'Ellezam',
    age: 12,
    birthDate: new Date(),
    posts: [],
}

db.set(user.id, user);



function sum(a: number, b: number) {
    return a + b;
}

sum(2, 2);

console.log('hello')


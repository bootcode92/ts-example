import { Post } from "./Post";

export type UserId = string;

export type User = {
    id: UserId;
    firstName: string;
    lastName: string;
    age: number;
    birthDate: Date;
    posts: Post[];
    favoritePost?: Post;
}
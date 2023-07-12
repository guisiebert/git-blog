import { PostListContainer } from "./styles";
import { PostCard } from "../PostCard";
import { useEffect, useState } from "react";
import { api } from "../../../../libs/axios";
import { Link } from "react-router-dom";

interface Post {
    id: number;
    title: string;
    updated_at: string;
    body: string
}

export function PostList() {
    const [posts, setPosts] = useState<Post[]>([])
    const [query, setQuery] = useState("")

    async function fetchPosts(query: string) {
        
        const data = await api.get(`/search/issues?q=${query}%20repo:guisiebert/git-blog`)
        .then(res => res.data)

        let postList = data.items.map( (post : Post) => { return (
            {
                id: post.id,
                title: post.title,
                updated_at: post.updated_at,
                body: post.body
            }
        )})

        setPosts(postList)
    }

    useEffect( () => {
        fetchPosts(query)
    }, [])





    return (
        <PostListContainer>
            {posts.map( item => {return (
                <Link to={`/post/${item.id}`} key={item.id} >
                    <PostCard 
                        
                        title={item.title}
                        body={item.body}
                        id={item.id}
                    />
                </Link>
            )})}
       </PostListContainer>
    )
}
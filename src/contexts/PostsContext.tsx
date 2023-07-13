import { createContext, useEffect, useState } from "react";
import { api } from "../libs/axios";

interface Post {
    id: "",
    number: 0,
    title: "",
    createdAt: "",
    body: "",
    comments: 0,
    html_url: "",
    url: ""
}

type posts = Post[]

const repoData = {
    username: "guisiebert",
    repo: "git-blog"

}

export const PostContext = createContext([])

export function PostContextProvider({ children }) {
    const [posts, setPosts] = useState([])

    async function getAllPosts() {
        const data = await api.get(`/search/issues?q=%20repo:guisiebert/git-blog`)
        .then(res => res.data.items)

        setPosts(data)
    }

    useEffect( () => {
        getAllPosts("")
        console.log("useEffect was triggered")
    }, [])
    
    return (
        <PostContext.Provider value={posts}>
            {children}
        </PostContext.Provider>
    )
}
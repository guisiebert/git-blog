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
    const [postlist, setPostlist] = useState([])

    async function getPosts(query: string) {
        const data = await api.get(`/search/issues?q=${query}%20repo:guisiebert/git-blog`)
        .then(res => res.data.items)

        setPostlist(data)
        console.log("getPosts was triggered")
    }

    useEffect( () => {
        getPosts("")
        console.log("useEffect was triggered")
    }, [])
    
    return (
        <PostContext.Provider value={{postlist, getPosts}}>
            {children}
        </PostContext.Provider>
    )
}
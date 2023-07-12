import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { PostContent } from "./components/PostContent";
import { PostInfo } from "./components/PostInfo";
import { api } from "../../libs/axios";
import { useEffect, useState } from "react";
// import { useContext, useEffect, useState } from "react";
// import { PostContext } from "../../contexts/PostsContext";



export function Post() {
    let { id } = useParams();
    // const posts = useContext(PostContext)

    const [currentPost, setCurrentPost] = useState({
    })

    async function getPost() {
        const data = await api.get(`/search/issues?q=%20repo:guisiebert/git-blog`)
        .then(res => res.data.items)        
        const post = await data.filter(post => post.id == id)
        setCurrentPost(post[0])
    }

    useEffect( () => {
        getPost()
    }, [])

    return (
        <>
            <Header/>
            <PostInfo post={currentPost} />
            <PostContent content={currentPost.body}/>
        </>
    )
}















// interface postType {
    //     title: string
    //     original_url: string
    //     author: string
    //     date: string
    //     comment_count: number
    //   }
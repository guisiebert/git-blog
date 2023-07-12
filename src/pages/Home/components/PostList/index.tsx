import { PostListContainer } from "./styles";
import { PostCard } from "../PostCard";
import { useContext, useEffect, useState } from "react";
import { api } from "../../../../libs/axios";
import { Link } from "react-router-dom";
import { PostContext } from "../../../../contexts/PostsContext";



export function PostList() {

    const postList = useContext(PostContext)



    return (
        <PostListContainer>
            {postList.map( item => {return (
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
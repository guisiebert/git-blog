import { MainContainer, PostListContainer, SearchBar } from "./styles";
import { PostCard } from "../PostCard";
import { HtmlHTMLAttributes, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../../../../contexts/PostsContext";



export function PostList() {

    const postList = useContext(PostContext)
    const [query, setQuery] = useState("")
    // const [filteredList, setFilteredList] = useState([])

    const filteredList = postList.filter(post => post.body)
    console.log(query)


    function handleChange(e: any) {
        setQuery(e.target.value)
    }




    return (
        <MainContainer>
            <SearchBar>
                <div className="summary">
                    <strong>My Posts</strong>
                    <p>{postList.length} posts</p>
                </div>

                <form>
                    <input type="text" placeholder="Search content" onChange={handleChange}/>
                </form>
            </SearchBar>

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
        </MainContainer>
    )
}
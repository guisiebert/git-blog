import { MainContainer, PostListContainer, SearchBar } from "./styles";
import { PostCard } from "../PostCard";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../../../../contexts/PostsContext";



export function PostList() {

    const {postlist, getPosts} = useContext(PostContext)
    const [query, setQuery] = useState("")


    function handleSubmit(e: any) {
        e.preventDefault()
        console.log('form submitted')
        getPosts(e.target[0].value)
    }




    return (
        <MainContainer>
            <SearchBar>
                <div className="summary">
                    <strong>My Posts</strong>
                    <p>{postlist.length} posts</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search content">
                    </input>
                    <button>
                        Search
                    </button>
                </form>
            </SearchBar>

            <PostListContainer>
                {postlist.map( item => {return (
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
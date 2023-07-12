import { useContext } from "react"
import { SearchContainer } from "./styles"
import { PostContext } from "../../../../contexts/PostsContext"



export function SearchForm() {
    const posts = useContext(PostContext)

    return (
        <SearchContainer>
            <div className="summary">
                <strong>My Posts</strong>
                <p>{posts.length} posts</p>
            </div>

            <form>
                <input type="text" placeholder="Search article" />
            </form>
        </SearchContainer>
    )
}
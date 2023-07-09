import { PostCardContainer } from "./styles"

const title = "JavaScript data types and data structures"
const excerpt = "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in..."

export function PostCard() {
    return (
        <PostCardContainer>
            <header>
                <h2>{title}</h2>
                <span>Há 1 dia</span>
            </header>
            <p className="excerpt">{excerpt}</p>
        </PostCardContainer>
    )
}
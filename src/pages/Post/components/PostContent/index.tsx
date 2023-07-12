import { BlogPostContainer, BlogPostText } from "./styles"

export function PostContent(props) {
    
    const {content} = props

    return (
        <BlogPostContainer>
            <BlogPostText>
                {content}
            </BlogPostText>
        </BlogPostContainer>
    )
}
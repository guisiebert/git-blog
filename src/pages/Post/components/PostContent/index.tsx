import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { BlogPostContainer, BlogPostText } from "./styles"

export function PostContent(props) {
    
    const {content} = props

    return (
        <BlogPostContainer>
            <BlogPostText>
                <ReactMarkdown>
                    {content}
                </ReactMarkdown>
            </BlogPostText>
        </BlogPostContainer>
    )
}
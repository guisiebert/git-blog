import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";

export interface Post {
    title: string
    original_url: string
    author: string
    date: string
    comment_count: number
  }
  
const testPost: Post = {
    title: "JavaScript data types and data structures",
    original_url: "https://github.com/post",
    author: 'guisiebert',
    date: '11-07-2023',
    comment_count: 4
  }
  
export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/post/:id" element={<Post post={testPost}/>} />
        </Routes>
    )
}


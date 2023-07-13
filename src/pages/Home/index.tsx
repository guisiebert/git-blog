import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { PostList } from "./components/PostList";

export function Home() {
    return (
        <>
            <Header/>
            <Profile />
            <PostList />
        </>
    )
}
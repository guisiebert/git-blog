import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { PostList } from "./components/PostList";
import { SearchForm } from "./components/SearchForm";

export function Home() {
    return (
        <>
            <Header/>
            <Profile />
            <SearchForm />
            <PostList />
        </>
    )
}
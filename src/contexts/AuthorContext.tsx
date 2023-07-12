import axios from "axios";
import { createContext, useEffect, useState } from "react";

interface Author {
    avatar_url: string
    name: string
    html_url: string
    bio: string
    login: string
    company: string
    followers: number
}


export const AuthorContext = createContext({} as Author)

export function AuthorProvider({ children }) {

    const [author, setAuthor] = useState({
        avatar_url: "https://github.com/guisiebert",
        name: "Guibão",
        html_url: "https://github.com/guisiebert",
        bio: "muito legal um cara maneiro",
        login: "guiobs",
        company: "guibos",
        followers: 4,
    })

    async function fetchAuthor() {
        const data = await axios.get('https://api.github.com/users/guisiebert').then(res => res.data)
        setAuthor(data)
    }

    useEffect(() => {
        fetchAuthor()
    }, [])



    
    return (
        <AuthorContext.Provider value={author}>
            {children}
        </AuthorContext.Provider>
    )
}
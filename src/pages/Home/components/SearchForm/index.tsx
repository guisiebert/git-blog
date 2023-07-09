import { SearchContainer } from "./styles"

export function SearchForm() {
    return (
        <SearchContainer>
            <div className="summary">
                <strong>Publicações</strong>
                <p>6 publicações</p>
            </div>

            <form>
                <input type="text" placeholder="Buscar conteúdo" />
            </form>
        </SearchContainer>
    )
}
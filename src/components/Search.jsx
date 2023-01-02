import "../styles/search.scss"
import searchImg from "../assets/search.png"

const Search = ({ swipe }) => {
    return(
        <div className={swipe ? "searchContainer" : "searchContainer front"}>
            <div className="search">
                <img width={22} height={22} src={searchImg} alt="Buscar" />
                <input placeholder="Buscar" maxLength={30} type="text" />
            </div>
        </div>
    )
}

export default Search
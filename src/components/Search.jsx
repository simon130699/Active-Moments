import "../styles/search.scss"
import { useState } from "react"
import searchImg from "../assets/search.png"
import profileImg from "../assets/profile.png"

const dataTest = [{
    hashtag: '',
    image: '',
    username: 'adakos',
    name: 'franco',
    lastname: 'schulz'
}, {
    hashtag: 'hashtag1',
    image: '',
    username: '',
    name: '',
    lastname: ''
}]

const SearchItem = ({ search })=> {

    let content = search.username ? search.username : search.hashtag
    let names = search.name ? (search.lastname ? search.name + ' ' + search.lastname : search.name) : (search.lastname ? search.lastname : '')

    return(
        <div className="item">
            {!search.hashtag && <img width={48} height={48} src={search.image ? search.image : profileImg} alt={search.username} />}
            {search.hashtag && <div className="hashtag"><span>#</span></div>}
            <div>
                <h4>{content}</h4>
                {names && <span>{names}</span>}
            </div>
        </div>
    )
}

const Search = ({ swipe }) => {

    const [recentSearches, setRecentSearches] = useState(dataTest)

    return(
        <div className={swipe ? "searchContainer" : "searchContainer front"}>
            <div className="search">
                <img width={22} height={22} src={searchImg} alt="Buscar" />
                <input placeholder="Buscar" maxLength={30} type="text" />
            </div>
            {recentSearches.length > 0 && <div className="recentSearches">
                <span>Recientes</span>
                {recentSearches.map(search => {
                    return <SearchItem key={search.hashtag || search.username} search={search} />
                })}
            </div>}
            {recentSearches.length < 1 && <div className="noSearches">
                <span>No hay busquedas<br/>recientes</span>
            </div>}
        </div>
    )
}

export default Search
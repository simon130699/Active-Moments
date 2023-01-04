import "../styles/feed.scss"
import Post from "./Post"
import Search from "./Search"
import useFeed from "../hooks/useFeed"
import testImg1 from "../assets/testImg1.png"

let dataTest1 = {
    username: "adakos",
    image: testImg1,
    date: "31 de diciembre",
    content: "texto de prueba texto de prueba texto de texto de prueba texto de prueba texto de",
    comments: [
        {
            username: 'adakos',
            image: '',
            content: 'texto de prueba texto de prueba texto de prueba'
        },
        {
            username: 'adakos',
            image: '',
            content: 'texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba texto de prueba'
        }
    ]
}

let dataTest2 = {
    username: "adakoss",
    image: testImg1,
    date: "28 de diciembre",
    content: "texto de prueba texto de prueba texto de texto de prueba texto de prueba texto de prueba texto de prueba texto de",
    comments: []
}

const Publications = ({ swipe })=> {
    return(
        <div className={swipe ? "feedContainer" : "feedContainer back"}>
            <Post data={dataTest1} />
            <Post data={dataTest2} />
        </div>
    )
}

const Feed = () => {

    const { swipe } = useFeed()

    return (
        <div>
            <Publications swipe={swipe} />
            <Search swipe={swipe} />
        </div>
    )
}

export default Feed
import "../styles/post.scss"
import { useState } from "react"
import profileImg from "../assets/profile.png"
import arrowImg from "../assets/arrow.png"
import commentImg from "../assets/comment.png"
import likeFillImg from "../assets/likeFill.png"
import likeImg from "../assets/like.png"

const Comments = ({ comments, seeComments, onSeeCommentsHandler }) => {

    // Cantidad de caracteres del comentario
    const [commentLength, setCommentLength] = useState(0)
    // Si el comentario tiene mas de 1 caracter, saca la opacidad
    let commentSubmitOpacity = commentLength ? {opacity: '1'} : {opacity: '.6'}

    // Si la seccion de comentarios esta abierta, devuelve esta pantalla
    if (seeComments) return(
        <div className="comments">
            <div className="nav">
                {/* Al hacer click actualiza el estado de "verComentarios", cierra la pantalla */}
                <img onClick={()=> onSeeCommentsHandler(false)} width={30} height={30} src={arrowImg} alt="Atras" />
                <span>Comentarios</span>
            </div>

            {/* Si existen comentarios, los itera y los muestra en pantalla */}
            {comments.length > 0 && <div className="list">
                {comments.map((comment, index) => {
                    return(
                        <div key={comment.username + index}>
                            {/* Si existe una imagen del usuario la muestra, sino muestra una imagen default */}
                            <img width={40} height={40} src={comment.image ? comment.image : profileImg} alt={comment.username} />
                            <div>
                                <span>{comment.username}</span>
                                <p>{comment.content}</p>
                            </div>
                        </div>
                    )
                })}
            </div>}

            {/* Si no existen comentarios muestra una pantalla de no comentarios */}
            {comments.length < 1 && <div className="noComments">
                <span>Todavía no hay<br/>comentarios</span>
                <span>¡Agrega el primero!</span>
            </div>}
            
            <form className="comment">
                <img width={34} height={34} src={profileImg} alt="Nombre de usuario" />
                {/* Al cambiar, actualiza el estado con la cantidad de caracteres del comentario */}
                <input onChange={(ev)=> setCommentLength(ev.target.value.length)} placeholder="Agrega un comentario..." type="text" minLength={1} maxLength={200} required />
                {/* Si tiene 1 caracter o mas, saca la opacidad al boton publicar */}
                <input style={commentSubmitOpacity} type="submit" value="Publicar" />
            </form>
        </div>
    )
}

const Post = ({ data })=> {

    const [seeComments, setSeeComments] = useState(false)
    const [like, setLike] = useState(false)

    const onSeeCommentsHandler = (value)=> {
        setSeeComments(value)
        if (value) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'auto'
        }
    }

    return(
        <div className="postContainer">
            <div className="userInfo">
                <img width={34} height={34} src={data.userImage ? data.userImage : profileImg} alt={data.username} />
                <h4>{data.username}</h4>
                <span></span>
                <span>{data.date}</span>
            </div>
            <img onDoubleClick={()=> setLike(!like)} className="postImage" src={data.image} alt={data.username} />
            <div className="actions">
                <div className="buttons">
                    <img width={26} height={26} onClick={()=> setLike(!like)} src={like ? likeFillImg : likeImg} alt="Me gusta" />
                    <img width={26} height={26} onClick={()=> onSeeCommentsHandler(true)} src={commentImg} alt="Hacer comentario" />
                </div>
                <p><b>{data.username}</b> {data.content ? data.content : ''}</p>
                {data.comments.length > 0 && <span onClick={()=> onSeeCommentsHandler(true)} className="comments">Ver {data.comments.length === 1 ? '' : 'los'} {data.comments.length === 1 ? data.comments.length + ' comentario' : data.comments.length + ' comentarios'}</span>}
                {data.comments.length < 1 && <span className="comments">No hay comentarios</span>}
            </div>
            <Comments comments={data.comments} seeComments={seeComments} onSeeCommentsHandler={onSeeCommentsHandler} />
        </div>
    )
}

export default Post
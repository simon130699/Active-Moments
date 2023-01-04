import "../styles/profile.scss"
import testImg1 from "../assets/testImg1.png"
import profileImg from "../assets/profile.png"

const Profile = () => {

    let backgroundImage = { backgroundImage: 'url(' + testImg1 + ')' }

    return (
        <div className="profileContainer">
            <div className="header">
                <div style={backgroundImage} className="background"/>
                <div className="user">
                    <img width={120} height={120} src={profileImg} alt="Test" />
                    <div className="info">
                        <h3>NombreDeUsuario</h3>
                        <span>Nombre Apellido</span>
                    </div>
                </div>
                <div className="stats">
                    <span><b>20</b>Publicaciones</span>
                    <span><b>20</b>Seguidos</span>
                    <span><b>20</b>Seguidores</span>
                </div>
                <button className="follow">Seguir</button>
            </div>
        </div>
    )
}

export default Profile
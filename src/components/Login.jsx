import "../styles/login.scss"
import logoImg from "../assets/logo.png"
import useLogin from "../hooks/useLogin"

const Login = () => {

    const {
        action,
        setAction,
        remember,
        setRemember,
        error,
        onRegisterHandler,
        onAuthHandler
    } = useLogin()

    return (
        <div className="loginContainer">
            <form onSubmit={(ev) => action ? onRegisterHandler(ev) : onAuthHandler(ev)} className={!action ? "login" : "login rotate"}>
                <img width={100} height={100} src={logoImg} alt="Active Moments" />
                <div className="inputs">
                    <h3>Bienvenido</h3>
                    <label>{action ? 'Usuario' : 'Usuario o email'}<input minLength={6} maxLength={action ? 16 : 40} name="user" required type="text" /></label>
                    {action && <label>Email<input minLength={12} maxLength={40} name="email" required type="email" /></label>}
                    <label>Contraseña<input minLength={8} maxLength={20} name="password" required type="password" /></label>
                    {!action && <label onClick={()=> setRemember(!remember)} className="remember"><div className={remember ? 'checked' : ''}></div>Recordarme</label>}
                </div>
                <input type="submit" value={action ? "Crear cuenta" : 'Iniciar sesión'} />
                <span>{action ? '¿Ya tenes cuenta?' : '¿No tenes cuenta?'} <b onClick={()=> setAction(!action)}>{action ? 'Iniciar sesión' : 'Registrarme'}</b></span>
            </form>
        </div>
    )
}

export default Login
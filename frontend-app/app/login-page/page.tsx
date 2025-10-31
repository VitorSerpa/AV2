import style from "./App.module.css"

export default function LoginPage() {
    return (
        <div className={style.mainSection}>
            <aside className={style.asideTitle}>
                <h1>Aerocode</h1>
            </aside>
            <section className={style.loginSection}>
                <div className={style.loginDiv}>
                    <h4>Login</h4>
                    <div className={style.inputDiv}>
                        <label htmlFor="">Username</label>
                        <input type="text" name="" id="" />
                        <label htmlFor="">Senha</label>
                        <input type="text" name="" id="" />
                        <button><a href="">Entrar</a></button>
                    </div>
                </div>
            </section>
        </div>
    )
}
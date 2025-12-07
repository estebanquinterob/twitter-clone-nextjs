export default function LoginForm() {
    return (
        <form className="flex flex-col p-4 w-full rounded-2xl text-gray-700 mt-4">
            <input type="text" className="p-2 mb-3 bg-gray-100 rounded-xl" placeholder="Username or e-mail" maxLength={50} />
            <input type="password" className="p-2 mb-3 bg-gray-100 rounded-xl" placeholder="Password" maxLength={10} />
            <div className="ml-auto mt-3">
                <button className="rounded-full text-white bg-linear-to-b from-blue-500 to-blue-800 p-1 px-3 text-sm hovereffect">Login</button>
            </div>
        </form>

    );
}

// podria ponerle un numero maximo y minimo de caracteres al password
// se que el submit va en el tag form
// login form se va a conectar con la api y a enviar un post para buscar el user y la contraseña y ver si coinciden

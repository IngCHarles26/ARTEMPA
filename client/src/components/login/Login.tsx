function Login() {
  return (
    <div className="h-full flex justify-center items-center">
      <div 
        className="card px-8 py-6 rounded-lg bg-gray-800 w-72">
        <h2>{window.innerHeight}</h2>
        <h2>{window.innerWidth}</h2>
        <h1 
          className="text-center font-bold text-3xl text-white">Proyecto Artempa</h1>
        <form 
          className="my-6">
          <input placeholder="Usuario" type="text"
            className="p-2 my-2 rounded w-full focus:outline-blue-600" />
          <input placeholder="Password" type="password"
            className="p-2 my-2 rounded w-full focus:outline-blue-600" />
          <button 
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2 mt-3 rounded w-full">Login</button>
        </form>
    </div>

    </div>
  );
}

export default Login;
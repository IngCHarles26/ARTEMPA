function Header() {
  const userName = 'Violeta'

  return (
    <header className="flex justify-between p-2 bg-cyan-800">
      <p className="text-yellow-300 font-bold">HOME</p>
      <p className="font-bold text-white text-xl">CONTADOR</p>
      <p className="text-lg text-neutral-300">User: <span className="text-xl font-bold text-white">{userName}</span></p>
    </header>
  );
}

export default Header;
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center">
        <h1>Logo</h1>

        <div className="">
          <button className="" onClick={null}>
            <span className="material-symbols-rounded">menu</span>
          </button>
          Navbar
        </div>

        <a href="#">Contact me</a>
      </div>
    </header>
  );
}

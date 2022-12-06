export default function Navbar() {

  return (
    <nav>
      <ul>
        <li id="logo-text">
          <a href="/"><span id="rain-cloud" className="material-symbols-outlined">rainy</span></a>
          <a href="/">Telcorain</a>
        </li>
        <li>
          <button id="menu-button"><span id="menu-icon" className="material-symbols-outlined">menu</span></button>
        </li>
      </ul>
    </nav>
  );
}
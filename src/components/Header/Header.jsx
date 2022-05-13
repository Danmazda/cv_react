export const Header = (props) => {
  return (
    <header className="flex bg-slate-500 px-4 py-2 fixed w-full">
      <a href="#introduction">
        <p className="mr-3">Danilo Procópio</p>
      </a>
      <ul className="flex gap-3">
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/dtfsprocopio/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Danmazda"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
};

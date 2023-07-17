import logo from "../assets/logo.svg"
const Header = ({theme, setTheme}) => {
  return (
    <header>
      <span className="logo">
        <img src={logo} alt="To-Do-App Logo" />
        <span>To-Dooo</span>
      </span>

      <span className="themeSelector">
        <span className={theme === "light" ? "light activeTheme" : "light"} onClick={() => setTheme("light")}></span>
        <span className={theme === "medium" ? "medium activeTheme" : "medium"} onClick={() => setTheme("medium")}></span>
        <span className={theme === "dark" ? "dark activeTheme" : "dark"} onClick={() => setTheme("dark")}></span>
        <span className={theme === "gardientOne" ? "gardientOne activeTheme" : "gradientOne"} onClick={() => setTheme("gradientOne")}></span>
        <span className={theme === "gradientTwo" ? "gradientTwo activeTheme" : "gardientTwo"} onClick={() => setTheme("gradientTwo")}></span>
        <span className={theme === "gradientThree" ? "gradinetThree activeTheme" : "gradientThree"} onClick={() => setTheme("gradientThree")}></span>
      </span>
    </header>
  )
}

export default Header;

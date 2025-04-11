import "../styles/Navbar.css"

export default function Navbar({ user, setUser }) {
    const handleScroll = (id) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
  
    const logout = () => {
      setUser(null);
      localStorage.removeItem("user");
    };
  
    return (
      <nav className="">
        <div className="">
          <button onClick={() => handleScroll("inference")}>Inferencia</button>
          <button onClick={() => handleScroll("history")}>Historial</button>
          <button onClick={() => handleScroll("about")}>About</button>
        </div>
        <div>
          <span className="">{user?.email}</span>
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      </nav>
    );
  }
  
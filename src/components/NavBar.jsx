import "./NavBar.css";

export const NavBar = () => (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        ENGANCHADOS
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="/">
            Inicio
          </a>
          <a className="nav-link" href="/products/form" id="formButton">
            Nuevo Producto
          </a>
          <a className="nav-link" href="/orders" id="ordersButton">
            Carrito
          </a>
          <a className="nav-link" href="/sessions/register" id="registerButton">
            Register
          </a>
          <span className="nav-link btn" id="signout">
            Sign out!
          </span>
        </div>
      </div>

      <div>
        <div id="loginCont">
          <a className="nav-link" href="/sessions/login" id="loginButton">
            Log in!
          </a>
        </div>
        <form className="d-flex" role="search">
          <input
            id="text"
            className="form-control me-2"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
          />
          <button id="search" className="btn btn-outline-success" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </div>
  </nav>
);

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <ul
        className="navbar-nav sidebar sidebar-dark accordion"
        id="accordionSidebar"
        style={{ background: "linear-gradient(180deg, #1abc9c, #16a085)" }} // custom green gradient
      >
        {/* Sidebar - Brand */}
        <NavLink
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-store" /> {/* changed logo */}
          </div>
          <div className="sidebar-brand-text mx-3">EcoWare Admin</div>
        </NavLink>

        {/* Divider */}
        <hr className="sidebar-divider my-0" />

        {/* Nav Item - Dashboard */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </NavLink>
        </li>

        {/* Nav Item - Manage Product */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-box" />
            <span>Manage Product</span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <NavLink className="collapse-item" to="/addproduct">
                Add Product
              </NavLink>
              <NavLink className="collapse-item" to="/listproduct">
                List Product
              </NavLink>
            </div>
          </div>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />

        {/* Sidebar Toggler */}
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>
      </ul>
    </>
  );
}

export default Sidebar;

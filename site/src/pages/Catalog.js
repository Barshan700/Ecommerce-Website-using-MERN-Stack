import Footer from "../inc/Footer";
import Menu from "../inc/Menu";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Catalog() {
  let [products, setProducts] = useState([]);

  async function getproduct() {
    try {
      const resp = await fetch("http://localhost:2000/product/sel");
      const data = await resp.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    getproduct();
  }, []);

  return (
    <>
      <Menu />

      {/* Banner */}
      <div className="text-center">
        <img
          className="img-fluid w-100"
          src="images/a.jpg"
          alt="Catalog Banner"
          style={{ maxHeight: "350px", objectFit: "cover" }}
        />
      </div>

      {/* Catalog Section */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4">Our Products</h2>
        <div className="row g-4">
          {products.map((p) => (
            <div className="col-md-4 col-sm-6" key={p._id}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  className="card-img-top"
                  src={`http://localhost:2000/product_img/${p.pimg}`}
                  alt={p.pname}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{p.pname}</h5>
                  <p className="card-text text-success fw-semibold">
                    ₹ {p.pprice}
                  </p>
                  <div className="mt-auto">
                    <NavLink
                      to="/contact"
                      className="btn btn-outline-success btn-sm w-100 mb-2"
                    >
                      Contact To Buy
                    </NavLink>
                    <button
                      data-bs-toggle="modal"
                      data-bs-target={`#myModal${p._id}`}
                      className="btn btn-success btn-sm w-100"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal */}
              <div className="modal fade" id={`myModal${p._id}`} tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title fw-bold">{p.pname}</h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <img
                        src={`http://localhost:2000/product_img/${p.pimg}`}
                        alt={p.pname}
                        className="img-fluid rounded mb-3"
                      />
                      <p>{p.pdetails}</p>
                      <p className="fw-bold text-success">Price: ₹ {p.pprice}</p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <NavLink to="/contact" className="btn btn-success">
                        Contact To Buy
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Modal */}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Catalog;

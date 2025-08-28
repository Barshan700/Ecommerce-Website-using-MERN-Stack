import Footer from "../inc/Footer";
import Sidebar from "../inc/Sidebar";
import Top from "../inc/Top";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Listproduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState({ type: "", text: "" });
  const navi = useNavigate();

  // Fetch products
  async function fetchProducts() {
    setLoading(true);
    try {
      let res = await fetch("http://localhost:2000/product/sel");
      let data = await res.json();
      setProducts(data);
    } catch (err) {
      setMsg({ type: "danger", text: "Failed to fetch products!" });
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete product
  async function handleDelete(id) {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      let res = await fetch(`http://localhost:2000/product/del/${id}`, {
        method: "DELETE",
      });
      let data = await res.json();
      setMsg({ type: "success", text: "Product deleted successfully!" });
      fetchProducts(); // refresh list
    } catch (err) {
      setMsg({ type: "danger", text: "Delete failed. Try again." });
    }
  }

  return (
    <>
      <div>
        {/* Page Wrapper */}
        <div id="wrapper">
          {/* Sidebar */}
          <Sidebar />

          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              {/* Topbar */}
              <Top />

              {/* Begin Page Content */}
              <div className="container-fluid">
                <h1 className="h3 mb-4 text-gray-800">Product List</h1>

                {msg.text && (
                  <div className={`alert alert-${msg.type}`}>{msg.text}</div>
                )}

                {loading ? (
                  <div className="text-center my-5">
                    <div className="spinner-border text-primary" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : products.length === 0 ? (
                  <div className="alert alert-info">No products found.</div>
                ) : (
                  <div className="card shadow mb-4">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <thead className="thead-dark">
                            <tr>
                              <th>#</th>
                              <th>Image</th>
                              <th>Name</th>
                              <th>Price</th>
                              <th>Details</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {products.map((p, i) => (
                              <tr key={p._id}>
                                <td>{i + 1}</td>
                                <td>
                                  <img
                                    src={`http://localhost:2000/product_img/${p.pimg}`}
                                    alt={p.pname}
                                    style={{ height: "60px" }}
                                  />
                                </td>
                                <td>{p.pname}</td>
                                <td>₹{p.pprice}</td>
                                <td>{p.pdetails}</td>
                                <td>
                                  <button
                                    className="btn btn-sm btn-primary mr-2"
                                    onClick={() =>
                                      navi("/editproduct", { state: { id: p._id } })
                                    }
                                  >
                                    <i className="fas fa-edit"></i> Edit
                                  </button>
                                  <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => handleDelete(p._id)}
                                  >
                                    <i className="fas fa-trash"></i> Delete
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* /.container-fluid */}
            </div>
            {/* End of Main Content */}

            {/* Footer */}
            <Footer />
          </div>
          {/* End of Content Wrapper */}
        </div>
      </div>
    </>
  );
}

export default Listproduct;

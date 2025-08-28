import Footer from "../inc/Footer";
import Sidebar from "../inc/Sidebar";
import Top from "../inc/Top";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Addproduct() {
  const navi = useNavigate();

  let [pname, setPname] = useState("");
  let [pprice, setPprice] = useState("");
  let [pimg, setPimg] = useState(null);
  let [preview, setPreview] = useState(null); // preview state
  let [pdetails, sePdetails] = useState("");

  const handleImageChange = (ev) => {
    const file = ev.target.files[0];
    setPimg(file);
    if (file) {
      setPreview(URL.createObjectURL(file)); // generate preview
    }
  };

  return (
    <>
      <div id="wrapper">
        {/* Sidebar */}
        <Sidebar />
        {/* End of Sidebar */}

        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <Top />
            {/* End of Topbar */}

            {/* Begin Page Content */}
            <div className="container-fluid">
              {/* Page Heading */}
              <h1 className="h3 mb-4 text-gray-800">➕ Add New Product</h1>

              <div className="card shadow mb-4">
                <div className="card-body">
                  <form>
                    {/* Product Name */}
                    <div className="form-group mb-3">
                      <label className="fw-bold">Product Name</label>
                      <input
                        type="text"
                        placeholder="Enter product name"
                        onChange={(ev) => setPname(ev.target.value)}
                        className="form-control"
                      />
                    </div>

                    {/* Product Price */}
                    <div className="form-group mb-3">
                      <label className="fw-bold">Product Price</label>
                      <input
                        type="number"
                        placeholder="Enter product price"
                        onChange={(ev) => setPprice(ev.target.value)}
                        className="form-control"
                      />
                    </div>

                    {/* Product Image */}
                    <div className="form-group mb-3">
                      <label className="fw-bold">Product Image</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="form-control"
                      />
                      {preview && (
                        <div className="mt-3">
                          <p className="text-muted mb-1">Preview:</p>
                          <img
                            src={preview}
                            alt="Preview"
                            className="img-thumbnail"
                            style={{ maxWidth: "200px" }}
                          />
                        </div>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="form-group mb-3">
                      <label className="fw-bold">Product Details</label>
                      <textarea
                        placeholder="Enter product description"
                        onChange={(ev) => sePdetails(ev.target.value)}
                        className="form-control"
                        rows="4"
                      ></textarea>
                    </div>

                    {/* Submit */}
                    <div className="text-end">
                      <button
                        type="button"
                        onClick={async () => {
                          var fd = new FormData();
                          fd.append("pname", pname);
                          fd.append("pprice", pprice);
                          fd.append("pimg", pimg);
                          fd.append("pdetails", pdetails);

                          var resp = await fetch(
                            "http://localhost:2000/product/add",
                            {
                              method: "POST",
                              body: fd,
                            }
                          );
                          await resp.json();
                          navi("/listproduct");
                        }}
                        className="btn btn-success px-4"
                      >
                        ✅ Add Product
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </div>
          {/* End of Main Content */}

          {/* Footer */}
          <Footer />
          {/* End of Footer */}
        </div>
        {/* End of Content Wrapper */}
      </div>

      {/* Scroll to Top Button*/}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up" />
      </a>
    </>
  );
}

export default Addproduct;

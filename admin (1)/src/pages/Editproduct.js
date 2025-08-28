import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();
  const navi = useNavigate();

  const [form, setForm] = useState({
    pname: "",
    pprice: "",
    pdetails: "",
  });
  const [pimg, setPimg] = useState(null);
  const [preview, setPreview] = useState("");

  // Fetch product details
  useEffect(() => {
    axios
      .post("http://localhost:2000/product/edit", { id })
      .then((res) => {
        setForm({
          pname: res.data.pname,
          pprice: res.data.pprice,
          pdetails: res.data.pdetails,
        });
        setPreview(`http://localhost:2000/product_img/${res.data.pimg}`);
      })
      .catch((err) => console.log(err));
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setPimg(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  // Submit updated data
  const handleSubmit = (e) => {
    e.preventDefault();
    let fd = new FormData();
    fd.append("id", id);
    fd.append("pname", form.pname);
    fd.append("pprice", form.pprice);
    fd.append("pdetails", form.pdetails);
    if (pimg) {
      fd.append("pimg", pimg);
    }

    axios
      .post("http://localhost:2000/product/upd", fd)
      .then((res) => {
        alert("✅ Product updated successfully!");
        navi("/listproduct");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">✏️ Edit Product</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            name="pname"
            value={form.pname}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Product Price</label>
          <input
            type="number"
            name="pprice"
            value={form.pprice}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter price"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Product Details</label>
          <textarea
            name="pdetails"
            value={form.pdetails}
            onChange={handleChange}
            className="form-control"
            rows="3"
            placeholder="Enter product details"
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Product Image</label>
          <input type="file" className="form-control" onChange={handleFileChange} />
          {preview && (
            <div className="mt-3 text-center">
              <img
                src={preview}
                alt="Product Preview"
                className="img-thumbnail rounded shadow-sm"
                style={{ maxWidth: "200px" }}
              />
            </div>
          )}
        </div>

        <button type="submit" className="btn btn-success w-100 rounded-pill">
          💾 Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditProduct;

import Footer from "../inc/Footer";
import Menu from "../inc/Menu";

function Home() {
  return (
    <>
      <Menu />

      {/* Hero Section */}
      <div className="bg-light py-5 text-center">
        <div className="container">
          <h1 className="display-4 fw-bold text-success">
            Eco-Friendly Utensils for a Greener Tomorrow
          </h1>
          <p className="lead text-muted">
            Discover sustainable, reusable, and stylish kitchen essentials that
            care for you and the planet.
          </p>
          <a href="/catalog" className="btn btn-success btn-lg mt-3">
            Shop Now
          </a>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container my-5">
        <h2 className="text-center mb-4 fw-bold">Featured Products</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://via.placeholder.com/400x250"
                className="card-img-top"
                alt="Bamboo Cutlery Set"
              />
              <div className="card-body">
                <h5 className="card-title">Bamboo Cutlery Set</h5>
                <p className="card-text">
                  100% natural bamboo cutlery set, perfect for eco-conscious
                  dining.
                </p>
                <a href="/catalog" className="btn btn-outline-success">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://via.placeholder.com/400x250"
                className="card-img-top"
                alt="Steel Lunch Box"
              />
              <div className="card-body">
                <h5 className="card-title">Stainless Steel Lunch Box</h5>
                <p className="card-text">
                  Durable & reusable lunch box to keep your meals fresh and safe.
                </p>
                <a href="/catalog" className="btn btn-outline-success">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://via.placeholder.com/400x250"
                className="card-img-top"
                alt="Reusable Straws"
              />
              <div className="card-body">
                <h5 className="card-title">Reusable Steel Straws</h5>
                <p className="card-text">
                  Eco-friendly straws with a cleaning brush, ditch single-use
                  plastics today.
                </p>
                <a href="/catalog" className="btn btn-outline-success">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-success text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold">Why Choose Us?</h2>
          <p className="mt-3">
            We are committed to providing eco-friendly alternatives for your
            everyday life. Join us in reducing waste and protecting nature.
          </p>
          <a href="/about" className="btn btn-light mt-3">
            Learn More
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;

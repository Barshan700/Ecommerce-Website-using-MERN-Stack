import Footer from "../inc/Footer";
import Menu from "../inc/Menu";

function About() {
  return (
    <>
      <div>
        <Menu />

        {/* Hero Section */}
        <div
          className="about-hero text-center py-5 text-white"
          style={{
            background:
              "linear-gradient(rgba(0, 100, 0, 0.6), rgba(0, 100, 0, 0.6)), url('https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80') center/cover no-repeat",
          }}
        >
          <h1 className="fw-bold">About Us</h1>
          <p>Our journey towards a greener tomorrow 🌍</p>
        </div>

        {/* Main Content */}
        <div className="container mainarea my-5">
          <div className="row align-items-center g-5">
            {/* Left Image */}
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Eco friendly products"
                className="img-fluid rounded shadow"
              />
            </div>

            {/* Right Text */}
            <div className="col-md-6">
              <h2 className="fw-bold mb-4 text-success">Who We Are</h2>
              <p>
                At <strong>EcoWare</strong>, we believe small lifestyle changes
                can make a big impact on our planet. Our mission is to replace
                single-use plastics with sustainable, eco-friendly alternatives
                that are stylish, durable, and affordable.
              </p>
              <p>
                From reusable utensils to biodegradable tableware, every product
                we offer is carefully selected to promote a greener way of
                living without compromising on quality or convenience.
              </p>
              <p>
                Together with our customers, we are building a community of
                conscious consumers who care about the environment and the
                future of our planet. 🌿
              </p>
            </div>
          </div>

          {/* Mission / Vision / Promise */}
          <div className="row text-center mt-5">
            <div className="col-md-4">
              <div className="p-4 shadow rounded bg-light h-100">
                <h4 className="text-success fw-bold">🌍 Our Mission</h4>
                <p>
                  To reduce plastic waste by making sustainable choices
                  accessible and affordable for everyone.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 shadow rounded bg-light h-100">
                <h4 className="text-success fw-bold">🌱 Our Vision</h4>
                <p>
                  A world where eco-friendly living is not an option but a
                  lifestyle embraced by all.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 shadow rounded bg-light h-100">
                <h4 className="text-success fw-bold">🤝 Our Promise</h4>
                <p>
                  High-quality, sustainable products with full transparency and
                  care for the environment.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="my-5">
            <h2 className="text-center fw-bold text-success mb-4">
              Our Journey
            </h2>
            <ul className="timeline list-unstyled">
              <li className="mb-4">
                <h5 className="fw-bold">2019 – The Idea 💡</h5>
                <p>
                  The seed was planted — we noticed the growing plastic waste
                  problem and wanted to create an alternative.
                </p>
              </li>
              <li className="mb-4">
                <h5 className="fw-bold">2020 – First Products 🌱</h5>
                <p>
                  Launched our first line of reusable utensils and eco-friendly
                  packaging.
                </p>
              </li>
              <li className="mb-4">
                <h5 className="fw-bold">2022 – Community Growth 🌍</h5>
                <p>
                  Expanded product range and built a community of conscious
                  customers across India.
                </p>
              </li>
              <li>
                <h5 className="fw-bold">2024 – Today 🚀</h5>
                <p>
                  EcoWare is now a trusted name for sustainable lifestyle
                  products, helping thousands make greener choices every day.
                </p>
              </li>
            </ul>
          </div>

          {/* Meet the Team */}
          <div className="my-5">
            <h2 className="text-center fw-bold text-success mb-4">
              Meet the Team
            </h2>
            <div className="row text-center">
              <div className="col-md-4">
                <div className="card shadow border-0">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    className="card-img-top"
                    alt="Founder"
                  />
                  <div className="card-body">
                    <h5 className="fw-bold">Arjun Mehta</h5>
                    <p className="text-muted">Founder & CEO</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0">
                  <img
                    src="https://randomuser.me/api/portraits/women/45.jpg"
                    className="card-img-top"
                    alt="Designer"
                  />
                  <div className="card-body">
                    <h5 className="fw-bold">Priya Sharma</h5>
                    <p className="text-muted">Product Designer</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0">
                  <img
                    src="https://randomuser.me/api/portraits/men/76.jpg"
                    className="card-img-top"
                    alt="Marketing"
                  />
                  <div className="card-body">
                    <h5 className="fw-bold">Rohan Gupta</h5>
                    <p className="text-muted">Marketing Head</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;

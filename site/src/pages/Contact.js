import Footer from "../inc/Footer";
import Menu from "../inc/Menu";

function Contact() {
  return (
    <>
      <Menu />

      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4">Get in Touch</h2>
        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-md-5">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body">
                <h4 className="fw-bold text-success mb-3">Contact Info</h4>
                <p>
                  <strong>Address:</strong> <br />
                  81, Nilgunj Rd, Jagarata Pally, Deshpriya Nagar, Agarpara,
                  Kolkata, West Bengal 700109
                </p>
                <p>
                  <strong>Phone:</strong> <br />
                  <a href="tel:1234567890" className="text-decoration-none text-dark">
                    1234567890
                  </a>
                </p>
                <p>
                  <strong>Email:</strong> <br />
                  <a href="mailto:info@eco-utensils.com" className="text-decoration-none text-dark">
                    info@eco-utensils.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h4 className="fw-bold text-success mb-3">Send us a Message</h4>
                <form>
                  <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input type="text" className="form-control" placeholder="Enter your name" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder="Enter your email" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" rows="4" placeholder="Type your message"></textarea>
                  </div>
                  <button type="submit" className="btn btn-success w-100">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="col-12">
            <div className="card shadow-sm border-0">
              <div className="card-body p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.380894956206!2d88.379065!3d22.6768604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f899adb6e5139f%3A0x8e43eace10c1361d!2sNarula%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1754734514906!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;

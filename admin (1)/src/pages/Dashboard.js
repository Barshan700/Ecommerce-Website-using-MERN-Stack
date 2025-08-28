import Footer from "../inc/Footer";
import Sidebar from "../inc/Sidebar";
import Top from "../inc/Top";

function Dashboard() {
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
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <small className="text-muted">Overview of EcoUten performance</small>
              </div>

              {/* Cards Row */}
              <div className="row">
                {/* Total Products */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Total Products
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">120</div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-box fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Orders */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Orders
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">75</div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-shopping-cart fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-info shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                            Messages
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">23</div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-envelope fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Revenue */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            Revenue
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">₹50,000</div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-rupee-sign fa-2x text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Extra Section */}
              <div className="row">
                <div className="col-lg-12 mb-4">
                  <div className="card shadow">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">Welcome to EcoWare Admin Panel</h6>
                    </div>
                    <div className="card-body">
                      Manage your products, view orders, and keep track of business growth here.
                    </div>
                  </div>
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
    </>
  );
}

export default Dashboard;

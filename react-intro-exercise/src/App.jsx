function App() {
  return (
    <>
      {/* <h1>React Intro Exercise</h1> */}
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="assets/cropped-BUlogo.png" alt="logo" width="50px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- Hero section --> */}
      <section className="container text-center py-5">
        <h1>Welcome to my Page</h1>
        <p className="text-body-secondary">View my work on github</p>
        <a role="button" className="btn btn-primary" href="https://github.com/">
          View my work
        </a>
      </section>

      {/* <!-- About section --> */}
      <section className="container">
        <div className="row">
          <h2>About Me</h2>
          <div className="col-12 col-md-8">
            <p>
              Hey there! I'm John Doe and I am passionate about web development.
              I enjoy writing code and solving problems.
            </p>

            <p>
              Just starting my journey, i only have months of experience writing
              html, css and javascript code.
            </p>
          </div>

          <div className="col-12 col-md-4">
            <img
              src="assets/profile-pic.jpg"
              alt="profile pic"
              className="img-fluid w-25 rounded-circle"
            />
          </div>
        </div>
      </section>

      {/* <!-- My portfolio section --> */}
      <section className="container text-center">
        <h2>My Portfolio</h2>

        <div className="container">
          <div className="row row-gap-5">
            <div className="col-12 col-md-4">
              <div className="card h-100">
                <img
                  src="assets/html-logo.png"
                  alt=""
                  className="w-50 mx-auto pt-3"
                />

                <div className="card-body">
                  <h3 className="card-title text-sm-start">HTML Project</h3>
                  <p className="card-text text-sm-start">
                    This project helped me showcase my html skills. It's a
                    simple webpage with table, multimedia and a form
                  </p>
                  <a role="button" className="btn btn-primary">
                    View more details
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card h-100">
                <img
                  src="assets/css-logo.png"
                  alt=""
                  className="w-50 mx-auto pt-3"
                />

                <div className="card-body">
                  <h3 className="card-title text-sm-start">CSS Project</h3>
                  <p className="card-text text-sm-start">
                    This project helped me showcase my css skills. It is a step
                    up from the html page. This focuses of styling the web page
                    to look appealing.
                  </p>
                  <a role="button" className="btn btn-primary">
                    View more details
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card h-100">
                <img
                  src="assets/bootstap-logo.jpg"
                  alt=""
                  className="w-50 mx-auto pt-3"
                />

                <div className="card-body">
                  <h3 className="card-title text-sm-start">
                    Bootstrap Project
                  </h3>
                  <p className="card-text text-sm-start">
                    This project helped me showcase my bootstrap skills. I was
                    able to build a website with bootstrap framework
                  </p>
                  <a role="button" className="btn btn-primary">
                    View more details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <h2>Contact Me</h2>

        <form action="">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="form-control w-75"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="jdoe@fakemail.com"
              className="form-control w-75"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your comment here."
              className="form-control w-75"
            ></textarea>
          </div>

          <div>
            <button className="btn btn-success">Send Message</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default App;

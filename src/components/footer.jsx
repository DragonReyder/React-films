function Footer() {
  return <footer className="page-footer darken-1">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">React Movies</h5>
          <p className="grey-text text-lighten-4">All your favourite movies!</p>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        © {new Date().getFullYear()}
        Pershina A.
        <a className="grey-text text-lighten-4 right" href="#!">Repository</a>
      </div>
    </div>
  </footer>
}
export { Footer };
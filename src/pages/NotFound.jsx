import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <h1>404</h1>
        <h2>Üzgünüm aradığın sayfa bulunamadı, istersen; </h2>
        <br />
        <Link to="/anasayfa" className="btn btn-primary">Anasayfaya git</Link>
        <br />
        <h2>Ya da anasayfaya git</h2>
        <br />
        <Link to="/ürünler" className="btn btn-primary">Ürünlere git</Link>
        <br />
   </div>
  );
};

export default NotFound;
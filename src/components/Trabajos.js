
import imgBod from "../img/bodeguero.jpg"
import imgChef from "../img/chef.jpg"
import imgCond from "../img/conductor.jpg"

import "../css/style.css";
import "../css/jobs.css";

const Trabajos = () => {
  return (
    <div>
      <div id="trabajos">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imgBod} alt="bodeguero"></img>
          <div className="card-body">
            <h5 className="card-title">Bodeguero</h5>
            <p className="card-text">
              Se encarga de recibir, organizar y despachar mercancías en una
              bodega o almacén. Controla inventarios, revisa entradas y salidas
              de productos, y mantiene el orden del espacio de trabajo.
            </p>
            <a href="trabajos" className="boton">
              Postular
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imgCond} alt="conductor"></img>
          <div className="card-body">
            <h5 className="card-title">Conductor / Repartidor</h5>
            <p className="card-text">
              Transporta personas o productos de un lugar a otro. Debe tener
              licencia de conducir válida y conocer rutas. En el caso de
              reparto, también se encarga de entregar mercancía y obtener firmas
              o pagos.
            </p>
            <a href="trabajos" className="boton">
              Postular
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imgChef} alt="chef"></img>
          <div className="card-body">
            <h5 className="card-title">Ayudante de Cocina</h5>
            <p className="card-text">
              Asiste al chef o cocineros en la preparación de alimentos. Lava,
              corta y organiza ingredientes, limpia utensilios y mantiene el
              área de cocina en buenas condiciones higiénicas.
            </p>
            <a href="trabajos" className="boton">
              Postular
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trabajos;

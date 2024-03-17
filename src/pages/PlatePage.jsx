import axios from "axios";
import api from "../axios/config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function PlatePage() {
  const [plates, setPlates] = useState([]);

  const getPlates = async () => {

    try {
      const response = await api.get("/AaA-4444");

      const data = response.data;
      setPlates(data);

    } catch (error) {
      console.error(error);
    }

  };

  useEffect(() => {
    getPlates();
  }, []);

  return (

    <div>
      <h1>Placa</h1>
      {plates.length === 0 ? <p>Carregando...</p> : (
          plates.map((plate) => (
            <Link key={plate.id} to={`/plate-page/${plate.reservation}`}>
              <div>
                <span>Tempo Atual</span>
                <p>{plate.time}</p>
              </div>
              <div>
                <span>Pagamento</span>
                <p>{plate.paid === true ? "Pago" : "------"}</p>
              </div>
            </Link>
          ))
      )};
      <div><Link to="/plate-page/1">Dia 1</Link></div>
      <div><Link to="/plate-page/2">Dia 2</Link></div>
      <div><Link to="/plate-page/3">Dia 3</Link></div>
      <div><Link to="/plate-page/4">Dia 4</Link></div>
    </div>
  )
}
import "./PayDetail.css";
import { useState } from "react";

function PayDetail() {
  const [inputs, setInputs] = useState({
    nombre: "",
    apellidos: "",
    mail: "",
    celular: "",
    provincia: "",
    canton: "",
    distrito: "",
    direcExacta: "",
    comprobante: "",
  });

  const [errors, setErrors] = useState({});

  // Validación información del cliente
  const validateInfo = () => {
    const newErrors = {};
    if (inputs.nombre.length < 2) {
      newErrors.nombre = "El nombre ingresado no es válido";
    }
    if (inputs.apellidos.length < 2) {
      newErrors.apellidos = "El apellido ingresado no es válido";
    }
    if (inputs.mail.length < 5) {
      newErrors.mail = "El correo ingresado no es válido";
    }
    if (inputs.celular.length < 8) {
      newErrors.celular = "El celular ingresado no es válido";
    }
    if (inputs.provincia.length < 2) {
      newErrors.provincia = "La provincia ingresada no es válida";
    }
    if (inputs.canton.length < 2) {
      newErrors.canton = "El cantón ingresado no es válido";
    }
    if (inputs.distrito.length < 4) {
      newErrors.distrito = "El distrito ingresado no es válido";
    }
    if (inputs.direcExacta.length < 10) {
      newErrors.direcExacta = "La dirección ingresada no es válida";
    }
    if (!inputs.comprobante) {
      newErrors.comprobante = "Por favor adjuntar el comprobante de pago";
    }
    return newErrors;
  };

  // Control de cambio de información
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Verificación de errores
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateInfo();

    if (Object.keys(formErrors).length === 0) {
      console.log("Formulario válido", inputs);
      // Aquí irían las acciones de envío del formulario
      alert("Formulario enviado correctamente");
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="container-pay">
      <h4>Detalle de los productos</h4>
      <div className="pay-sections">
        <div className="products-lines">
          <div className="products-info">
            <img src="/src/assets/imgs/Detail.webp" alt="Producto" />
            <p>
              Tee Camisa <br />
              <br />
              $$ 450
            </p>
            <p>$$ 150000</p>
          </div>
          <div className="products-info">
            <img src="/src/assets/imgs/Detail.webp" alt="Producto" />
            <p>
              Tee Camisa <br />
              <br />
              $$ 450
            </p>
            <p>$$ 150000</p>
          </div>
          <div className="products-cancel">
            <p>Monto total: $$ Suma</p>
          </div>
        </div>
        <div className="client-info">
          <form onSubmit={handleSubmit}>
            <div className="form-lines">
              <div>
                <label htmlFor="nombre">Nombre:</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={inputs.nombre}
                  onChange={handleChange}
                  placeholder="Ingrese su nombre"
                />
                {errors.nombre && (
                  <p style={{ color: "red", fontSize: "0.8em" }}>
                    {errors.nombre}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="apellidos">Apellidos:</label>
                <input
                  type="text"
                  id="apellidos"
                  name="apellidos"
                  value={inputs.apellidos}
                  onChange={handleChange}
                  placeholder="Ingrese sus apellidos"
                />
                {errors.apellidos && (
                  <p style={{ color: "red", fontSize: "0.8em" }}>
                    {errors.apellidos}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="mail">Correo:</label>
                <input
                  type="email"
                  id="mail"
                  name="mail"
                  value={inputs.mail}
                  onChange={handleChange}
                  placeholder="Ingrese su correo"
                />
                {errors.mail && (
                  <p style={{ color: "red", fontSize: "0.8em" }}>
                    {errors.mail}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="celular">Celular:</label>
                <input
                  type="tel"
                  id="celular"
                  name="celular"
                  value={inputs.celular}
                  onChange={handleChange}
                  placeholder="Ingrese su celular"
                />
                {errors.celular && (
                  <p style={{ color: "red", fontSize: "0.8em" }}>
                    {errors.celular}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="provincia">Provincia:</label>
                <input
                  type="text"
                  id="provincia"
                  name="provincia"
                  value={inputs.provincia}
                  onChange={handleChange}
                  placeholder="Ingrese su provincia"
                />
                {errors.provincia && (
                  <p style={{ color: "red", fontSize: "0.8em" }}>
                    {errors.provincia}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="canton">Cantón:</label>
                <input
                  type="text"
                  id="canton"
                  name="canton"
                  value={inputs.canton}
                  onChange={handleChange}
                  placeholder="Ingrese su cantón"
                />
                {errors.canton && (
                  <p style={{ color: "red", fontSize: "0.8em" }}>
                    {errors.canton}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="distrito">Distrito:</label>
                <input
                  type="text"
                  id="distrito"
                  name="distrito"
                  value={inputs.distrito}
                  onChange={handleChange}
                  placeholder="Ingrese su distrito"
                />
                {errors.distrito && (
                  <p style={{ color: "red", fontSize: "0.8em" }}>
                    {errors.distrito}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="direcExacta">Dirección Exacta:</label>
                <input
                  type="text"
                  id="direcExacta"
                  name="direcExacta"
                  value={inputs.direcExacta}
                  onChange={handleChange}
                  placeholder="Ingrese su dirección exacta"
                />
                {errors.direcExacta && (
                  <p style={{ color: "red", fontSize: "0.8em" }}>
                    {errors.direcExacta}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="comprobante">
                Comprobante, puede realizar el pago por medio de Sinpe Móvil al
                8888-8888 a nombre de Andy Garro:
              </label>
              <input
                type="file"
                id="comprobante"
                name="comprobante"
                value={inputs.comprobante}
                onChange={handleChange}
                placeholder="Comprobante de pago"
              />
              {errors.comprobante && (
                <p style={{ color: "red", fontSize: "0.8em" }}>
                  {errors.comprobante}
                </p>
              )}
            </div>
            <div className="form-submit">
              <button type="submit" className="submit-button">
                Confirmar Datos
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PayDetail;

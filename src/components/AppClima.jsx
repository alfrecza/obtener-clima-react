import Formulario from "./Formulario";
import Resultado from "./Resultado";
import Loading from "./Loading";
import { useClima } from "../hooks/useClima";

const AppClima = () => {
    const { resultado, cargando, noResultado } = useClima();

    return (
        <>
            <main className="dos-columnas">
                <Formulario />

                {cargando ? (
                    <Loading />
                ) : noResultado ? (
                    <p>{noResultado}</p>
                ) : resultado?.name ? (
                    <Resultado />
                ) : (
                    ""
                )}
            </main>
        </>
    );
};

export default AppClima;

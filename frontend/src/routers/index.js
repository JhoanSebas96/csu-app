import { createBrowserRouter } from "react-router-dom";
import { About } from "../components/pages/About";
import { Contact } from "../components/pages/Contact";
import { Home } from "../components/pages/Home";
import { FreQuestions } from "../components/pages/FreQuestions";
import { LayoutPublic } from "../layout/LayoutPublic";
import { OfertaAcademica } from "../components/pages/OfertaAcademica";
import { DegreesPage } from "../components/DegreesPage";

<DegreesPage></DegreesPage>

export const router = createBrowserRouter([
    {
        path:"/",
        element: <LayoutPublic />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/nosotros",
                element: <About />,
            },
            {
                path: "/oferta-academica",
                element: <OfertaAcademica />,
            },
            {
                path: "/preguntas-frecuentes",
                element: <FreQuestions />,
            },
            {
                path: "/contacto",
                element: <Contact />,
            },
            {
                path: "/oferta-academica/:carreraId",
                element: <DegreesPage />
            }
            
            
        ]
    },
]);
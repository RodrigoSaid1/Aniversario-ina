import { useMemo } from "react";
import { Container, Grid, CssBaseline, ThemeProvider, createTheme, styled, Divider } from "@mui/material";
import Convite from "./Componentes/Convite";
import "./Global.css";
import Frase from "./Componentes/Frase";
import Endereco from "./Componentes/Endereco";
import Presentes from "./Componentes/Presentes";
import ListaPresentes from "./Componentes/ListaPresentes";
import Pix from "./Componentes/Pix";
import backgroundImage from "./assets/tardizinha.jpg";
import presente1 from "./assets/presente1.jpg";
import presente2 from "./assets/presente2.jpg";
import presente3 from "./assets/presente3.jpg";
import presente4 from "./assets/presente4.jpg";
import presente5 from "./assets/presente5.jpg";
import presente6 from "./assets/presente6.jpg";
import presente7 from "./assets/presente7.jpg";
import presente8 from "./assets/presente8.jpg";
import presente9 from "./assets/presente9.jpg";
import presente10 from "./assets/presente10.jpg";
import presente11 from "./assets/presente11.jpg";
import presente12 from "./assets/presente12.jpg";
import presente13 from "./assets/presente13.jpg";


const post = [
    {
        id: 1,
        imagem: {
            imagemURL: presente1,
            name: "Perfume Eudora Kiss Me rosa",
            preco: "R$ 84,54",
        },
    },
    {
        id: 2,
        imagem: {
            imagemURL: presente2,
            name: "Perfume ilia ",
            preco: "R$ 159,90",
        },
    },
    {
        id: 3,
        imagem: {
            imagemURL: presente3,
            name: "Perfume Egeo",
            preco: "R$ 129,90",
        },
    },
    {
        id: 4,
        imagem: {
            imagemURL: presente4,
            name: "Refil creme de Deleite",
            preco: "R$ 46,90",
        },
    },
    {
        id: 5,
        imagem: {
            imagemURL: presente5,
            name: "Bolsa Mala",
            preco: "R$ 48,90",
        },
    },
    {
        id: 6,
        imagem: {
            imagemURL: presente6,
            name: "Capinha farm",
            preco: "R$ 14,95",
        },
    },
    {
        id: 7,
        imagem: {
            imagemURL: presente7,
            name: "Blusa babado",
            preco: "R$ 32,00",
        },
    },
    {
        id: 8,
        imagem: {
            imagemURL: presente8,
            name: "Body preto e branco",
            preco: "R$ 46,00",
        },
    },
    {
        id: 9,
        imagem: {
            imagemURL: presente9,
            name: "Short Saia com cinto",
            preco: "R$ 58,00",
        },
    },
    {
        id: 10,
        imagem: {
            imagemURL: presente10,
            name: "Leave-in Match science",
            preco: "R$ 49,90",
        },
    },
    {
        id: 11,
        imagem: {
            imagemURL: presente11,
            name: "Sabonete líquido",
            preco: "R$ 39,90",
        },
    },
    {
        id: 12,
        imagem: {
            imagemURL: presente12,
            name: "Sandália de amarrar",
            preco: "R$ 56,99",
        },
    },
    {
        id: 13,
        imagem: {
            imagemURL: presente13,
            name: "Calça",
            preco: "R$ 54,99",
        },
    },

];

const theme = createTheme();

const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    minHeight: "100vh",
};

const StyledContainer = styled( Container )( ( { theme } ) => ( {
    padding: theme.spacing( 2 ),
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(5px)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem"
} ) );

function App () {
    const isMobileDevice = useMemo( () => {
        return /iPhone|iPad|iPod|Android|Mobile|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent );
    }, [] );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div style={backgroundStyle}>
                <StyledContainer maxWidth={ isMobileDevice ? "sm" : "lg" }>
                    <Convite />
                    <Frase />
                    <Endereco />
                    <ListaPresentes />
                    <Grid container spacing={5}>
                        {
                            post.map( postItem => <Presentes key={postItem.id} imagem={ postItem.imagem } /> )
                        }
                        <Divider/>
                    </Grid>
                    <Pix />


                </StyledContainer>
            </div>
        </ThemeProvider>
    );
}

export default App;
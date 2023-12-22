import { useMemo } from "react";
import styles from "./App.module.css";
import { Container, Grid, CssBaseline, ThemeProvider, createTheme, styled, Divider, Button } from "@mui/material";
import Convite from "./Componentes/Convite";
import "./Global.css";
import Frase from "./Componentes/Frase";
import Presentes from "./Componentes/Presentes";
import ListaPresentes from "./Componentes/ListaPresentes";
import Pix from "./Componentes/Pix";
import { Instagram } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import backgroundImage from "./assets/Hamburguer_Back_Grauder.jpg";
import presente60 from "./assets/Said_Burguer.png";

//Importando Para Agua
import lata from "./assets/latas.png";
import refrigerante1Litro from "./assets/refrigerante1Litro.png";
import sucosLata from "./assets/sucosLata.png";
import agua from "./assets/agua.jpg";


const post = [
    {
        id: 1,
        imagem: {
            imagemURL: presente60,
            name: "Pendente",
            preco: "R$ 00,00",
        },
    },
    {
        id: 2,
        imagem: {
            imagemURL: presente60,
            name: "Pendente",
            preco: "R$ 00,00",

        },
    },
    {
        id: 3,
        imagem: {
            imagemURL: presente60,
            name: "Pendente",
            preco: "R$ 00,00",
        },
    },
    {
        id: 4,
        imagem: {
            imagemURL: presente60,
            name: "Pendente",
            preco: "R$ 00,00",

        },
    },
    {
        id: 5,
        imagem: {
            imagemURL: presente60,
            name: "Pendente",
            preco: "R$ 00,00",

        },
    },
    {
        id: 6,
        imagem: {
            imagemURL: presente60,
            name: "Pendente",
            preco: "R$ 00,00",

        },
    },
    {
        id: 7,
        imagem: {
            imagemURL: presente60,
            name: "Pendente",
            preco: "R$ 00,00",

        },
    },
    {
        id: 8,
        imagem: {
            imagemURL: presente60,
            name: "Pendente",
            preco: "R$ 00,00",

        },
    },
    {
        id: 9,
        imagem: {
            imagemURL: presente60,
            name: "Pendente",
            preco: "R$ 00,00",

        },
    },
];
const hamburgues = [
    {
        id: 1,
        imagem: {
            imagemURL: presente60,
            name: "Pendente",
            preco: "R$ 00,00",
        },
    },
    {
        id: 2,
        imagem: {
            imagemURL: presente60,
            name: "Pendente",
            preco: "R$ 00,00",

        },
    },
    {
        id: 3,
        imagem: {
            imagemURL: presente60,
            name: "Pendente",
            preco: "R$ 00,00",

        },
    },
    {
        id: 4,
        imagem: {
            imagemURL: presente60,
            name: "Pendente",
            preco: "R$ 00,00",

        },
    },
    {
        id: 5,
        imagem: {
            imagemURL: presente60,
            name: "Pendente",
            preco: "R$ 00,00",

        },
    },
    {
        id: 6,
        imagem: {
            imagemURL: presente60,
            name: "Pendente",
            preco: "R$ 00,00",

        },
    },
    {
        id: 7,
        imagem: {
            imagemURL: presente60,
            name: "Pendente",
            preco: "R$ 00,00",

        },
    },
    {
        id: 8,
        imagem: {
            imagemURL: presente60,
            name: "Pendente",
            preco: "R$ 00,00",

        },
    },
    {
        id: 9,
        imagem: {
            imagemURL: presente60,
            name: "Pendente",
            preco: "R$ 00,00",

        },
    },
];
const bebidas = [
    {
        id: 1,
        imagem: {
            imagemURL: lata,
            name: "Refrigerante Lata 350 ml",
            preco: "R$ 5,00",
        },
    },
    {
        id: 2,
        imagem: {
            imagemURL: refrigerante1Litro,
            name: "Refrigerante 1 Litro ",
            preco: "R$ 10,00",
        },
    },
    {
        id: 3,
        imagem: {
            imagemURL: sucosLata,
            name: "Suco Lata",
            preco: "R$ 5,00",

        },
    },
    {
        id: 4,
        imagem: {
            imagemURL: agua,
            name: "Água",
            preco: "R$ 4,00",
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
    background: "rgba(255, 255, 255, 0.6)",
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
                    <ListaPresentes />
                    <h1 className={styles.artesanais}>Hamburgues Artesanais</h1>
                    <Grid container spacing={15}>
                        {
                            post.map( postItem => <Presentes key={postItem.id} imagem={ postItem.imagem } /> )
                        }
                        <Divider/>
                    </Grid>
                    <h1 className={styles.artesanais}>Hamburgues</h1>
                    <Grid container spacing={15}>
                        {
                            hamburgues.map( postItem => <Presentes key={postItem.id} imagem={ postItem.imagem } /> )
                        }
                        <Divider/>
                    </Grid>
                    <h1 className={styles.artesanais}>Bebidas</h1>
                    <Grid container spacing={15}>
                        {
                            bebidas.map( postItem => <Presentes key={postItem.id} imagem={ postItem.imagem } /> )
                        }
                        <Divider/>
                    </Grid>
                    <Pix />
                    <div className={styles.Instagram}>
                        <Instagram
                            padding = "2rem"
                        />
                        <Button href="https://www.instagram.com/said_burguer/" target="_blank" sx={{ color: "black" }}>Instagram</Button>
                        <WhatsAppIcon></WhatsAppIcon><p>31 99127-0967</p>


                    </div>


                </StyledContainer>
            </div>
        </ThemeProvider>
    );
}

export default App;
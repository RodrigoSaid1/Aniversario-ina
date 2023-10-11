import { useMemo } from "react";
import styles from "./App.module.css";
import { Container, Grid, CssBaseline, ThemeProvider, createTheme, styled, Divider, Button } from "@mui/material";
import Convite from "./Componentes/Convite";
import "./Global.css";
import Frase from "./Componentes/Frase";
import Endereco from "./Componentes/Endereco";
import Presentes from "./Componentes/Presentes";
import ListaPresentes from "./Componentes/ListaPresentes";
import Pix from "./Componentes/Pix";
import { Instagram } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
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
import presente14 from "./assets/presente14.jpg";
import presente15 from "./assets/presente15.jpg";
import presente16 from "./assets/presente16.jpg";
import presente17 from "./assets/presente17.jpg";
import presente18 from "./assets/presente18.jpg";
import presente19 from "./assets/presente19.jpg";
import presente20 from "./assets/presente20.jpg";
import presente21 from "./assets/presente21.jpg";
import presente22 from "./assets/presente22.jpg";
import presente23 from "./assets/presente23.jpg";
import presente24 from "./assets/presente24.jpg";

const post = [
    {
        id: 1,
        imagem: {
            imagemURL: presente1,
            name: "Perfume Eudora Kiss Me rosa",
            preco: "R$ 84,54",
            descricao: "Pois é meus amigos tenho que ficar cheirosa né, não é só de beleza que se vive kkkk",
        },
    },
    {
        id: 2,
        imagem: {
            imagemURL: presente2,
            name: "Perfume ilia ",
            preco: "R$ 159,90",
            descricao: "oi",
        },
    },
    {
        id: 3,
        imagem: {
            imagemURL: presente3,
            name: "Perfume Egeo",
            preco: "R$ 129,90",
            descricao: "oi",
        },
    },
    {
        id: 4,
        imagem: {
            imagemURL: presente4,
            name: "Refil creme de Deleite",
            preco: "R$ 46,90",
            descricao: "oi",
        },
    },
    {
        id: 5,
        imagem: {
            imagemURL: presente5,
            name: "Bolsa Mala",
            preco: "R$ 48,90",
            descricao: "oi",
        },
    },
    {
        id: 6,
        imagem: {
            imagemURL: presente6,
            name: "Capinha farm",
            preco: "R$ 14,95",
            descricao: "oi",
        },
    },
    {
        id: 7,
        imagem: {
            imagemURL: presente7,
            name: "Blusa babado",
            preco: "R$ 32,00",
            descricao: "oi",
        },
    },
    {
        id: 8,
        imagem: {
            imagemURL: presente8,
            name: "Body preto e branco",
            preco: "R$ 46,00",
            descricao: "oi",
        },
    },
    {
        id: 9,
        imagem: {
            imagemURL: presente9,
            name: "Short Saia com cinto",
            preco: "R$ 58,00",
            descricao: "oi",
        },
    },
    {
        id: 10,
        imagem: {
            imagemURL: presente10,
            name: "Leave-in Match science",
            preco: "R$ 49,90",
            descricao: "oi",
        },
    },
    {
        id: 11,
        imagem: {
            imagemURL: presente11,
            name: "Sabonete líquido",
            preco: "R$ 39,90",
            descricao: "oi",
        },
    },
    {
        id: 12,
        imagem: {
            imagemURL: presente12,
            name: "Sandália de amarrar",
            preco: "R$ 56,99",
            descricao: "oi",
        },
    },
    {
        id: 13,
        imagem: {
            imagemURL: presente13,
            name: "Calça",
            preco: "R$ 54,99",
            descricao: "oi",
        },
    },
    {
        id: 14,
        imagem: {
            imagemURL: presente14,
            name: "Blusa Ursinho",
            preco: "R$ 29,99",
            descricao: "oi",
        },
    },
    {
        id: 15,
        imagem: {
            imagemURL: presente15,
            name: "Vestido Curto Florido",
            preco: "R$ 50,11",
            descricao: "oi",
        },
    },
    {
        id: 16,
        imagem: {
            imagemURL: presente16,
            name: "Chinelo havaianas ",
            preco: "R$ 59,99",
            descricao: "oi",
        },
    },
    {
        id: 17,
        imagem: {
            imagemURL: presente17,
            name: "Blusa",
            preco: "R$ 23,99",
            descricao: "oi",
        },
    },
    {
        id: 18,
        imagem: {
            imagemURL: presente18,
            name: "Vestido preto longo",
            preco: "R$ 48,99",
            descricao: "oi",
        },
    },
    {
        id: 19,
        imagem: {
            imagemURL: presente19,
            name: "Vestido longo bege ",
            preco: "R$ 40,00",
            descricao: "oi",
        },
    },
    {
        id: 20,
        imagem: {
            imagemURL: presente20,
            name: "Blusa tomara que caia preta ",
            preco: "R$ 34,95",
            descricao: "oi",
        },
    },
    {
        id: 21,
        imagem: {
            imagemURL: presente21,
            name: "Cropped Preto ",
            preco: "R$ 35,00",
            descricao: "oi",
        },
    },
    {
        id: 22,
        imagem: {
            imagemURL: presente22,
            name: "Blusa tomara que caia branca ",
            preco: "R$ 29,90",
            descricao: "oi",
        },
    },
    {
        id: 23,
        imagem: {
            imagemURL: presente23,
            name: "Meia com 12 pares",
            preco: "R$ 23,99",
            descricao: "oi",
        },
    },
    {
        id: 24,
        imagem: {
            imagemURL: presente24,
            name: "Tênis air force",
            preco: "R$ 123,00",
            descricao: "oi",
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
                    <div className={styles.Instagram}>
                        <Instagram
                            padding = "2rem"
                        />
                        <Button href="https://www.instagram.com/inahya_santos/" target="_blank" sx={{ color: "black" }}>Instagram</Button>
                        <WhatsAppIcon></WhatsAppIcon><p>31 7539-1829</p>

                    </div>


                </StyledContainer>
            </div>
        </ThemeProvider>
    );
}

export default App;
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
import presente25 from "./assets/presente25.jpg";
import presente26 from "./assets/presente26.jpg";
import presente27 from "./assets/presente27.jpg";
import presente28 from "./assets/presente28.jpg";
import presente29 from "./assets/presente29.jpg";
import presente30 from "./assets/presente30.jpg";
import presente31 from "./assets/presente31.jpg";
import presente32 from "./assets/presente32.jpg";
import presente33 from "./assets/presente33.jpg";
import presente34 from "./assets/presente34.jpg";
import presente35 from "./assets/presente35.jpg";
import presente36 from "./assets/presente36.jpg";
import presente37 from "./assets/presente37.jpg";
import presente38 from "./assets/presente38.jpg";
import presente39 from "./assets/presente39.jpg";
import presente40 from "./assets/presente40.jpg";
import presente41 from "./assets/presente41.jpg";
import presente42 from "./assets/presente42.jpg";
import presente43 from "./assets/presente43.jpg";
import presente44 from "./assets/presente44.jpg";
import presente45 from "./assets/presente45.jpg";
import presente46 from "./assets/presente46.jpg";
import presente47 from "./assets/presente47.jpg";
import presente48 from "./assets/presente48.jpg";
import presente49 from "./assets/presente49.jpg";
import presente50 from "./assets/presente50.jpg";
import presente51 from "./assets/presente51.jpg";
import presente52 from "./assets/presente52.jpg";
import presente53 from "./assets/presente53.jpg";
import presente54 from "./assets/presente54.jpg";
import presente55 from "./assets/presente55.jpg";
import presente56 from "./assets/presente56.jpg";
import presente57 from "./assets/presente57.jpg";
import presente58 from "./assets/presente58.jpg";
import presente59 from "./assets/presente59.jpg";
import presente60 from "./assets/presente60.jpg";


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
            preco: "R$ 102,90",

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
    {
        id: 14,
        imagem: {
            imagemURL: presente14,
            name: "Blusa Ursinho",
            preco: "R$ 29,99",

        },
    },
    {
        id: 15,
        imagem: {
            imagemURL: presente15,
            name: "Vestido Curto Florido",
            preco: "R$ 50,11",

        },
    },
    {
        id: 16,
        imagem: {
            imagemURL: presente16,
            name: "Chinelo havaianas ",
            preco: "R$ 59,99",

        },
    },
    {
        id: 17,
        imagem: {
            imagemURL: presente17,
            name: "Blusa",
            preco: "R$ 23,99",

        },
    },
    {
        id: 18,
        imagem: {
            imagemURL: presente18,
            name: "Vestido preto longo",
            preco: "R$ 48,99",

        },
    },
    {
        id: 19,
        imagem: {
            imagemURL: presente19,
            name: "Vestido longo bege ",
            preco: "R$ 40,00",

        },
    },
    {
        id: 20,
        imagem: {
            imagemURL: presente20,
            name: "Blusa tomara que caia preta ",
            preco: "R$ 34,95",

        },
    },
    {
        id: 21,
        imagem: {
            imagemURL: presente21,
            name: "Cropped Preto ",
            preco: "R$ 35,00",

        },
    },
    {
        id: 22,
        imagem: {
            imagemURL: presente22,
            name: "Blusa tomara que caia branca ",
            preco: "R$ 29,90",

        },
    },
    {
        id: 23,
        imagem: {
            imagemURL: presente23,
            name: "Meia com 12 pares",
            preco: "R$ 23,99",

        },
    },
    {
        id: 24,
        imagem: {
            imagemURL: presente24,
            name: "Tênis air force",
            preco: "R$ 123,00",

        },
    },
    {
        id: 25,
        imagem: {
            imagemURL: presente25,
            name: "Blazer Bege",
            preco: "R$ 65,00",

        },
    },
    {
        id: 26,
        imagem: {
            imagemURL: presente26,
            name: "Fone",
            preco: "R$ 50,00",

        },
    },
    {
        id: 27,
        imagem: {
            imagemURL: presente27,
            name: "Bolsa Preta",
            preco: "R$ 60,00",

        },
    },
    {
        id: 28,
        imagem: {
            imagemURL: presente28,
            name: "Body Preto",
            preco: "R$ 39,00",

        },
    },
    {
        id: 29,
        imagem: {
            imagemURL: presente29,
            name: "Conjunto Preto",
            preco: "R$ 60,00",

        },
    },
    {
        id: 30,
        imagem: {
            imagemURL: presente30,
            name: "Vestido Rosa",
            preco: "R$ 55,00",

        },
    },
    {
        id: 31,
        imagem: {
            imagemURL: presente31,
            name: "Blazer Rosa",
            preco: "R$ 65,00",

        },
    },
    {
        id: 32,
        imagem: {
            imagemURL: presente32,
            name: "Blazer Bege",
            preco: "R$ 65,00",
        },
    },
    {
        id: 33,
        imagem: {
            imagemURL: presente33,
            name: "Capinha Farm",
            preco: "R$ 16,00",
        },
    },
    {
        id: 34,
        imagem: {
            imagemURL: presente34,
            name: "Jaqueta Couro",
            preco: "R$ 55,00",
        },
    },
    {
        id: 35,
        imagem: {
            imagemURL: presente35,
            name: "Conjunto Bege",
            preco: "R$ 60,00",
        },
    },
    {
        id: 36,
        imagem: {
            imagemURL: presente36,
            name: "Tenis Branco",
            preco: "R$ 55,00",
        },
    },
    {
        id: 37,
        imagem: {
            imagemURL: presente37,
            name: "Conjunto Blazer e Short",
            preco: "R$ 60,00",
        },
    },
    {
        id: 38,
        imagem: {
            imagemURL: presente38,
            name: "Sandalia Amarração",
            preco: "R$ 57,00",
        },
    },
    {
        id: 39,
        imagem: {
            imagemURL: presente39,
            name: "Conjunto calça e cropped bege ",
            preco: "R$ 65,00",
        },
    },
    {
        id: 40,
        imagem: {
            imagemURL: presente40,
            name: "Vestido Amarelo",
            preco: "R$ 55,00",
        },
    },
    {
        id: 41,
        imagem: {
            imagemURL: presente41,
            name: "Calça Preta",
            preco: "R$ 55,00",
        },
    },
    {
        id: 42,
        imagem: {
            imagemURL: presente42,
            name: "Sandalia Preta",
            preco: "R$ 73,00",
        },
    },
    {
        id: 43,
        imagem: {
            imagemURL: presente43,
            name: "Body Branco",
            preco: "R$ 55,00",
        },
    },
    {
        id: 44,
        imagem: {
            imagemURL: presente44,
            name: "Body Preto",
            preco: "R$ 55,00",
        },
    },
    {
        id: 45,
        imagem: {
            imagemURL: presente45,
            name: "Conjunto Relogio",
            preco: "R$ 33,00",
        },
    },
    {
        id: 46,
        imagem: {
            imagemURL: presente46,
            name: "Blusa Listrada",
            preco: "R$ 49,00",
        },
    },
    {
        id: 47,
        imagem: {
            imagemURL: presente47,
            name: "Bolsa Branca",
            preco: "R$ 64,00",
        },
    },
    {
        id: 48,
        imagem: {
            imagemURL: presente48,
            name: "Primer",
            preco: "R$ 33,00",
        },
    },
    {
        id: 49,
        imagem: {
            imagemURL: presente49,
            name: "Base Mary Kay",
            preco: "R$ 55,00",
        },
    },
    {
        id: 50,
        imagem: {
            imagemURL: presente50,
            name: "Tenis Bege",
            preco: "R$ 54,00",
        },
    },
    {
        id: 51,
        imagem: {
            imagemURL: presente51,
            name: "Tenis Rosa e Cinza",
            preco: "R$ 54,00",
        },
    },
    {
        id: 52,
        imagem: {
            imagemURL: presente52,
            name: "Tênis Bege",
            preco: "R$ 60,00",
        },
    },
    {
        id: 53,
        imagem: {
            imagemURL: presente53,
            name: "Colar",
            preco: "R$ 14,00",
        },
    },
    {
        id: 54,
        imagem: {
            imagemURL: presente54,
            name: "Blusa Babado Flor",
            preco: "R$ 28,00",
        },
    },
    {
        id: 55,
        imagem: {
            imagemURL: presente55,
            name: "Cinto",
            preco: "R$ 25,00",
        },
    },
    {
        id: 56,
        imagem: {
            imagemURL: presente56,
            name: "Pijama",
            preco: "R$ 48,00",
        },
    },
    {
        id: 57,
        imagem: {
            imagemURL: presente57,
            name: "Pijama Champanhe",
            preco: "R$ 60,00",
        },
    },
    {
        id: 58,
        imagem: {
            imagemURL: presente58,
            name: "Body Bege",
            preco: "R$ 50,00",
        },
    },
    {
        id: 59,
        imagem: {
            imagemURL: presente59,
            name: "Calça Branca",
            preco: "R$ 50,00",
        },
    },
    {
        id: 60,
        imagem: {
            imagemURL: presente60,
            name: "Cinto",
            preco: "R$ 41,00",
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
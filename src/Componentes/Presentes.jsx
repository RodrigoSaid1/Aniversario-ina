import { Grid, Typography, Card, CardContent, CardMedia, styled } from "@mui/material";

const PresenteCard = styled( Card )( () => ( {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    border: "solid rgb(240, 201, 130)",
} ) );

const Imagem = styled( CardMedia )( () => ( {
    width: "100%",
    paddingTop: "100%",
    backgroundSize: "cover",
} ) );

const NomePreco = styled( Typography )( () => ( {
    fontSize: "1.5rem",
    textAlign: "center",
} ) );

const StyledCardContent = styled( CardContent )( () => ( {
    height: "150px"
} ) );

const ContentPix = styled( "div" )( () => ( {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "12px"
} ) );

export default function Presentes ( { imagem } ) {
    return (
        <Grid item xs={12} sm={12} md={6} lg={4}>
            <PresenteCard variant="outlined" >
                <Imagem
                    alt="Imagem da bolsa"
                    image={imagem.imagemURL}
                />
                <StyledCardContent>
                    <NomePreco variant="h1">
                        {imagem.name}
                    </NomePreco>
                    <ContentPix>
                        <Typography variant="body2">
                            {imagem.preco}
                        </Typography>
                        <Typography variant="body2">
                    Pix: inahya.maria@hotmail.com
                        </Typography>
                    </ContentPix>
                </StyledCardContent>
            </PresenteCard>
        </Grid>
    );
}

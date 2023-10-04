import { Box, Typography } from "@mui/material";
import QRCodeImage from "../assets/pixQRCOD.jpg";
const Pix = () => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h6">Pix</Typography>
            <img src={QRCodeImage} alt="Pix QR Code" width={ 144 } height={ 144 } />
        </Box>
    );
};

export default Pix;

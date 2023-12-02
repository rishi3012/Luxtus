import React from "react";
import {Box} from '@mui/material';
import Typography from "@mui/material/Typography";
import {motion} from "framer-motion";



function announcement() {
    return(
        <Box
        sx={{
            backgroundColor: 'black',
            width: '100%',
            height: 30,
            overflow: 'hidden',
        }}
        >
        <motion.div
      initial={{ opacity: 0, y: -20 }} // Initial state
      animate={{ opacity: 1, y: 0 }} // Animation state
      transition={{ duration: 3}} // Transition duration
        >
        <Typography
        sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            margin: 'auto',
            fontFamily:'Archivo Narrow, sans-serif',
            fontSize: '18px',
            marginTop: 'auto'
        }}
        >
            Happy End To The Year! Save 15% on All Sunglasses!
        </Typography>
        </motion.div>
        </Box>
    );
};

export default announcement;
import "./App.css";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        background: "#ccc",
      }}
    >
      <motion.div
        initial={{
          padding: "30px",
          background: "#fff",
          width: `${window.innerWidth / 2}px`,
          height: "100%",
        }}
        animate={{
          width: "400px",
          height: "100%",
          boxSizing: "border-box",
          padding: "30px",
          display: "flex",
          alignItems: "center",
          background: "#fff",
        }}
        transition={{ duration: 1 }}
      >
        <motion.div
          animate={{ transform: "translateY(-50%)" }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h1">
            秋信
            <Box component={"span"} sx={{ marginLeft: "8px" }}>
              🍁
            </Box>
          </Typography>
          <Typography sx={{ marginTop: "1rem" }}>
            秋天的信封，唤起了过往的思绪。
          </Typography>
        </motion.div>
      </motion.div>
    </Box>
  );
}

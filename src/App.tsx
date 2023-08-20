import "./App.css";
import { Box, Typography } from "@mui/material";

export function App() {
  return (
    <Box sx={{ height: "100vh", overflow: "hidden" }}>
      <Box
        sx={{
          height: "100%",
          overflow: "hidden",
          boxSizing: "border-box",
          padding: "30px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ transform: "translateY(-50%)" }}>
          <Typography variant="h1">
            秋信
            <Box component={"span"} sx={{ marginLeft: "8px" }}>
              🍁
            </Box>
          </Typography>
          <Typography sx={{ marginTop: "1rem" }}>
            秋天的信封，唤起了过往的思绪。
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

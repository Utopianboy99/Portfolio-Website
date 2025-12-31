import { Container, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LaserFlow from "../../components/LaserFlow/LaserFlow";
import Footer from "../../components/Footer/Footer";

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 }, textAlign: "center" }}>
      <Box display="flex" justifyContent="center" mb={4}>
        <LaserFlow />
      </Box>

      <Typography variant="h1" fontWeight={800} mb={2} sx={{ fontSize: { xs: 48, md: 64 } }}>
        404
      </Typography>

      <Typography variant="h4" fontWeight={600} mb={2} color="text.secondary">
        Page Not Found
      </Typography>

      <Typography color="text.secondary" mb={6} sx={{ fontSize: { xs: 16, md: 18 }, maxWidth: 500, mx: "auto" }}>
        The page you're looking for doesn't exist. It might have been moved or deleted. Let's get you back on track.
      </Typography>

      <Box display="flex" gap={2} justifyContent="center" flexWrap="wrap">
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/")}
        >
          Go Home
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => navigate("/work")}
        >
          View Work
        </Button>
      </Box>

      <Box sx={{ mt: 12 }}>
        <Footer />
      </Box>
    </Container>
  );
}

export default NotFound;

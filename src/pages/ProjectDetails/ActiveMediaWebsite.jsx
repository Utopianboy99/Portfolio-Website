import { Container, Typography, Box, Stack, Chip, Button, Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Footer from '../../components/Footer/Footer'

function ActiveMediaWebsite() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/work")}
        sx={{ mb: 4 }}
      >
        Back to Projects
      </Button>

      {/* HEADER */}
      <Typography variant="h3" fontWeight={800} mb={2}>
        Active Media
      </Typography>

      <Typography variant="h6" color="secondary" fontWeight={600} mb={4}>
        Business Website for Digital Media Company
      </Typography>

      <Box
        component="img"
        src="https://via.placeholder.com/1200x420?text=Active+Media+Website"
        alt="Active Media - hero"
        sx={{ width: 1, borderRadius: 2, mb: 4 }}
      />

      <Typography
        variant="body2"
        sx={{
          mb: 4,
          p: 2,
        }}
      >
        <strong>Live Site:</strong>{" "}
        <a
          href="https://www.activemi.co.za/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#7c3aed", textDecoration: "none" }}
        >
          www.activemi.co.za
        </a>
      </Typography>

      <Stack direction="row" spacing={1} mb={4} flexWrap="wrap">
        <Chip label="Frontend Development" color="secondary" variant="outlined" />
        <Chip label="React" color="secondary" variant="outlined" />
        <Chip label="Responsive Design" color="secondary" variant="outlined" />
      </Stack>

      <Typography color="text.secondary" mb={6}>
        <strong>Status:</strong> Live / Production
      </Typography>

      <Divider sx={{ my: 6 }} />

      {/* OVERVIEW */}
      <Typography variant="h5" fontWeight={700} mt={6} mb={3}>
        Overview
      </Typography>

      <Typography color="text.secondary" mb={4} sx={{ lineHeight: 1.8 }}>
        Designed and developed a modern business website for Active Media to
        establish a strong online presence and clearly communicate their services to
        potential clients.
      </Typography>

      {/* KEY CONTRIBUTIONS */}
      <Typography variant="h5" fontWeight={700} mt={6} mb={3}>
        Key Contributions & Features
      </Typography>

      <Box component="ul" sx={{ color: "text.secondary", mb: 4 }}>
        <li>Built a fully responsive React website optimized for desktop and mobile</li>
        <li>
          Implemented clean UI sections to highlight services, brand messaging, and
          contact information
        </li>
        <li>Focused on performance and simplicity, avoiding unnecessary complexity</li>
        <li>Ensured consistent layout, spacing, and visual hierarchy</li>
        <li>Deployed the site for live production use</li>
      </Box>

      {/* TECH STACK */}
      <Typography variant="h5" fontWeight={700} mt={6} mb={3}>
        Tech Stack
      </Typography>

      <Typography color="text.secondary" mb={1}>
        <strong>Frontend:</strong> React, JavaScript, CSS
      </Typography>
      <Typography color="text.secondary" mb={4}>
        <strong>Deployment:</strong> Production Ready
      </Typography>

      {/* SKILLS */}
      <Typography variant="h5" fontWeight={700} mt={6} mb={3}>
        Skills Demonstrated
      </Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap">
        <Chip label="React Development" color="secondary" variant="outlined" />
        <Chip label="Responsive Design" color="secondary" variant="outlined" />
        <Chip label="UI Layout" color="secondary" variant="outlined" />
        <Chip label="Client-Focused Development" color="secondary" variant="outlined" />
        <Chip label="Production Deployment" color="secondary" variant="outlined" />
      </Stack>

      {/* CTA */}
      <Box sx={{ mt: 8 }}>
        <Button
          variant="contained"
          href="https://www.activemi.co.za/"
          target="_blank"
        >
          View Live Website
        </Button>
      </Box>

      <Footer />
    </Container>
  );
}

export default ActiveMediaWebsite;

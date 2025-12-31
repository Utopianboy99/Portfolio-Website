import { Container, Typography, Box, Stack, Chip, Button, Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function ActiveFoundationTrust() {
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
        Active Foundation Trust — Website Redesign
      </Typography>

      <Typography variant="h6" color="secondary" fontWeight={600} mb={4}>
        UI/UX Design · Website Redesign · Non-Profit
      </Typography>

      <Stack direction="row" spacing={1} mb={4}>
        <Chip label="UI/UX Design" color="secondary" variant="outlined" />
        <Chip label="Website Redesign" color="secondary" variant="outlined" />
        <Chip label="Non-Profit" color="secondary" variant="outlined" />
      </Stack>

      <Box
        component="img"
        src="https://via.placeholder.com/1200x420?text=Active+Foundation+Trust"
        alt="Active Foundation Trust - hero"
        sx={{ width: 1, borderRadius: 2, mb: 4 }}
      />

      <Typography color="text.secondary" mb={6}>
        <strong>Status:</strong> Completed (Design Concept)
      </Typography>

      <Divider sx={{ my: 6 }} />

      {/* OVERVIEW */}
      <Typography variant="h5" fontWeight={700} mt={6} mb={3}>
        Overview
      </Typography>

      <Typography color="text.secondary" mb={4} sx={{ lineHeight: 1.8 }}>
        A mission-driven website redesign concept for a South African non-profit
        organisation focused on supporting vulnerable families and children
        through community action and donations.
      </Typography>

      {/* PROBLEM */}
      <Typography variant="h5" fontWeight={700} mt={6} mb={3}>
        Problem
      </Typography>

      <Typography color="text.secondary" mb={2}>
        The original website lacked:
      </Typography>

      <Box component="ul" sx={{ color: "text.secondary", mb: 4 }}>
        <li>Clear emotional storytelling</li>
        <li>Strong calls-to-action</li>
        <li>Modern visual hierarchy</li>
        <li>Trust-building structure for donors and volunteers</li>
      </Box>

      {/* SOLUTION */}
      <Typography variant="h5" fontWeight={700} mt={6} mb={3}>
        Solution
      </Typography>

      <Typography color="text.secondary" mb={2}>
        Designed a clean, human-centred interface that:
      </Typography>

      <Box component="ul" sx={{ color: "text.secondary", mb: 4 }}>
        <li>Clearly communicates the foundation's mission</li>
        <li>Guides users toward donating, volunteering, or engaging</li>
        <li>Uses calm spacing, strong typography, and values-driven messaging</li>
      </Box>

      {/* PAGES DESIGNED */}
      <Typography variant="h5" fontWeight={700} mt={6} mb={3}>
        Pages Designed
      </Typography>

      <Box component="ul" sx={{ color: "text.secondary", mb: 4 }}>
        <li>Home Page</li>
        <li>About Us Page</li>
        <li>Contact / Engagement Page (Desktop)</li>
      </Box>

      {/* SKILLS */}
      <Typography variant="h5" fontWeight={700} mt={6} mb={3}>
        Key Skills Demonstrated
      </Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap" mb={4}>
        <Chip label="UI/UX Design" color="secondary" variant="outlined" />
        <Chip label="Information Hierarchy" color="secondary" variant="outlined" />
        <Chip label="Non-profit Storytelling" color="secondary" variant="outlined" />
        <Chip label="Visual Design" color="secondary" variant="outlined" />
        <Chip label="Accessibility" color="secondary" variant="outlined" />
      </Stack>

      {/* TOOLS */}
      <Typography variant="h5" fontWeight={700} mt={6} mb={3}>
        Tools
      </Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap">
        <Chip label="Figma" color="secondary" />
      </Stack>

      <Footer />
    </Container>
  );
}

export default ActiveFoundationTrust;

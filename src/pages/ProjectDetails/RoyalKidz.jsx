import { Container, Typography, Box, Stack, Chip, Button, Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function RoyalKidz() {
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
        RoyalKidz Nursery School
      </Typography>

      <Typography variant="h6" color="secondary" fontWeight={600} mb={4}>
        Full-Featured Educational Institution Website
      </Typography>

      <Stack direction="row" spacing={1} mb={4} flexWrap="wrap">
        <Chip label="Web Design & Development" color="secondary" variant="outlined" />
        <Chip label="React" color="secondary" variant="outlined" />
        <Chip label="Node.js" color="secondary" variant="outlined" />
      </Stack>

      <Box
        component="img"
        src="https://via.placeholder.com/1200x420?text=RoyalKidz+Nursery+School"
        alt="RoyalKidz Nursery School - hero"
        sx={{ width: 1, borderRadius: 2, mb: 4 }}
      />

      <Typography color="text.secondary" mb={6}>
        <strong>Status:</strong> Planned / In Development
      </Typography>

      <Divider sx={{ my: 6 }} />

      {/* OVERVIEW */}
      <Typography variant="h5" fontWeight={700} mt={6} mb={3}>
        Overview
      </Typography>

      <Typography color="text.secondary" mb={4} sx={{ lineHeight: 1.8 }}>
        A full-featured website for RoyalKidz Nursery School, focused on parent and
        staff usability with an emphasis on clear communication, easy navigation, and
        essential school management features.
      </Typography>

      {/* PLANNED FEATURES */}
      <Typography variant="h5" fontWeight={700} mt={6} mb={3}>
        Planned Features
      </Typography>

      <Box component="ul" sx={{ color: "text.secondary", mb: 4 }}>
        <li>Homepage with school information and admissions details</li>
        <li>Academic calendar and events schedule</li>
        <li>Parent portal for student information</li>
        <li>Online payment processing</li>
        <li>Attendance tracking system</li>
        <li>News & events updates</li>
        <li>Photo gallery and contact pages</li>
      </Box>

      {/* TECH STACK */}
      <Typography variant="h5" fontWeight={700} mt={6} mb={3}>
        Planned Tech Stack
      </Typography>

      <Typography color="text.secondary" mb={1}>
        <strong>Frontend:</strong> React (Vite)
      </Typography>
      <Typography color="text.secondary" mb={4}>
        <strong>Backend:</strong> Node.js
      </Typography>

      {/* FOCUS AREAS */}
      <Typography variant="h5" fontWeight={700} mt={6} mb={3}>
        Project Focus Areas
      </Typography>

      <Box component="ul" sx={{ color: "text.secondary", mb: 4 }}>
        <li>User experience designed specifically for parents and staff</li>
        <li>Clear information hierarchy for school announcements and updates</li>
        <li>Intuitive parent portal for tracking student progress</li>
        <li>Scalable architecture to support future growth</li>
      </Box>

      {/* SKILLS */}
      <Typography variant="h5" fontWeight={700} mt={6} mb={3}>
        Skills Demonstrated
      </Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap">
        <Chip label="Project Planning" color="secondary" variant="outlined" />
        <Chip label="UX Design for Specific Users" color="secondary" variant="outlined" />
        <Chip label="Feature Breakdown" color="secondary" variant="outlined" />
        <Chip label="Scalable Architecture Thinking" color="secondary" variant="outlined" />
      </Stack>

      <Footer />
    </Container>
  );
}

export default RoyalKidz;

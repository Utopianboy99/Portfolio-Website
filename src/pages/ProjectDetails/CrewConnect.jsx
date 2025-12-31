import { Container, Typography, Box, Stack, Chip, Button, Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function CrewConnect() {
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
        CrewConnect
      </Typography>

      <Typography variant="h6" color="secondary" fontWeight={600} mb={4}>
        Full-Stack Team Management Web Application
      </Typography>

      <Stack direction="row" spacing={1} mb={4} flexWrap="wrap">
        <Chip label="Full-Stack Development" color="secondary" variant="outlined" />
        <Chip label="Express.js" color="secondary" variant="outlined" />
        <Chip label="MongoDB" color="secondary" variant="outlined" />
      </Stack>

      <Typography color="text.secondary" mb={6}>
        <strong>Status:</strong> Completed / Functional
      </Typography>

      <Divider sx={{ my: 6 }} />

      {/* OVERVIEW */}
      <Typography variant="h5" fontWeight={700} mt={6} mb={3}>
        Overview
      </Typography>

      <Typography color="text.secondary" mb={4} sx={{ lineHeight: 1.8 }}>
        A full-stack internal team management web application designed to manage
        users, departments, and team communication with a focus on usability and
        clean design.
      </Typography>

      {/* KEY FEATURES */}
      <Typography variant="h5" fontWeight={700} mt={6} mb={3}>
        Key Features
      </Typography>

      <Box component="ul" sx={{ color: "text.secondary", mb: 4 }}>
        <li>User authentication and secure login</li>
        <li>Role-based access control</li>
        <li>Team directory organized by department</li>
        <li>Responsive dashboard UI</li>
        <li>User profile management</li>
      </Box>

      {/* TECH STACK */}
      <Typography variant="h5" fontWeight={700} mt={6} mb={3}>
        Tech Stack
      </Typography>

      <Typography color="text.secondary" mb={1}>
        <strong>Frontend:</strong> HTML, CSS, JavaScript (Vanilla)
      </Typography>
      <Typography color="text.secondary" mb={1}>
        <strong>Backend:</strong> Express.js, Node.js
      </Typography>
      <Typography color="text.secondary" mb={4}>
        <strong>Database:</strong> MongoDB
      </Typography>

      {/* SKILLS */}
      <Typography variant="h5" fontWeight={700} mt={6} mb={3}>
        Skills Demonstrated
      </Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap">
        <Chip label="Backend Logic" color="secondary" variant="outlined" />
        <Chip label="Database Design" color="secondary" variant="outlined" />
        <Chip label="REST APIs" color="secondary" variant="outlined" />
        <Chip label="Authentication" color="secondary" variant="outlined" />
        <Chip label="Full-Stack Architecture" color="secondary" variant="outlined" />
      </Stack>

      <Footer />
    </Container>
  );
}

export default CrewConnect;

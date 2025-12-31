import { Container, Typography, Box, Stack, Chip, Button, Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function CognitionBerries() {
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
        Cognition Berries
      </Typography>

      <Typography variant="h6" color="secondary" fontWeight={600} mb={4}>
        Financial Education & eLearning Platform
      </Typography>

      <Stack direction="row" spacing={1} mb={4} flexWrap="wrap">
        <Chip label="Full-Stack Development" color="secondary" variant="outlined" />
        <Chip label="React" color="secondary" variant="outlined" />
        <Chip label="Node.js" color="secondary" variant="outlined" />
        <Chip label="MongoDB" color="secondary" variant="outlined" />
      </Stack>

      <Typography color="text.secondary" mb={6}>
        <strong>Status:</strong> Active Development
      </Typography>

      <Divider sx={{ my: 6 }} />

      {/* OVERVIEW */}
      <Typography variant="h5" fontWeight={700} mt={6} mb={3}>
        Overview
      </Typography>

      <Typography color="text.secondary" mb={4} sx={{ lineHeight: 1.8 }}>
        Cognition Berries is a full-stack financial education platform designed to
        help beginners understand stock investing through structured learning,
        interactive content, and community features.
      </Typography>

      {/* KEY FEATURES */}
      <Typography variant="h5" fontWeight={700} mt={6} mb={3}>
        Key Features
      </Typography>

      <Box component="ul" sx={{ color: "text.secondary", mb: 4 }}>
        <li>User authentication with Firebase integration</li>
        <li>Paid courses & digital materials</li>
        <li>Shopping cart & transaction management</li>
        <li>Forums & community discussion posts</li>
        <li>Live sessions & Q&A functionality</li>
        <li>Admin-controlled content management</li>
      </Box>

      {/* KEY CONTRIBUTIONS */}
      <Typography variant="h5" fontWeight={700} mt={6} mb={3}>
        Key Contributions & Development
      </Typography>

      <Box component="ul" sx={{ color: "text.secondary", mb: 4 }}>
        <li>
          Designed and developed the frontend using React (Vite) with a focus on
          clarity, accessibility, and beginner-friendly navigation
        </li>
        <li>Built a RESTful API with Node.js and Express</li>
        <li>
          Implemented MongoDB database with full CRUD operations across multiple
          collections (users, material-courses, material-books, transactions, cart,
          forum-posts, forum-replies, live-sessions)
        </li>
        <li>Integrated authentication and role-based access control</li>
        <li>Built forum and discussion functionality to encourage community learning</li>
        <li>Implemented cart and payment flow for premium content</li>
        <li>Focused on secure data handling and scalable architecture</li>
        <li>Designed the platform to work seamlessly on mobile and desktop</li>
      </Box>

      {/* TECH STACK */}
      <Typography variant="h5" fontWeight={700} mt={6} mb={3}>
        Tech Stack
      </Typography>

      <Typography color="text.secondary" mb={1}>
        <strong>Frontend:</strong> React (Vite), JavaScript, CSS
      </Typography>
      <Typography color="text.secondary" mb={1}>
        <strong>Backend:</strong> Node.js, Express.js
      </Typography>
      <Typography color="text.secondary" mb={4}>
        <strong>Database & Auth:</strong> MongoDB, Firebase Auth
      </Typography>

      {/* SKILLS */}
      <Typography variant="h5" fontWeight={700} mt={6} mb={3}>
        Skills Demonstrated
      </Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap">
        <Chip label="Full-Stack Development" color="secondary" variant="outlined" />
        <Chip label="API Design" color="secondary" variant="outlined" />
        <Chip label="Database Modeling" color="secondary" variant="outlined" />
        <Chip label="Authentication" color="secondary" variant="outlined" />
        <Chip label="UI/UX Thinking" color="secondary" variant="outlined" />
        <Chip label="Scalable Architecture" color="secondary" variant="outlined" />
      </Stack>

      <Footer />
    </Container>
  );
}

export default CognitionBerries;

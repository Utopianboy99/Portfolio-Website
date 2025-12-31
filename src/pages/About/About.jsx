import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Stack,
  Paper,
} from "@mui/material";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      {/* ================= INTRO ================= */}
      <Box maxWidth="800px" mb={10}>
        <Typography
          variant="overline"
          color="secondary"
          sx={{ letterSpacing: 2 }}
        >
          About Me
        </Typography>

        <Typography
          variant="h2"
          fontWeight={800}
          sx={{ mt: 3, mb: 4 }}
        >
          I design and build thoughtful digital experiences.
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ fontSize: "1.1rem", lineHeight: 1.8 }}
        >
          I’m a frontend developer and UI/UX designer based in South Africa.
          I focus on creating interfaces that feel effortless to use,
          visually refined, and technically sound.
        </Typography>
      </Box>

      {/* ================= CONTENT GRID ================= */}
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "1.2fr 0.8fr" }}
        gap={8}
        alignItems="start"
      >
        {/* LEFT — STORY */}
        <Box>
          <Typography variant="h5" fontWeight={700} mb={3}>
            How I approach my work
          </Typography>

          <Typography color="text.secondary" mb={3} lineHeight={1.8}>
            I work at the intersection of logic and creativity. My process
            starts with understanding the problem deeply — the users, the
            business goals, and the constraints — before touching code.
          </Typography>

          <Typography color="text.secondary" mb={3} lineHeight={1.8}>
            Whether I’m designing a UI in Figma or implementing a component
            in React, I care about clarity, accessibility, and long-term
            maintainability.
          </Typography>

          <Typography color="text.secondary" lineHeight={1.8}>
            I believe good design should feel invisible. When things work
            smoothly, users don’t notice the interface — they just get
            things done.
          </Typography>
        </Box>

        {/* RIGHT — INFO CARD */}
        <Paper
          sx={{
            p: 4,
            borderRadius: 4,
            background:
              "linear-gradient(145deg, #1a1a25, #0f0f17)",
          }}
        >
          <Typography fontWeight={700} mb={1}>
            Experience
          </Typography>
          <Typography color="text.secondary" mb={4}>
            5+ years building modern web interfaces
          </Typography>

          <Typography fontWeight={700} mb={2}>
            Core Skills
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap">
            {[
              "React",
              "JavaScript",
              "UI/UX Design",
              "Accessibility",
              "Material UI",
              "Figma",
            ].map((skill) => (
              <Chip
                key={skill}
                label={skill}
                color="secondary"
                variant="outlined"
                sx={{ mb: 1 }}
              />
            ))}
          </Stack>
        </Paper>
      </Box>

      {/* ================= CTA ================= */}
      <Box mt={12}>
        <Typography variant="h4" fontWeight={800} mb={2}>
          Let’s build something meaningful.
        </Typography>

        <Typography color="text.secondary" mb={4} maxWidth="600px">
          If you’re looking for someone who values clarity, usability,
          and clean implementation, I’d love to hear from you.
        </Typography>

        <Button variant="contained" size="large" onClick={() => navigate('/work')}>
          View My Resume
        </Button>
      </Box>

      <Footer />
    </Container>
  );
}

export default About;

import {
  Container,
  Typography,
  Box,
  Paper,
  Chip,
  Stack,
  Button,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

// Import images from assets
import activeMediaImg from "../../assets/active-media.png";
import activeFoundationImg from "../../assets/active-foundation.png";
import crewConnectImg from "../../assets/crewconnect.png";
import cognitionBerriesImg from "../../assets/cognition-berries.png";
import royalKidzImg from "../../assets/royalkidz.png";

const projects = [
  {
    id: "active-media",
    title: "Active Media Website",
    type: "Business Website",
    status: "Live",
    description:
      "A responsive React website built to establish a professional online presence.",
    tech: ["React", "CSS", "Responsive Design"],
    featured: true,
    link: "https://www.activemi.co.za/",
    live: true,
    image: activeMediaImg,
  },
  {
    id: "active-foundation",
    title: "Active Foundation Trust",
    type: "UI/UX Case Study",
    status: "Completed (Concept)",
    description:
      "A mission-driven website redesign concept for a South African non-profit organization.",
    tech: ["UI/UX", "Figma", "Accessibility"],
    image: activeFoundationImg,
  },
  {
    id: "crewconnect",
    title: "CrewConnect",
    type: "Full-Stack Web App",
    status: "Completed",
    description:
      "An internal team management system with authentication, roles, and department-based views.",
    tech: ["Express", "MongoDB", "REST APIs"],
    image: crewConnectImg,
  },
  {
    id: "cognition-berries",
    title: "Cognition Berries",
    type: "Full-Stack Web Platform",
    status: "Active Development",
    description:
      "An eCommerce-based financial education platform designed to teach beginners how to invest through structured, interactive learning.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
    image: cognitionBerriesImg,
  },
  {
    id: "royalkidz",
    title: "RoyalKidz Nursery School",
    type: "Website Project",
    status: "In Development",
    description:
      "A planned full-featured website focused on parents, staff usability, and school management.",
    tech: ["React", "Node.js", "UX Planning"],
    image: royalKidzImg,
  },
];

function ProjectCard({ project }) {
  const navigate = useNavigate();
  const isLive = project.live;

  return (
    <Paper
      sx={{
        position: "relative",
        borderRadius: 3,
        border: isLive ? "1px solid rgba(124,58,237,0.4)" : "none",
        boxShadow: isLive
          ? "0 12px 40px rgba(124,58,237,0.15)"
          : "0 8px 24px rgba(0,0,0,0.08)",
        transition: "transform 0.3s ease",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-6px)",
          "& .project-image": {
            transform: "scale(1.05)",
          },
        },
      }}
    >
      {/* PROJECT IMAGE */}
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={project.title}
        className="project-image"
        sx={{
          transition: "transform 0.3s ease",
          objectFit: "cover",
        }}
      />

      <Box sx={{ p: 4 }}>
        {/* LIVE BADGE */}
        {isLive && (
          <Chip
            label="LIVE PROJECT"
            size="small"
            color="secondary"
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              fontWeight: 600,
            }}
          />
        )}

        <Typography variant="caption" color="secondary">
          {project.type}
        </Typography>

        <Typography variant="h6" fontWeight={700} mt={1}>
          {project.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" mt={1} mb={2}>
          {project.description}
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" mb={3}>
          {project.tech.map((item) => (
            <Chip
              key={item}
              label={item}
              size="small"
              variant="outlined"
              color="secondary"
            />
          ))}
        </Stack>

        {isLive ? (
          <Button
            size="small"
            variant="contained"
            href={project.link}
            target="_blank"
          >
            View Live Site
          </Button>
        ) : (
          <Button
            size="small"
            variant="outlined"
            onClick={() => navigate(`/project/${project.id}`)}
          >
            View Details
          </Button>
        )}
      </Box>
    </Paper>
  );
}

function Work() {
  const navigate = useNavigate();
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      {/* INTRO */}
      <Typography variant="h3" fontWeight={800} mb={2}>
        Selected Projects
      </Typography>

      <Typography color="text.secondary" mb={8}>
        A collection of projects showcasing frontend, backend, and UI/UX
        thinking across real-world scenarios.
      </Typography>

      {/* FEATURED */}
      {featured && (
        <Paper
          sx={{
            mb: 10,
            borderRadius: 3,
            overflow: "hidden",
            transition: "transform 0.3s ease",
            "&:hover": {
              "& .featured-image": {
                transform: "scale(1.03)",
              },
            },
          }}
        >
          {/* Featured Project Image */}
          <CardMedia
            component="img"
            height="400"
            image={featured.image}
            alt={featured.title}
            className="featured-image"
            sx={{
              transition: "transform 0.3s ease",
              objectFit: "cover",
            }}
          />

          <Box sx={{ p: 5 }}>
            <Typography
              variant="overline"
              color="secondary"
              letterSpacing={1.5}
            >
              Featured Case Study
            </Typography>

            <Typography variant="h4" fontWeight={800} mt={2}>
              {featured.title}
            </Typography>

            <Typography color="text.secondary" mt={2} mb={3}>
              {featured.description}
            </Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap" mb={4}>
              {featured.tech.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  variant="outlined"
                  color="secondary"
                />
              ))}
            </Stack>

            <Button
              variant="contained"
              onClick={() => navigate("/project/active-media")}
            >
              View Full Case Study
            </Button>
          </Box>
        </Paper>
      )}

      {/* GRID */}
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "1fr",
          sm: "1fr 1fr",
          md: "1fr 1fr 1fr",
        }}
        gap={4}
      >
        {rest.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </Box>

      <Footer />
    </Container>
  );
}

export default Work;
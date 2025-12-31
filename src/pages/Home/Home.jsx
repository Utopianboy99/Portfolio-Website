import React from "react";
import "./Home.css";
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Chip,
  Stack,
  IconButton,
  LinearProgress,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import StorageIcon from "@mui/icons-material/Storage";
import DevicesIcon from "@mui/icons-material/Devices";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import ActiveFoundationImg from "../../assets/active-foundation.png";
import ActiveMediaImg from "../../assets/active-media.png";
import CognitionBerriesImg from "../../assets/cognition-berries.png";
import CodingWorkspaceImg from "../../assets/Coding-Workspace.png";
import IDEimg from '../../assets/Laptop-With-Code-Editor.png'

// Skills data with categories
const skillsData = [
  {
    category: "Frontend",
    skills: [
      {
        name: "HTML5",
        description: "Structure & Semantics",
        level: 90,
        color: "#E34F26",
      },
      {
        name: "CSS3 / Tailwind",
        description: "Styling & Responsive",
        level: 85,
        color: "#1572B6",
      },
      {
        name: "JavaScript (ES6+)",
        description: "Logic & Interactivity",
        level: 88,
        color: "#F7DF1E",
      },
      {
        name: "React.js",
        description: "Component Architecture",
        level: 85,
        color: "#61DAFB",
      },
    ],
  },
  {
    category: "Design & Tools",
    skills: [
      {
        name: "UI/UX Design",
        description: "User-Centric Design",
        level: 80,
        color: "#EA4C89",
      },
      {
        name: "Figma",
        description: "Prototyping & Wireframes",
        level: 82,
        color: "#F24E1E",
      },
      {
        name: "Git / Version Control",
        description: "Source Management",
        level: 75,
        color: "#F05032",
      },
      {
        name: "Responsive Design",
        description: "Mobile-First Approach",
        level: 88,
        color: "#10B981",
      },
    ],
  },
];

function SkillCard({ skill }) {
  return (
    <Paper
      sx={{
        p: 3,
        height: "100%",
        borderRadius: 2,
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        },
      }}
    >
      {/* Icon/Badge */}
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: 2,
          backgroundColor: `${skill.color}20`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <Box
          sx={{
            width: 24,
            height: 24,
            borderRadius: 1,
            backgroundColor: skill.color,
          }}
        />
      </Box>

      {/* Skill Name */}
      <Typography variant="h6" fontWeight={700} mb={0.5}>
        {skill.name}
      </Typography>

      {/* Description */}
      <Typography
        variant="body2"
        color="text.secondary"
        mb={2}
        sx={{ minHeight: 40 }}
      >
        {skill.description}
      </Typography>

      {/* Progress Bar */}
      <LinearProgress
        variant="determinate"
        value={skill.level}
        sx={{
          height: 6,
          borderRadius: 3,
          backgroundColor: "rgba(0,0,0,0.08)",
          "& .MuiLinearProgress-bar": {
            backgroundColor: skill.color,
            borderRadius: 3,
          },
        }}
      />
    </Paper>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="landing-page">
        <div className="land-left-sec">
          <div className="work-avail">
            <span className="status-dot" />
            <p>AVAILABLE FOR WORK</p>
          </div>

          <div className="intro-text">
            <h1 className="Me">
              Nhlakanipho
              <br />
              Madlanga
              <br />
              <span className="span-1">Frontend Dev</span> &
              <br />
              <span className="span-2">UI/UX Designer.</span>
            </h1>

            <h3 className="hook-text">
              Creating accessible, user-centric digital products. I build
              pixel-perfect web experiences that blend strong aesthetics with
              robust engineering.
            </h3>
          </div>

          <div className="land-btn">
            <Button variant="contained" onClick={() => navigate("/work")}>
              View Work
            </Button>
            <Button variant="outlined" onClick={() => navigate("/about")}>
              Get in Touch
            </Button>
          </div>
        </div>

        <div className="land-right-sec">
          <div className="intro-img" style={{ backgroundImage: `url(${CodingWorkspaceImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </div>
      </section>

      {/* ================= ABOUT PREVIEW ================= */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
          gap={6}
          alignItems="center"
        >
          <Box>
            <Typography
              variant="overline"
              color="secondary"
              letterSpacing={1.5}
            >
              About Me
            </Typography>

            <Typography variant="h4" fontWeight={800} mt={2} mb={2}>
              I design and build clean, accessible web experiences.
            </Typography>

            <Typography color="text.secondary" mb={9}>
              I'm a frontend developer and UI/UX designer focused on crafting
              scalable, user-centric interfaces that balance performance and
              aesthetics.
            </Typography>

            <Button variant="outlined" onClick={() => navigate("/about")}>
              More About Me
            </Button>
          </Box>

          <Box
            sx={{
              height: 360,
              borderRadius: 3,
              backgroundImage: `url(${IDEimg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Box>
      </Container>

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h4" fontWeight={800} mb={1}>
          Selected Work
        </Typography>

        <Typography color="text.secondary" mb={5}>
          A snapshot of projects where design meets engineering.
        </Typography>

        <Box
          display="grid"
          gridTemplateColumns={{
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          }}
          gap={4}
        >
          {[
            { title: "Active Foundation Trust", type: "UI/UX & Frontend", image: ActiveFoundationImg },
            { title: "Active Media", type: "React Development", image: ActiveMediaImg },
            { title: "Cognition Berries", type: "Full Stack", image: CognitionBerriesImg },
          ].map((project) => (
            <Paper key={project.title} sx={{ p: 3, cursor: 'pointer', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-4px)' } }} onClick={() => navigate("/work")}>
              <Box
                sx={{
                  height: 160,
                  borderRadius: 2,
                  mb: 2,
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <Typography variant="caption" color="secondary" fontWeight={600}>
                {project.type}
              </Typography>
              <Typography fontWeight={700}>{project.title}</Typography>
            </Paper>
          ))}
        </Box>

        <Box textAlign="center" mt={6}>
          <Button variant="contained" onClick={() => navigate("/work")}>
            View All Projects
          </Button>
        </Box>
      </Container>

      {/* ================= SKILLS & TECHNOLOGIES ================= */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" fontWeight={800} mb={2}>
            Skills & Technologies
          </Typography>

          <Typography color="text.secondary" mb={4}>
            Bridging the gap between design and engineering with a focus on
            React and modern UI principles.
          </Typography>

          {/* Category Tabs */}
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            flexWrap="wrap"
            mb={2}
          >
            <Chip label="All" color="primary" />
            <Chip label="Development" variant="outlined" />
            <Chip label="Design" variant="outlined" />
            <Chip label="Tools" variant="outlined" />
          </Stack>
        </Box>

        {/* Skills Grid by Category */}
        {skillsData.map((category) => (
          <Box key={category.category} mb={6}>
            <Typography
              variant="h6"
              fontWeight={700}
              mb={3}
              color="text.secondary"
            >
              {category.category}
            </Typography>

            <Box
              display="grid"
              gridTemplateColumns={{
                xs: "1fr",
                sm: "1fr 1fr",
                md: "repeat(4, 1fr)",
              }}
              gap={3}
            >
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </Box>
          </Box>
        ))}

        {/* CTA Button */}
        <Box textAlign="center" mt={6}>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Want to see these skills in action?
          </Typography>
          <Button variant="outlined" onClick={() => navigate("/work")}>
            View My Projects →
          </Button>
        </Box>
      </Container>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}

export default Home;
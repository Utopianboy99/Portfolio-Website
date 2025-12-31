import {
  Box,
  Paper,
  Typography,
  Button,
} from "@mui/material";

function WorkCard({ title, category, description, featured }) {
  return (
    <Paper
      sx={{
        p: featured ? 4 : 3,
        display: "grid",
        gridTemplateColumns: featured
          ? { xs: "1fr", md: "1.4fr 1fr" }
          : "1fr",
        gap: 4,
      }}
    >
      {/* IMAGE PLACEHOLDER */}
      <Box
        sx={{
          height: featured ? 280 : 180,
          borderRadius: 3,
          background:
            "linear-gradient(135deg, #7C3AED, #A3E635)",
        }}
      />

      {/* CONTENT */}
      <Box>
        <Typography
          variant="caption"
          color="secondary"
          fontWeight={600}
        >
          {category}
        </Typography>

        <Typography variant="h6" fontWeight={700} mt={1}>
          {title}
        </Typography>

        <Typography
          color="text.secondary"
          mt={1}
          mb={3}
        >
          {description}
        </Typography>

        <Button size="small" variant="contained">
          View Case Study
        </Button>
      </Box>
    </Paper>
  );
}

export default WorkCard;

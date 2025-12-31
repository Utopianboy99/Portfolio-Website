import { Box, Typography, Stack, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        py: 6,
        borderTop: "1px solid #1f1f2b",
        textAlign: "center",
      }}
    >
      <Typography variant="h6" fontWeight={700}>
        Nhlakanipho Madlanga
      </Typography>

      <Typography color="text.secondary" mt={1}>
        Frontend Developer & UI/UX Designer
      </Typography>

      <Stack direction="row" justifyContent="center" spacing={2} mt={3}>
        <IconButton color="primary">
          <GitHubIcon />
        </IconButton>
        <IconButton color="primary">
          <LinkedInIcon />
        </IconButton>
        <IconButton color="primary">
          <EmailIcon />
        </IconButton>
      </Stack>

      <Typography
        variant="body2"
        color="text.secondary"
        mt={4}
      >
        © {new Date().getFullYear()} All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;

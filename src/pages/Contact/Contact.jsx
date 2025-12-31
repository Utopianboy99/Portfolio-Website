import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../../components/Footer/Footer";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Alert,
  CircularProgress,
  Link as MuiLink,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_utw2tn9",
        "__ejs-test-mail-service__",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => setLoading(false));
  };

  return (
    <Container maxWidth="sm" sx={{ py: { xs: 8, md: 12 } }}>
      <Typography variant="h3" fontWeight={800} mb={2}>
        Get in Touch
      </Typography>

      <Typography color="text.secondary" mb={6}>
        Have a project in mind or want to work together?  
        Fill out the form and I’ll get back to you.
      </Typography>

      <Box
        component="form"
        ref={formRef}
        onSubmit={sendEmail}
        display="flex"
        flexDirection="column"
        gap={3}
      >
        <TextField
          label="Your Name"
          name="from_name"
          required
          fullWidth
        />

        <TextField
          label="Subject"
          name="subject"
          fullWidth
        />

        <TextField
          label="Your Email"
          name="from_email"
          type="email"
          required
          fullWidth
        />

        <TextField
          label="Message"
          name="message"
          multiline
          rows={5}
          required
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            "Send Message"
          )}
        </Button>

        {status === "success" && (
          <Alert severity="success">
            Message sent successfully!
          </Alert>
        )}

        {status === "error" && (
          <Alert severity="error">
            Something went wrong. Please try again.
          </Alert>
        )}
      </Box>

      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography variant="h6" fontWeight={700} mb={1}>
          Other ways to reach me
        </Typography>

        <Box display="flex" flexDirection={{ xs: "column", sm: "row" }} gap={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <MailOutlineIcon fontSize="small" />
            <MuiLink href="mailto:hello@yourdomain.com" underline="hover">
              madnhlaka@gmail.com
            </MuiLink>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <PhoneIcon fontSize="small" />
            <MuiLink href="tel:+270123456789" underline="hover">
              +27 67 761 8360
            </MuiLink>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <LinkedInIcon fontSize="small" />
            <MuiLink href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noreferrer" underline="hover">
              LinkedIn
            </MuiLink>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Container>
  );
}

export default Contact;

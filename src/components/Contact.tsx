import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  // initialise EmailJS once when the component loads
  React.useEffect(() => {
    const key = process.env.REACT_APP_EMAIL_PUBLIC_KEY || '';
    if (key) {
      emailjs.init(key);
    } else {
      console.warn('EmailJS public key missing (REACT_APP_EMAIL_PUBLIC_KEY)');
    }
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNameError(name.trim() === '');
    setEmailError(email.trim() === '');
    setMessageError(message.trim() === '');

    console.log("--- Debugging EmailJS ---");
    console.log("Service ID:", process.env.REACT_APP_EMAIL_SERVICE_ID);
    console.log("Template ID:", process.env.REACT_APP_EMAIL_TEMPLATE_ID);
    console.log("Public Key:", process.env.REACT_APP_EMAIL_PUBLIC_KEY);
    console.log("-------------------------");

    if (
      !process.env.REACT_APP_EMAIL_SERVICE_ID ||
      !process.env.REACT_APP_EMAIL_TEMPLATE_ID ||
      !process.env.REACT_APP_EMAIL_PUBLIC_KEY
    ) {
      alert('Email service not configured. Check your .env variables.');
      return;
    }

    if (name.trim() && email.trim() && message.trim()) {
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_email: "lailabatool3515@gmail.com"
      };

      emailjs
        .send(
          process.env.REACT_APP_EMAIL_SERVICE_ID,
          process.env.REACT_APP_EMAIL_TEMPLATE_ID,
          templateParams
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setName('');
          setEmail('');
          setMessage('');
          alert("Message sent successfully ✅");
        })
        .catch((err) => {
          console.error("FAILED...", err);
          alert(`Failed to send: ${JSON.stringify(err)}`);
        });
    }
  };

  const commonInputStyles = {
    sx: {
      marginBottom: 2,
      backgroundColor: 'white',
      borderRadius: 1,
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(0,0,0,0.23) !important',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black !important',
      },
    },
    InputProps: {
      style: { 
        color: 'black',
        WebkitTextFillColor: 'black',
      }, 
    },
    InputLabelProps: {
      style: { color: '#555' },
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          
          {/* ✅ REMOVED 'color' prop, ADDED className */}
          <Typography 
            variant="h4" 
            component="h1" 
            className="contact-title"
            sx={{ fontWeight: 'bold', marginBottom: 1 }}
          >
            Contact Me
          </Typography>

          {/* ✅ REMOVED 'color' prop, ADDED className */}
          <Typography 
            variant="body1" 
            className="contact-desc"
            sx={{ marginBottom: 3 }}
          >
            Got a project waiting to be realized? Let's collaborate and make it happen!
          </Typography>

          <Box
            component="form"
            className="contact-form"
            noValidate
            autoComplete="off"
            onSubmit={sendEmail}      // handle submit instead of click
          >
            <div className='form-flex'>
              <TextField
                fullWidth
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                {...commonInputStyles}
              />

              <TextField
                fullWidth
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
                {...commonInputStyles}
              />
            </div>

            <TextField
              fullWidth
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={8}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              {...commonInputStyles}
            />

            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              sx={{ 
                marginTop: 2,
                backgroundColor: 'white',
                color: 'black',
                fontWeight: 'bold',
                border: '1px solid black',
                '&:hover': {
                  backgroundColor: '#5000ca',
                  color: 'white',
                  borderColor: '#5000ca'
                }
              }}
            >
              Send
            </Button>

          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
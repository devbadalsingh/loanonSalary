import React from 'react';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';
import './ContactUs.css'; // Custom CSS for hover effects
import contctus from '../assets/image/Contact Us.jpg'; // Adjust the path if necessary

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <>
   <Box className="banner-inner" sx={{ padding: '25px'  }}>
  <img src={contctus} style={{ width: '100%', height: '100%', maxHeight: '500px', borderRadius:'50px'}} alt="Repay Loan" />
</Box>

{/* Contact Information Section */}
<Box
  sx={{
    width: '100%',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
    mt: '20px', // Margin-top
  }}
>
  <Typography variant="h2" sx={{ color: 'black', fontFamily: 'cursive' }}>
    Get in touch with us
  </Typography>

  <Grid 
    container 
    spacing={1} 
    justifyContent="center" 
    mt={3}
    sx={{ 
      display: 'flex', 
      flexDirection: 'row', // Always row
      alignItems: 'center', // Center items horizontally
    }} 
  >
    <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        className="hover-box"
        sx={{
          padding: '20px',  // Reduced padding inside the box
          transition: '0.3s',
          borderRadius: '10px',
          textAlign: 'center',
          marginBottom: '10px',  // Added margin bottom to reduce space between boxes
          width: '100%',  // Ensure it takes full width
          maxWidth: '350px', // Max width for each box to keep it consistent
          height: '250px', // Fixed height for all boxes to make them the same size
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center', // Center content vertically within the box
        }}
      >
        <i className="fas fa-envelope"></i>
        <Typography sx={{ fontFamily: 'cursive' }}>Email: info@loanonsalary.com</Typography>
      </Box>
    </Grid>

    <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        className="hover-box"
        sx={{
          padding: '20px',  // Reduced padding inside the box
          transition: '0.3s',
          borderRadius: '10px',
          textAlign: 'center',
          marginBottom: '10px',  // Added margin bottom to reduce space between boxes
          width: '100%',  // Ensure it takes full width
          maxWidth: '350px', // Max width for each box to keep it consistent
          height: '250px', // Fixed height for all boxes to make them the same size
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center', // Center content vertically within the box
        }}
      >
        <i className="fas fa-phone-alt"></i>
        <Typography sx={{ fontFamily: 'cursive' }}>Phone: +91 9220535528</Typography>
      </Box>
    </Grid>

    <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        className="hover-box"
        sx={{
          padding: '20px',  // Reduced padding inside the box
          transition: '0.3s',
          borderRadius: '10px',
          textAlign: 'center',
          marginBottom: '10px',  // Added margin bottom to reduce space between boxes
          width: '100%',  // Ensure it takes full width
          maxWidth: '350px', // Max width for each box to keep it consistent
          height: '250px', // Fixed height for all boxes to make them the same size
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center', // Center content vertically within the box
        }}
      >
        <i className="fas fa-map-marker-alt"></i>
        <Typography sx={{ fontFamily: 'cursive' }}>Address: 1710, 17th Floor, World Trade Tower, Sector -16, Noida, Uttar Pradesh - 201301.</Typography>
      </Box>
    </Grid>
  </Grid>
</Box>



      {/* Contact Us Form */}
      
    
            {/* Contact Us Form */}
            <Grid container spacing={2} mt={5} mb={5}>
           <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: 'flex',
              flexDirection: 'column', // Stack the video and map vertically
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            
            
            <Box
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.012190060276!2d77.36625474937759!3d28.570626083222425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a57f3f6f1f%3A0xa1c0ad1211f34090!2sWorld%20Trade%20Tower%2C%20Sector%2016%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sus!4v1614693744843"
              sx={{
                width: { xs: '100%', sm: '80%', md: '90%' },
                height: '450px', // Set an appropriate height for the map
                border: 0,
                borderRadius: '8px',
              }}
              allowFullScreen
              loading="lazy"
            />
          </Grid>

 
        {/* Right Contact Form */}
        <Grid item xs={12} sm={6}>
          <Box 
            component="form" 
            onSubmit={handleSubmit} 
            sx={{
              width: '100%', 
              padding: '20px', 
              borderRadius: '8px', 
              boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
              backgroundColor: '#f9f9f9', 
              mt: 2, 
            }}
          >
            <Typography variant="h4" gutterBottom textAlign="center" sx={{fontFamily:"cursive"}}>
              Get in Touch 
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}  sx={{fontFamily:"cursive"}}>
                <TextField label="Full Name" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}  sx={{fontFamily:"cursive"}}>
                <TextField label="Email" variant="outlined" fullWidth required type="email" />
              </Grid>
              <Grid item xs={12} sm={6}  sx={{fontFamily:"cursive"}}>
                <TextField label="Phone Number" variant="outlined" fullWidth required type="tel" />
              </Grid>
              <Grid item xs={12} sm={6}  sx={{fontFamily:"cursive"}}>
                <TextField label="Subject" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}  sx={{fontFamily:"cursive"}}>
                <TextField label="Message" variant="outlined" fullWidth multiline rows={6} required />
              </Grid>
              <Grid item xs={12}>
                <Button 
                  variant="contained" 
                  type="submit" 
                  fullWidth
                  sx={{ 
                    fontFamily:'cursive',
                    padding: '10px', 
                    backgroundColor: '#0b2747', 
                    borderRadius: '8px',
                  }} 
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactUs;

import React from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';
import ApplicationIcon from '@mui/icons-material/Assignment'; // Example icon
import UploadIcon from '@mui/icons-material/Upload';
import VerificationIcon from '@mui/icons-material/CheckCircle';
import ApprovalIcon from '@mui/icons-material/Check'; // Make sure this line is included
import RepaymentIcon from '@mui/icons-material/Payment'; // Example icon for repayment

import { Link } from 'react-router-dom';
import './AboutUs.css'; 

import visionImage from '../assets/image/vison.jpg'; // import vision image 
import missionImage from '../assets/image/mission.jpg'; // Import mission image
import aboutUsImage from '../assets/image/About (2).jpg'; // Import about us image
import familyImage from '../assets/image/Downloader-La-270835.jpg'; // Import your rounded person image

const AboutUs = () => {
  return (
    <>
     <Box className="banner-inner" sx={{ padding: '25px'  }}>
  <img src={aboutUsImage} style={{ width: '100%', height: '100%', maxHeight: '500px', borderRadius:'50px'}} alt="Repay Loan" />
</Box>

     {/* About Us Section */}
<section className="about-one">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
      <div className="about-one__content" style={{ fontFamily: 'Great Victorian, cursive' }}>
        <h3>Welcome to LoanOnSalary</h3>
        <p>
          Welcome to LoanOnSalary, your trusted partner in empowering you on financial grounds. We are a dedicated online platform operated by Datta Finance and Trading Private Limited, an RBI-registered Non-Banking Financial Company (NBFC), offering swift and convenient short-term loans exclusively to salaried individuals.
        </p>

        <p>
          At LoanOnSalary, we understand that financial emergencies can arise unexpectedly. Whether it’s an unplanned medical expense all of a sudden, urgent home repairs, or simply bridging the gap until you receive your next paycheck, we are here to provide you with quick and reliable financial support.
        </p>
        <p>
          Our mission is to simplify the borrowing process and make short-term loans accessible to salaried professionals across India. With a commitment to offer transparency, flexibility, and customer satisfaction, we aim to be your go-to place for all your short-term financial needs.
        </p>
      </div>


      </div>
    </div>
  </div>
</section>



      {/* Vision Section */}
      <section className="vision-section">
  <img src={visionImage} alt="Our Vision" />
  <div className="vision-text-box" style={{ fontFamily: 'Great Victorian, cursive' }}>
    <h3>Our Vision</h3>
    <p>
      We strive to become a leading provider of short-term financial solutions for salaried individuals across India. We also aim to empower them to manage their finances confidently and securely.
    </p>
  </div>
</section>


<section className="mission-section" style={{ fontFamily: 'cursive' }}>
  <img src={missionImage} alt="Our Mission" />
  <div className="mission-text-box" style={{ fontFamily: 'cursive' }}>
    <h3>Our Mission</h3>
    <p>
      We aim to offer fast, flexible, and affordable financial solutions that meet the evolving needs of salaried professionals, while maintaining the highest standards of integrity, transparency, and customer service from our end.
    </p>
  </div>
</section>



      {/* Why Choose Us Section */}
      <section className="why-choose-us" style={{ fontFamily: 'cursive' }}>
  <div className="container" style={{ fontFamily: 'cursive' }}>
    <h3>Why Choose Us?</h3>
    <div className="why-choose-us__items" style={{ fontFamily: 'cursive' }}>
      <div className="choose-us__item" style={{ fontFamily: 'cursive' }}>
        <h4>Fast and Easy Loan Approvals</h4>
        <p>
          Our streamlined online application process ensures that you receive loan approval within a couple of minutes.
        </p>
      </div>
      <div className="choose-us__item" style={{ fontFamily: 'cursive' }}>
        <h4>No Hidden Charges</h4>
        <p>
          We believe in complete transparency, so you won’t find any hidden fees or surprises in your loan terms or agreement.
        </p>
      </div>
      <div className="choose-us__item" style={{ fontFamily: 'cursive' }}>
        <h4>Flexible Loan Amounts</h4>
        <p>
          Borrow only what you need, with loan amounts ranging from ₹5,000 to ₹1,00,000.
        </p>
      </div>
      <div className="choose-us__item" style={{ fontFamily: 'cursive' }}>
        <h4>Secure Transactions</h4>
        <p>
          Your privacy and data security are our top priorities. We adhere to strict data protection standards to keep your information safe with us.
        </p>
      </div>
      <div className="choose-us__item" style={{ fontFamily: 'cursive' }}>
        <h4>Dedicated Customer Support</h4>
        <p>
          Our friendly and knowledgeable support team is available to assist you at every step of the loan process.
        </p>
      </div>
    </div>
  </div>
</section>


<section className="join-speedloans" style={{ fontFamily: 'cursive', paddingBottom:'40px' }}>
  <div className="container text-center" style={{ fontFamily: 'cursive', maxWidth: '100%' }}>
    <img
      src={familyImage}
      alt="Join Speedloans Family"
      className="rounded-circle"
      style={{
        width: '100px',
        height: '100px',
        marginBottom: '20px', // Ensure space between image and text
      }}
    />
    <Typography variant="h4" gutterBottom style={{ fontFamily: 'cursive' }}>
      Join the LoanOnSalary Family Today
    </Typography>
    <Typography variant="body1" paragraph style={{ fontFamily: 'cursive' }}>
      We invite you to experience the ease and convenience of personal lending with LoanOnSalary. Whether you need a quick loan to cover unexpected expenses or a longer-term solution for significant life events, we are here to help you every step of the way.
    </Typography>
    <Typography variant="body1" paragraph style={{ fontFamily: 'cursive' }}>
      Apply today and see how LoanOnSalary can empower you to take control of your financial future.
    </Typography>
  </div>
</section>

<style jsx>{`
  @media (max-width: 768px) {
    .join-speedloans {
      padding-bottom: 60px; /* Increase padding for smaller screens */
    }
    .container {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
`}</style>




{/* Loan Process Section with 3D Card Effect */}

<section className="loan-process-section" style={{ fontFamily: 'cursive' }}>
  <Typography variant="h3" align="center" gutterBottom sx={{ color: 'black' }} className="loan-process-title" style={{ fontFamily: 'cursive' }}>
    Our Loan Process
  </Typography>

  <Typography
    variant="body1"
    align="center"
    sx={{ color: 'black', mb: 2 }}
    style={{ fontFamily: 'cursive' }} // Adding cursive to the text
  >
    At LoanOnSalary, we have simplified the loan process to make it as easy and straightforward as possible. Here’s how it works:
  </Typography>

  {/* Process Steps */}
  <Grid container spacing={4} justifyContent="center">
    <Grid item xs={12} md={4}>
      <Paper elevation={4} className="process-card" style={{ fontFamily: 'cursive' }}>
        <Box className="icon-box">
          <ApplicationIcon className="process-icon" />
        </Box>
        <Typography variant="h5" align="center" className="process-title" style={{ fontFamily: 'cursive' }}>
          Online Application
        </Typography>
        <Typography variant="body2" align="center" style={{ fontFamily: 'cursive' }}>
          Start by filling out our quick and easy loan application form online. You’ll need to provide some basic personal information, employment details, and the loan amount you wish to apply for.
        </Typography>
      </Paper>
    </Grid>

    <Grid item xs={12} md={4}>
      <Paper elevation={4} className="process-card" style={{ fontFamily: 'cursive' }}>
        <Box className="icon-box">
          <UploadIcon className="process-icon" />
        </Box>
        <Typography variant="h5" align="center" className="process-title" style={{ fontFamily: 'cursive' }}>
          Document Submission
        </Typography>
        <Typography variant="body2" align="center" style={{ fontFamily: 'cursive' }}>
          Upload the required documents, such as your salary slips, bank statements, ID proof, and address proof, directly on our platform. The entire process is digital, ensuring that you don’t have to deal with cumbersome paperwork.
        </Typography>
      </Paper>
    </Grid>

    <Grid item xs={12} md={4}>
      <Paper elevation={4} className="process-card" style={{ fontFamily: 'cursive' }}>
        <Box className="icon-box">
          <VerificationIcon className="process-icon" />
        </Box>
        <Typography variant="h5" align="center" className="process-title" style={{ fontFamily: 'cursive' }}>
          Instant Verification
        </Typography>
        <Typography variant="body2" align="center" style={{ fontFamily: 'cursive' }}>
          Our advanced technology allows us to verify your documents and creditworthiness quickly. Within minutes, you will receive a preliminary decision on your loan application.
        </Typography>
      </Paper>
    </Grid>

    <Grid item xs={12} md={4}>
      <Paper elevation={4} className="process-card" style={{ fontFamily: 'cursive' }}>
        <Box className="icon-box">
          <ApprovalIcon className="process-icon" />
        </Box>
        <Typography variant="h5" align="center" className="process-title" style={{ fontFamily: 'cursive' }}>
          Approval and Disbursal
        </Typography>
        <Typography variant="body2" align="center" style={{ fontFamily: 'cursive' }}>
          Once your loan is approved, the funds will be transferred directly to your bank account. In most cases, this happens within 24 to 48 hours of approval, so you can access the money when you need it most.
        </Typography>
      </Paper>
    </Grid>

    <Grid item xs={12} md={4}>
      <Paper elevation={4} className="process-card" style={{ fontFamily: 'cursive' }}>
        <Box className="icon-box">
          <RepaymentIcon className="process-icon" />
        </Box>
        <Typography variant="h5" align="center" className="process-title" style={{ fontFamily: 'cursive' }}>
          Easy Repayment
        </Typography>
        <Typography variant="body2" align="center" style={{ fontFamily: 'cursive' }}>
          Repaying your loan is just as easy as applying for it. You can choose a repayment schedule that fits your monthly budget, and make payments directly through our website or mobile app. We offer multiple payment options, including NACH, bank transfers, UPIs, and online payment gateways.
        </Typography>
      </Paper>
    </Grid>
  </Grid>
</section>


      {/* Call to Action Section */}
      <section className="call-to-action" style={{ fontFamily: 'cursive' }}>
        <div className="container">
          <h3>Enquire for Loan</h3>
          <p>We're here to help! Contact us with any questions or concerns about our services. Your feedback is important to us.</p>
          <Link to="/contact-us" className="thm-btn cta-btn">Contact Us</Link>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

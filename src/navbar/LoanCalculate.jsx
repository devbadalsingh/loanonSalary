import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer'; // Import hook
import backgroundVideo from '../assets/videos/Navy Pink Social Marketer YouTube Thumbnail (2) (2).mp4';

const LoanCalculate = () => {
    const { ref, inView } = useInView({
        triggerOnce: false, // Trigger multiple times as it comes into view
        threshold: 0.1, // 10% of the component must be visible
    });

    return (
        <Container
        sx={{
            padding: 2,
            position: 'relative',
            overflow: 'hidden',
            zIndex: 1,
            fontFamily: '"Dancing Script", cursive',  // Apply here too
        }}
    >
        {/* Background Video */}
        <video
            autoPlay
            loop
            muted
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: -1,
            }}
        >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    
        <Typography
        variant="h3"
        sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white',
            mb: 4,
            fontSize: '3rem',
            fontFamily: '"Dancing Script", cursive',  // Apply here too
        }}
    >
        When LoanOnSalary Shines
    </Typography>
        <Grid container spacing={4} ref={ref}>
            <Grid item lg={6}>
                <Paper
                    elevation={3}
                    sx={{
                        padding: 3,
                        mt: 2,
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        color: '#000',
                        height: '200px',
                        position: 'relative',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'translateY(0)' : 'translateY(-20px)',
                        animation: inView ? 'slideIn 0.5s forwards' : 'none',
                       '&:hover': {
                            transform: 'scale(1.05)',
                            backgroundColor: 'black',
                            boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)',
                            color: 'white',
                        },
                        fontFamily: 'cursive', // Apply cursive font family to Paper content
                    }}
                >
                    <span style={{
                        position: 'absolute',
                        top: '20px',
                        left: '15px',
                        fontSize: '24px',
                        color: 'white',
                        backgroundColor: 'black',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        fontFamily: '"Dancing Script", cursive',  // Apply here too

                        justifyContent: 'center',
                        transition: 'background-color 0.3s ease, color 0.3s ease',
                    }}>
                        1
                    </span>
                    <Typography variant="h6" component="strong" color="inherit" sx={{ mt: 4, ml: 6 ,            fontFamily: '"Dancing Script", cursive',  // Apply here too
}}>
                        Health
                    </Typography>
                    <Typography variant="body2" color="inherit" sx={{ mt: 1, ml: 6,            fontFamily: '"Dancing Script", cursive',  // Apply here too
 }}>
                        At LoanOnSalary we provide immediate financial assistance by way of loan, for your any untimely medical bill or emergency. You can take care of your loved ones without any financial fear!
                    </Typography>
                </Paper>
    
                {/* Additional Paper components for the first column */}
                <Paper
                    elevation={3}
                    sx={{
                        padding: 3,
                        mt: 2,
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        color: '#000',
                        height: '200px',
                        fontFamily: '"Dancing Script", cursive',  // Apply here too

                        position: 'relative',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'translateY(0)' : 'translateY(-20px)',
                        animation: inView ? 'slideIn 0.5s forwards' : 'none',
                        '&:hover': {
                            transform: 'scale(1.05)',
                            backgroundColor: 'black',
                            boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)',
                            color: 'white',
                        },
                        fontFamily: 'cursive', // Apply cursive font family to Paper content
                    }}
                >
                    <span style={{
                        position: 'absolute',
                        top: '20px',
                        left: '15px',
                        fontSize: '24px',
                        color: 'white',
                        backgroundColor: 'black',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background-color 0.3s ease, color 0.3s ease',
                    }}>
                        2
                    </span>
                    <Typography variant="h6" component="strong" color="inherit" sx={{ mt: 4, ml: 6 ,            fontFamily: '"Dancing Script", cursive',  // Apply here too
}}>
                        Wedding
                    </Typography>
                    <Typography variant="body2" color="inherit" sx={{ mt: 1, ml: 6,            fontFamily: '"Dancing Script", cursive',  // Apply here too
 }}>
                        Marriage is a lifetime experience. We at LoanOnSalary are determined to make it a memorable one for you by offering our best instant loan service.
                    </Typography>
                </Paper>
            </Grid>
    
            <Grid item lg={6}>
                <Paper
                    elevation={3}
                    sx={{
                        padding: 3,
                        mt: 2,
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        color: '#000',
                        height: '200px',
                        position: 'relative',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'translateY(0)' : 'translateY(-20px)',
                        animation: inView ? 'slideIn 0.5s forwards' : 'none',
                        '&:hover': {
                            transform: 'scale(1.05)',
                            backgroundColor: 'black',
                            boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)',
                            color: 'white',
                        
                        },
                        fontFamily: 'cursive', // Apply cursive font family to Paper content
                    }}
                >
                    <span style={{
                        position: 'absolute',
                        top: '20px',
                        left: '15px',
                        fontSize: '24px',
                        color: 'white',
                        backgroundColor: 'black',
                        borderRadius: '50%',
                        width: '50px',
                        fontFamily: '"Dancing Script", cursive',  // Apply here too

                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background-color 0.3s ease, color 0.3s ease',
                    }}>
                        3
                    </span>
                    <Typography variant="h6" component="strong" color="inherit" sx={{ mt: 4, ml: 6 ,            fontFamily: '"Dancing Script", cursive',  // Apply here too
}}>
                        Credit Card Interest Pay
                    </Typography>
                    <Typography variant="body2" color="inherit" sx={{ mt: 1, ml: 6 ,            fontFamily: '"Dancing Script", cursive',  // Apply here too
}}>
                        At LoanOnSalary we help you in managing several high-interest loans you have on your card into one consolidated loan with fixed tenure and interest rates. This way you can pay your monthly payments on time and faster!
                    </Typography>
                </Paper>
    
                <Paper
                    elevation={3}
                    sx={{
                        padding: 3,
                        mt: 2,
                        backgroundColor: 'rgba(255, 255, 255, 0.7)',
                        color: '#000',
                        height: '200px',
                        position: 'relative',
                        fontFamily: '"Dancing Script", cursive',  // Apply here too

                        transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
                        opacity: inView ? 1 : 0,
                        transform: inView ? 'translateY(0)' : 'translateY(-20px)',
                        animation: inView ? 'slideIn 0.5s forwards' : 'none',
                        '&:hover': {
                            transform: 'scale(1.05)',
                            backgroundColor: 'black',
                            boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)',
                            color: 'white',
                        },
                        fontFamily: 'cursive', // Apply cursive font family to Paper content
                    }}
                >
                    <span style={{
                        position: 'absolute',
                        top: '20px',
                        left: '15px',
                        fontSize: '24px',
                        color: 'white',
                        backgroundColor: 'black',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: '"Dancing Script", cursive',  // Apply here too

                        transition: 'background-color 0.3s ease, color 0.3s ease',
                    }}>
                        4
                    </span>
                    <Typography variant="h6" component="strong" color="inherit" sx={{ mt: 4, ml: 6,            fontFamily: '"Dancing Script", cursive',  // Apply here too
 }}>
                        Travel
                    </Typography>
                    <Typography variant="body2" color="inherit" sx={{ mt: 1, ml: 6 ,            fontFamily: '"Dancing Script", cursive',  // Apply here too
}}>
                        Plan your next big trip with ease. Our loan can help you cover travel expenses and enjoy your vacation stress-free. With our instant loan facility, you can make your travel plans a reality.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    </Container>
    

    );
};

export default LoanCalculate;

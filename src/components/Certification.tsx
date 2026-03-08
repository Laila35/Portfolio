import React from "react";
import '../assets/styles/Education.scss'; // Reusing the same styles
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Certification() {
    // 📝 EDIT THIS DATA
    const certifications = [
        {
            id: 1,
            title: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "Issued Dec 2023",
            //link: "https://aws.amazon.com/verification" 
        },
        {
            id: 2,
            title: "Full Stack Web Developer",
            issuer: "Udemy",
            date: "Issued Aug 2022",
            link: "#"
        }
    ];

    return (
        <div id="certifications" className="certification-section">
            <div className="items-container">
                <div className="education-wrapper">
                    <Typography variant="h4" component="h1" className="section-title">
                        Certifications
                    </Typography>
                    
                    <div className="certification-grid">
                        {certifications.map((cert) => (
                            <Box key={cert.id} className="certification-card">
                                <WorkspacePremiumIcon className="cert-icon" />
                                <div className="cert-details">
                                    <Typography variant="h6">{cert.title}</Typography>
                                    <Typography variant="subtitle1" className="subtitle">{cert.issuer}</Typography>
                                    <Typography variant="caption" className="date">{cert.date}</Typography>
                                    {/* Optional Link */}
                                    {cert.link && cert.link !== "#" && (
                                        <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{color: '#5000ca', fontSize: '0.9rem'}}>
                                            View Credential
                                        </a>
                                    )}
                                </div>
                            </Box>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certification;
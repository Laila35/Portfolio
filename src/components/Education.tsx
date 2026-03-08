import React from "react";
import '../assets/styles/Education.scss';
import SchoolIcon from '@mui/icons-material/School';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Education() {
    // 📝 EDIT THIS DATA WITH YOUR OWN DETAILS
    const educationHistory = [
        {
            id: 1,
            degree: "Bachelor of Science in Computer Science",
            school: "University of Engineering & Technology UET, Peshawar",
            date: "2020 - 2024",
            description: "Graduated with Honors.Focused on Software Engineering, Data Structures, and AI."
        },
        {
            id: 2,
            degree: "Federal Board of Higher Secondary Education",
            school: "APSCS Humayoun Road 208, Rawalpindi",
            date: "2018 - 2020",
            description: "Pree-Engineering."
        },
        {
            id: 3,
            degree: "Federal Board of Secondary Education",
            school: "APSCS Hyderabad Cantt, Hyderabad",
            date: "2016 - 2018",
            description: "Computer Science."
        },
    ];

    return (
        <div id="education" className="education-section">
            <div className="items-container">
                <div className="education-wrapper">
                    <Typography variant="h4" component="h1" className="section-title">
                        Education
                    </Typography>
                    
                    <div className="education-grid">
                        {educationHistory.map((edu) => (
                            <Box key={edu.id} className="education-card">
                                <SchoolIcon className="edu-icon" />
                                <div className="edu-details">
                                    <Typography variant="h6">{edu.degree}</Typography>
                                    <Typography variant="subtitle1" className="subtitle">{edu.school}</Typography>
                                    <Typography variant="caption" className="date">{edu.date}</Typography>
                                    <Typography variant="body2" className="desc">{edu.description}</Typography>
                                </div>
                            </Box>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
import React from "react";
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import mock11 from '../assets/images/mock11.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://celestia-voice-gamma.vercel.app/" target="_blank" rel="noreferrer"><img src={mock11} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://celestia-voice-gamma.vercel.app/" target="_blank" rel="noreferrer"><h2>Celestia-Voice</h2></a>
                <p>Celestia Voice is a high-performance, AI-powered transcription application that transforms audio into intelligent text with celestial accuracy. Built with React, Vite, and Tailwind CSS, it features a stunning, immersive glassmorphism UI and leverages the multimodal capabilities of the Google Gemini 1.5 Flash API for serverless, in-browser processing. The application delivers a seamless user experience with drag-and-drop functionality, real-time feedback, and instant export features, demonstrating a modern approach to handling complex media tasks with speed and elegance.
</p>
            </div>
            <div className="project">
                <a href="https://quran-online-seven.vercel.app/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://quran-online-seven.vercel.app/" target="_blank" rel="noreferrer"><h2>Quran Online Tutoring</h2></a>
                <p>Online Quran Tutoring Application Developed a SEO-optimized full-stack web application for YFC Solution that provides an online platform for Quran tutoring services. The project was built using Next.js and Tailwind CSS for a fast, responsive interface, with Oracle as the database. A Prismic.io headless CMS was integrated for dynamic blog and content management. Additionally, the application includes Meta Cloud WhatsApp API for real-time user communication and NodeMailer API for automated email notifications, ensuring efficient interaction and strong SEO performance..</p>
            </div>
            <div className="project">
                <a href="https://quran-vvv1.vercel.app/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://quran-vvv1.vercel.app/" target="_blank" rel="noreferrer"><h2>Ilmul quran</h2></a>
                <p>Ilmul Quran Tutoring Platform – Developed a SEO-optimized full-stack dynamic web application for YFC Solution that provides online tutoring services for Quran. The platform was built using Next.js with TypeScript and Tailwind CSS for a fast, responsive interface, with MongoDB as the database. Prismic.io was integrated as a headless CMS for dynamic blog and content management. The application also includes Meta Cloud WhatsApp API for real-time communication with users and NodeMailer API for automated email notifications, ensuring efficient interaction and strong SEO performance.</p>
            </div>
            <div className="project">
                <a href="https://yfcampus-1.vercel.app/" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yfcampus-1.vercel.app/" target="_blank" rel="noreferrer"><h2>YFCampus-1</h2></a>
                <p>YFCampus-1 Tutoring Platform – Developed a SEO-optimized full-stack dynamic web application for YFC Solution designed to provide online home tutoring services to students worldwide, including USA, UK, Canada, Australia, and Pakistan. The platform offers tutoring in Quran, English, Physics, Mathematics, and Computer Science. It was built using Next.js with TypeScript and Tailwind CSS for a fast and responsive user interface, with MongoDB as the database. Prismic.io was integrated as a headless CMS for dynamic blog and content management. The system also integrates Meta Cloud WhatsApp API for real-time communication and NodeMailer API for automated email notifications, enabling seamless interaction between students and tutors..</p>
            </div>
            <div className="project">
                {/* TODO: replace placeholder URL with actual project link when available */}
                <a href="https://example.com" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://example.com" target="_blank" rel="noreferrer"><h2>TalentFlow</h2></a>
                <p>TalentFlow is a next-generation HR AI Automation platform designed to revolutionize the recruitment lifecycle by unifying candidate tracking, communication, and analytics into a single, intelligent interface. At its core, TalentFlow leverages advanced automation to streamline repetitive HR tasks—from screening resumes and scheduling interviews to managing candidate pipelines—empowering hiring teams to focus on strategic decision-making rather than administrative overhead. By centralizing data and automating workflows, it ensures a faster, more efficient hiring process that enhances both recruiter productivity and the candidate experience.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
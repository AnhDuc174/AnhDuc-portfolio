import { FiGlobe, FiImage } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import imgNaruto from '../assets/Naruto-battle.jpg'
import imgIndoor from '../assets/IAQ-prediction.jpg'
import imgNfl from '../assets/nfl-prediction.jpg'
import imgMed from '../assets/MyMedQL.jpg'

const projects = [
    {
        title: 'Ninja Battle -Naruto Game (Team Project)',
        year: '2025',
        description:
            'Created a two-player game where players control Naruto-style avatars using real-time hand gestures, combining computer vision and AI for an engaging interactive experience.',
        tags: ['Computer Vision', 'AI', 'Python', 'Hand Tracking'],
        image: imgNaruto, // TODO: Add screenshot path
        website: '', // TODO: Add website link
        source: 'https://github.com/VinTelligence-DSAI/Track-CV---Naruto-Handsign-Challenge', // TODO: Add GitHub link
    },
    {
        title: 'Smart-IndoorCARE',
        year: '2025',
        description:
            'Developed an indoor air quality dashboard for real-time PM2.5 tracking and short-term forecasting using LightGBM, enhanced with an AI assistant that provides automated health guidance.',
        tags: ['LightGBM', 'Dashboard', 'PM2.5', 'AI Assistant'],
        image: imgIndoor, // TODO: Add screenshot path
        website: '', // TODO: Add website link
        source: 'https://github.com/Mancupfire/DataScience_Programming', // TODO: Add GitHub link
    },
    {
        title: 'NFL Prediction',
        year: '2026',
        description:
            'Developed models to predict player trajectories in NFL pass plays for the 2026 Big Data Bowl, leveraging tracking data to analyze movement from throw to catch or incompletion.',
        tags: ['Machine Learning', 'Sports Analytics', 'Python', 'Data Science'],
        image: imgNfl, // TODO: Add screenshot path
        website: '', // TODO: Add website link
        source: 'https://github.com/AnhDuc174/NFL-Prediction', // TODO: Add GitHub link
    },
    {
        title: 'MyMedQL (Team Project)',
        year: '2025',
        description:
            'A comprehensive patient monitoring system designed for intensive care units and clinical environments. The platform continuously ingests high-frequency vital signs data, performs real-time anomaly detection, and delivers instant alerts to healthcare staff through an intuitive web dashboard.',
        tags: [
            'FastAPI',
            'SQLAlchemy',
            'WebSocket',
            'Next.js 14',
            'Tailwind CSS',
            'SVG Graphics'
        ],
        image: imgMed, // TODO: Add screenshot path
        website: '', // TODO: Add website link
        source: 'https://github.com/caophamminhdang/MyMedQL', // TODO: Add GitHub link
    },
]

function Projects() {
    return (
        <section className="fade-in fade-in-delay-4" id="projects">
            <div className="projects__header">
                <span className="projects__badge">My Projects</span>
                <h2 className="projects__heading">Check out my latest works</h2>
                <p className="projects__subheading">
                    I build AI-powered applications and data-driven solutions. Here are a few of my favorites.
                </p>
            </div>

            <div className="projects__grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-card__image">
                            {project.image ? (
                                <img src={project.image} alt={project.title} />
                            ) : (
                                <div className="project-card__image-placeholder">
                                    <FiImage />
                                    <span>Screenshot coming soon</span>
                                </div>
                            )}
                        </div>
                        <div className="project-card__body">
                            <h3 className="project-card__title">{project.title}</h3>
                            <p className="project-card__year">{project.year}</p>
                            <p className="project-card__desc">{project.description}</p>
                            <div className="project-card__tags">
                                {project.tags.map((tag) => (
                                    <span className="project-card__tag" key={tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="project-card__links">
                                {project.website && (
                                    <a
                                        href={project.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-card__link project-card__link--primary"
                                    >
                                        <FiGlobe /> Website
                                    </a>
                                )}
                                {project.source && (
                                    <a
                                        href={project.source}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-card__link project-card__link--secondary"
                                    >
                                        <FaGithub /> Source
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects

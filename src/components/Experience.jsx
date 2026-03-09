import uniLogo from '../assets/uni-logo.jpg'

const experiences = [
    {
        org: 'Center for Environmental Intelligence (CEI) – VinUniversity',
        role: 'Research Assistant',
        location: 'Hanoi, Vietnam',
        date: '2/2025 – Present',
        details: [
            'Researched Geometry Informed Neural Operator Transformer (GINOT) combined with Navier-Stokes equaions to predict indoor airflow with geometry-awareness.',
            'Achieved nearly identical results but with 20000 times faster compared to traditional CFD method. Currently expand training dataset to achieve geometry generalization',
        ],
        link: 'https://github.com/AnhDuc174/GINOT-Navier-Stokes',
    },
    {
        org: 'Center for Materials Information and Technology (CMIT) – VinUniversity',
        role: 'Research Assistant',
        location: 'Hanoi, Vietnam',
        date: '12/2025 – Present',
        details: [
            'Applied ML, LLM models to predict material properties using data from simulations, open databases, and experiments. Compare performance between traditional ML and strong-reasoning LLMs',
            'Performed feature engineering, data preprocessing, and model benchmarking against traditional methods. Optimize hyperparameters for training process to achieve best result.'
        ],
        link: 'https://github.com/AnhDuc174/Zif8-Membrane-Quality-Prediction',
    },
]

function Experience() {
    return (
        <section className="fade-in fade-in-delay-1" id="experience">
            <h2 className="section-title">Work Experience</h2>
            {experiences.map((exp, index) => {
                const content = (
                    <>
                        <div className="timeline-item__icon">
                            <img src={uniLogo} alt="VinUniversity Logo" className="timeline-logo" />
                        </div>
                        <div className="timeline-item__content">
                            <div className="timeline-item__header">
                                <span className="timeline-item__org">{exp.org}</span>
                                <span className="timeline-item__date">{exp.date}</span>
                            </div>
                            <p className="timeline-item__role">{exp.role} · {exp.location}</p>
                            <ul className="timeline-item__details">
                                {exp.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </>
                );

                return exp.link ? (
                    <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="timeline-item clickable-timeline-item"
                        key={index}
                    >
                        {content}
                    </a>
                ) : (
                    <div className="timeline-item" key={index}>
                        {content}
                    </div>
                );
            })}
        </section>
    )
}

export default Experience

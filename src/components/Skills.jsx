const hardSkills = [
    'Python', 'SQL', 'MySQL', 'OpenAI API',
    'HTML', 'CSS', 'JavaScript',
    'pandas', 'numpy', 'matplotlib',
    'scikit-learn', 'TensorFlow', 'PyTorch',
    'RNN', 'CNN', 'Transformers', 'LSTM',
    'LoRA/QLoRA', 'Few-shot', 'Zero-shot',
    'Prompt Engineering', 'API Integration',
]

const softSkills = [
    'Analytical Thinking', 'Problem Solving',
    'Team Collaboration', 'Self-Learning', 'Communication',
]

function Skills() {
    return (
        <section className="skills fade-in fade-in-delay-3" id="skills">
            <h2 className="section-title">Skills</h2>

            <div className="skills__category">
                <p className="skills__label">Hard Skills</p>
                <div className="skills__list">
                    {hardSkills.map((skill) => (
                        <span className="skill-badge skill-badge--hard" key={skill}>
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            <div className="skills__category">
                <p className="skills__label">Soft Skills</p>
                <div className="skills__list">
                    {softSkills.map((skill) => (
                        <span className="skill-badge skill-badge--soft" key={skill}>
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills

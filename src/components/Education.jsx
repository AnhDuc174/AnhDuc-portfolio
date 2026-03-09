import uniLogo from '../assets/uni-logo.jpg'

function Education() {
    return (
        <section className="fade-in fade-in-delay-2" id="education">
            <h2 className="section-title">Education</h2>
            <div className="timeline-item">
                <div className="timeline-item__icon">
                    <img src={uniLogo} alt="VinUniversity Logo" className="timeline-logo" />
                </div>
                <div className="timeline-item__content">
                    <div className="timeline-item__header">
                        <span className="timeline-item__org">VinUniversity</span>
                        <span className="timeline-item__date">Sep 2024 – Jul 2028</span>
                    </div>
                    <p className="timeline-item__role">Bachelor of Science in Data Science · Hanoi, Vietnam</p>
                    <p className="timeline-item__extra">IELTS: 7.5 &nbsp;|&nbsp; SAT: 1520</p>
                    <p className="timeline-item__extra">
                        Completed coursework: Data Science and Databases, plan to pursue advanced studies in Machine Learning
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Education

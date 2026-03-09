import { FiImage } from 'react-icons/fi'
import ProfileCard from './ProfileCard'
import Stack from './PictureStack'
import LogoLoop from './LogoLoop'
import img1 from '../assets/photo1.jpg'
import img2 from '../assets/photo2.jpg'
import img3 from '../assets/photo3.jpg'
import img4 from '../assets/photo4.jpg'

const imageCards = [
  <div className="gallery-card" key="1" style={{ width: '100%', height: '100%' }}>
    <img src={img1} alt="Photo 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  </div>,
  <div className="gallery-card" key="2" style={{ width: '100%', height: '100%' }}>
    <img src={img2} alt="Photo 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  </div>,
  <div className="gallery-card" key="3" style={{ width: '100%', height: '100%' }}>
    <img src={img3} alt="Photo 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  </div>,
  <div className="gallery-card" key="4" style={{ width: '100%', height: '100%' }}>
    <img src={img4} alt="Photo 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  </div>,
]

const skillLogos = [
  { node: <span className="logo-text">Python</span> },
  { node: <span className="logo-text">SQL</span> },
  { node: <span className="logo-text">OpenAI API</span> },
  { node: <span className="logo-text">JavaScript</span> },
  { node: <span className="logo-text">pandas</span> },
  { node: <span className="logo-text">numpy</span> },
  { node: <span className="logo-text">Data Science</span> },
  { node: <span className="logo-text">Machine Learning</span> },
  { node: <span className="logo-text">Neural Networks</span> },
  { node: <span className="logo-text">React</span> },
  { node: <span className="logo-text">HTML/CSS</span> },
  { node: <span className="logo-text">Prompt Engineering</span> },
]

function Hero() {
  return (
    <section className="hero" id="home">
      {/* ROW 1: Name + Title  |  Picture Stack */}
      <div className="hero__top-row">
        <div className="hero__intro">
          <h1 className="hero__name">Nguyen Anh Duc</h1>
          <p className="hero__title">Data Science Student · AI Research Assistant</p>
        </div>
        <div className="hero__stack">
          <Stack
            cards={imageCards}
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={true}
            autoplay={true}
            autoplayDelay={4000}
            pauseOnHover={true}
          />
        </div>
      </div>

      {/* LOGO LOOP — scrolling skills ticker */}
      <div className="hero__logo-loop">
        <LogoLoop
          logos={skillLogos}
          speed={60}
          direction="left"
          pauseOnHover={true}
          logoHeight={20}
          gap={40}
          fadeOut={true}
          fadeOutColor="#ffffff"
        />
      </div>

      {/* ROW 2: Profile Card  |  About Me */}
      <div className="hero__bottom-row" id="about">
        <div className="hero__card">
          <ProfileCard
            name="Nguyen Anh Duc"
            title="Data Science · AI Research"
            avatarUrl={img2}
            handle="AnhDuc174"
            status="Open to Intern"
            contactText="Contact"
            showUserInfo={false}
            enableTilt={true}
            onContactClick={() => window.location.href = 'mailto:robertoducdz1704@gmail.com'}
          />
        </div>
        <div className="hero__about-wrapper">
          <h2 className="section-title">About Me</h2>
          <p className="hero__about">
            I am currently a Sophomore student at VinUniversity, studying Data Science.
            I have a proven track record in delivering high-quality solutions and contributing
            to organizational success. I have hands-on experience through course projects and
            personal projects related to data, including building forecasting systems and neural
            networks. I aim to leverage my skills to solve real-world challenges in areas such as
            environment or business, contributing innovative solutions and driving tangible impact
            beyond the classroom.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

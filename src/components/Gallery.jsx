import Stack from './PictureStack'
import { FiImage } from 'react-icons/fi'

const placeholderCards = [
    <div className="gallery-placeholder" key="1" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <FiImage size={32} />
        <span>Photo 1</span>
    </div>,
    <div className="gallery-placeholder" key="2" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
        <FiImage size={32} />
        <span>Photo 2</span>
    </div>,
    <div className="gallery-placeholder" key="3" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
        <FiImage size={32} />
        <span>Photo 3</span>
    </div>,
    <div className="gallery-placeholder" key="4" style={{ background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }}>
        <FiImage size={32} />
        <span>Photo 4</span>
    </div>,
]

function Gallery() {
    return (
        <section className="gallery fade-in fade-in-delay-1" id="gallery">
            <h2 className="section-title">Gallery</h2>
            <div className="gallery__stack-wrapper">
                <Stack
                    cards={placeholderCards}
                    randomRotation={true}
                    sensitivity={180}
                    sendToBackOnClick={true}
                    autoplay={true}
                    autoplayDelay={4000}
                    pauseOnHover={true}
                />
            </div>
        </section>
    )
}

export default Gallery

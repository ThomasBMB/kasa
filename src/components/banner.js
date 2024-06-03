import bannerImage from '../images/banner1-small.png';
import "../css/banner.css";

function Banner() {
    return (
        <div className='banner'>
            <img src={bannerImage} alt="Banner" className="banner-image" />
        </div>
    );
}

export default Banner
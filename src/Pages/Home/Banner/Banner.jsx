import img1 from '../../../assets/2023-Toyota-bZ4X-front-three-quarter.webp'
import img2 from '../../../assets/bmw-i5-edrive40-2023.jpg'
import img3 from '../../../assets/ford.webp'
import img4 from '../../../assets/mercedes-benz-maybach-virgil-abloh_dezeen_2364_sq_20.webp'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full rounded-xl">
                    <img src={img1} />
                    <div className="absolute flex items-center h-full  left-0 rounded-lg bottom-0 bg-gradient-to-r from-[#151515]">
                       <div className='text-white space-y-7 pl-12 w-1/3 '>
                        <h2 className='text-6xl font-bold'>Affordable price for car service</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro libero natus exercitationem dolores amet obcaecati tenetur saepe vero ut voluptatem?</p>
                        <div>
                        <button className="btn btn-active btn-primary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-info">Latest projects</button>
                        </div>
                       </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2}  />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3}  />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4}  />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;
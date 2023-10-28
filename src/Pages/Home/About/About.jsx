import img5 from '../../../assets/ogi1-2023-honda-civic-type-r-001.webp'
import img6 from '../../../assets/tesla.jpg'
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 relative'>
    <img src={img5} className='w-3/4 rounded-lg border-8' />
    <img src={img6} className='w-1/2 absolute right-5 top-40 rounded-lg border-8' />
    </div>
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default About;
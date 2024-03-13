import React from 'react'
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import featureImg from '../assets/images/feature-img.png'
import faqImg from '../assets/images/faq-img.png'
import { Link } from 'react-router-dom';
import About from '../components/About/About.jsx';
import { BsArrowRight, } from 'react-icons/bs';
import ServicesList from '../components/Services/ServicesList.jsx';
import FaqList from '../components/Faq/FaqList.jsx';
const Home = () => {
  return (
    <>
      {/* -------hero section-------- */}
      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            {/* ---------hero section---------- */}
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
                  We help patients live a healthy, longer life.
                </h1>
                <p className='text__para'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium natus ipsam a tempora quas doloribus enim, officiis, quasi numquam obcaecati voluptate laboriosam eos? Exercitationem delectus voluptas placeat dicta blanditiis reiciendis!
                </p>
                <button className='btn'>Request an Appointment</button>
              </div>
              {/* ---------hero section---------- */}
              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                    30+
                  </h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Years of Experience</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                    15+
                  </h2>
                  <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Clinics Location</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                    100%
                  </h2>
                  <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/* ---------hero section---------- */}

            <div className='flex gap-[30px] justify-end'>
              <div>
                <img className='w-full' src={heroImg01} alt="" />
              </div>
              <div className='mt-[30px]'>
                <img className='w-full mb-[30px]' src={heroImg02} alt="" />
                <img className='w-full' src={heroImg03} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -------hero section end-------- */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">Providing the best medical services</h2>
            <p className="text-center text__para">provides the best care for everyone.</p>


          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

            <div className="py-[30ppx] ppx-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <p className='text-center text-xl'>Your doctor here</p>
              <Link to="/doctors"
                className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>




            </div>



            <div className="py-[30ppx] ppx-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <p className='text-center text-xl'>Location</p>
              <Link to="/location"
                className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>




            </div>


            <div className="py-[30ppx] ppx-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <p className='text-center text-xl'>Book Appointment</p>
              <Link to="/doctors"
                className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* -----about section start here----- */}
      
        <About />
      
      {/* -----about section end here----- */}


      {/* services section start here */}
      <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our medical services</h2>
            <p className='text__para text-center'>
              World-class care for everyone. Our health system offers unmatched, expert health care.
            </p>
          </div>
          <ServicesList />
        </div>       
      </section>
      {/* services section end here */}

      {/* ------- feature section---------- */}
      <section>
        <div className='container'>
          <div className='flex items-center justify-center flex-col lg:flex-row'>
            {/* ------- feature content---------- */}
            <div className='xl:w-[670px]'>
              <h2 className='heading'>Get virtual treatment <br /> anytime.</h2>
              <ul className='pl-4'>
                <li className='text__para'>
                  1. Schedule the appointment directly.
                </li>
                <li className='text__para'>
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="text__para">
                  3. View our physician who are accepting new patients, use the online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to='/'><button className='btn'>Learn More</button></Link>
            </div>

            {/* ------- feature img ---------- */}
            <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
              <img src={featureImg} className='w-3/4' alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* ------- feature section end ---------- */}

      {/* -------faq section---------- */}
      <section>
        <div className='container'>
          <div className='flex justify-between gap-[50px] lg:gap-0'>
            <div className='w-1/2 hidden md:block'>
              <img src={faqImg} alt="" />
            </div>
            <div className='w-full md:w-1/2'>
              <h2 className='heading'>Most questions by our beloved patients</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* ------- faq section end ---------- */}
    </>
  )
}

export default Home
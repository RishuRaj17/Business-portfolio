import React from 'react';
import "./index.css"
import './App.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
// import hero from 'porfolio\public\images\hero.png';

function App() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <GallerySection />
      <TestimonialSection />
      <ContactSection />
      <FloatingButton/>
      <Footer />
    </>
  )
}



function Navigation() {
    return (
        <nav className="bg-black p-4 flex items-center justify-between " style={{background:"#222831"}}>
            <div className="flex items-center">
                {/* <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" /> */}
                <div className='flex-col items-center ml-8'>
                    <span className=' text-xs text-white m-0 p-0'>THE DIGITAL</span>
                    <h1 className="text-white font-bold text-lg m-0 p-0 tracking-widest">DZ!NR</h1>
                </div>
            </div>
            <div className="hidden md:flex">
                <a href="#contact" className="text-white mr-7 hover:border-b-2 border-purple-500">Gallery</a>
                <a href="#contact" className="text-white mr-7 hover:border-b-2 border-purple-500">Our Services</a>
                <a href="#about" className="text-white mr-7 hover:border-b-2 border-purple-500">About Us</a>
                <a href="#services" className="text-white mr-7 hover:border-b-2 border-purple-500 ">Contact Us</a>
            </div>
            <div className="flex md:hidden">
                <button className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}

// export default Navigation;


function HeroSection() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            {/* <div className="absolute inset-0 z-0">
                <img src="hero.png" alt="Background" className="w-full h-full object-cover" />
            </div> */}
            
            {/* Background Video (uncomment this section for video background) */}
            {/* <video className="absolute inset-0 z-0 object-cover h-screen w-screen" autoPlay loop muted> */}
                {/* <source src="porfolio\src\media\hero.mp4" type="video/mp4" /> */}
                <iframe className="absolute inset-0 z-0 object-cover h-screen w-screen" src="https://www.youtube.com/embed/IxDvpoCmAaY?si=EdqmvlLpPitJelR-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            {/* </video> */}
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            
            {/* Caption and Button */}
            <div className="relative z-20 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold tracking-widest">DZ!NR</h1>
                <p className="text-lg md:text-xl mb-8"><i>Turn your Imagination into Reality!</i></p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Explore
                </button>
            </div>
        </section>
    );
}


function ServicesSection() {

    const testimonials = [
        { id: 1, name: 'Logo Designing', comment: 'Lorem ipsum dolor sit amet, consectetur', image: 'avatar-1.jpg' },
        { id: 2, name: 'Packaging Design', comment: 'Sed do eiusmod tempor incididunt ut labore ', image: 'avatar-2.jpg' },
        { id: 3, name: 'Social Media Designing', comment: 'Duis aute irure dolor in reprehenderit in ', image: 'avatar-4.jpg' },
        { id: 4, name: 'Banner Design', comment: 'Excepteur sint occaecat cupidatat non ', image: 'avatar-5.jpg' },
        { id: 5, name: 'Illustration / caricature', comment: 'Excepteur sint occaecat cupidatat non ', image: 'avatar-5.jpg' },
        { id: 6, name: 'Brochure & catalog Design', comment: 'Excepteur sint occaecat cupidatat non ', image: 'avatar-5.jpg' },
        { id: 7, name: 'UI/UX Design (And much more..)', comment: 'Excepteur sint occaecat cupidatat non ', image: 'avatar-5.jpg' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Display three testimonials at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768, // Adjust this breakpoint as needed for smartphones
                settings: {
                    slidesToShow: 1, // Display only one testimonial on smartphones
                },
            },
        ],
    };

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">We Offer</h2>
                <Slider {...settings}>
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id}>
                            <div className="bg-white p-6  m-6 rounded-lg shadow-md">
                                <img src={testimonial.image} alt={testimonial.name} className="h-20 w-20 mx-auto mb-4 rounded-full" />
                                <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
                                <p className="text-gray-600">{testimonial.comment}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
  );
}


function ServiceCard({ title, description, icon }) {
  return (
      <div className="bg-white p-6 rounded-lg shadow-md m-8">
          <img src={icon} alt={title} className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
      </div>
  );
}

function AboutUsSection() {
  return (
      <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                  <AboutCard
                      title="DZ!NR"
                      description="DZINR is a leading provider of digital services, specializing in graphic design. We offer a wide range of services, including poster design, card design, logo design, and much more. Our team of experienced designers is dedicated to delivering high-quality, innovative designs that exceed our clients' expectations. Whether you're looking to create a striking poster for an event or a memorable logo for your business, DZINR has the creativity and expertise to bring your vision to life."
                      image="image-1.jpg"
                  />
                  {/* <AboutCard
                      title="Our Mission"
                      description="Our mission statement and goals."
                      image="image-2.jpg"
                  />
                  <AboutCard
                      title="Why Choose Us"
                      description="Reasons why customers should choose our services."
                      image="image-3.jpg"
                  /> */}
              </div>
          </div>
      </section>
  );
}

function AboutCard({ title, description, image }) {
  return (
      <div className="bg-white p-6 rounded-lg shadow-md m-8">
          <img src={image} alt={title} className="h-32 w-32 mx-auto mb-4 rounded-md  border-rose-600 " />
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
      </div>
  );
}

function GallerySection() {
  const works = [
      { id: 1, title: 'Work 1', description: 'Description of work 1.', image: 'image-1.jpg' },
      { id: 2, title: 'Work 2', description: 'Description of work 2.', image: 'image-2.jpg' },
      { id: 3, title: 'Work 3', description: 'Description of work 3.', image: 'image-3.jpg' },
      // Add more works as needed
  ];

  return (
      <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Our Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {works.map(work => (
                      <WorkCard key={work.id} title={work.title} description={work.description} image={work.image} />
                  ))}
              </div>
          </div>
      </section>
  );
}

function WorkCard({ title, description, image }) {
  return (
      <div className="bg-white p-6 rounded-lg shadow-md m-2">
          <img src={image} alt={title} className="h-48 w-full object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
      </div>
  );
}


function TestimonialSection() {
    const testimonials = [
        { id: 1, name: 'John Doe', comment: 'Lorem ipsum dolor sit amet, consectetur', image: 'avatar-1.jpg' },
        { id: 2, name: 'Jane Smith', comment: 'Sed do eiusmod tempor incididunt ut labore ', image: 'avatar-2.jpg' },
        { id: 3, name: 'Alice Johnson', comment: 'Ut enim ad minim veniam, quis nostrud ', image: 'avatar-3.jpg' },
        { id: 4, name: 'Bob Brown', comment: 'Duis aute irure dolor in reprehenderit in ', image: 'avatar-4.jpg' },
        { id: 5, name: 'Eva Green', comment: 'Excepteur sint occaecat cupidatat non ', image: 'avatar-5.jpg' },
        // Add more testimonials as needed
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Display three testimonials at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768, // Adjust this breakpoint as needed for smartphones
                settings: {
                    slidesToShow: 1, // Display only one testimonial on smartphones
                },
            },
        ],
    };

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
                <Slider {...settings}>
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id}>
                            <div className="bg-white p-6  m-6 rounded-lg shadow-md">
                                <img src={testimonial.image} alt={testimonial.name} className="h-20 w-20 mx-auto mb-4 rounded-full" />
                                <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
                                <p className="text-gray-600">{testimonial.comment}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

function ContactSection() {
  return (
      <section className="py-16 bg-gray-100 m-8 p-8 br-5 rounded-lg">
          <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
              <div className="max-w-lg mx-auto">
                  <form className="grid grid-cols-3 gap-6">
                      <label htmlFor="name" className="block">
                          <span className="text-gray-700">Name</span>
                          <input type="text" id="name" name="name" className="form-input mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                      </label>
                      <label htmlFor="email" className="block">
                          <span className="text-gray-700">Email</span>
                          <input type="email" id="email" name="email" className="form-input mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                      </label>
                      <label htmlFor="message" className="block">
                          <span className="text-gray-700">Message</span>
                          <textarea id="message" name="message" rows="4" className="form-textarea mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
                      </label>
                      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                          Submit
                      </button>
                  </form>
              </div>
          </div>
      </section>
  );
}

function Footer() {
  return (
      <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto text-center">
              <p>&copy; 2022 Your Company. All Rights Reserved.</p>
          </div>
      </footer>
  );
}

function FloatingButton() {
    return (
        <div className="fixed bottom-10 right-10 z-10">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                {/* <FaFacebook /> */}
                {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                {/* <FaTwitter /> */}
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                {/* <FaInstagram /> */}
            </a>
        </div>
    );
}
export default App;

import React, { useState } from 'react';
import { ChevronRight, ArrowRight, ArrowLeft, Linkedin, Facebook, Twitter, Menu, X, Plus, Minus } from 'lucide-react';
import Icon from './assets/Icon.svg';
import Frame19 from './assets/Frame 19.svg';
import Icon1 from './assets/Icon (1).svg';
import Illustration from './assets/Illustration.svg';
import Logotypes from './assets/Logotypes.svg';
import Illustration1 from './assets/Illustration (1).svg';
import Illustration2 from './assets/Illustration (2).svg';
import Illustration3 from './assets/Illustration (3).svg';
import Illustration4 from './assets/Illustration (6).svg';
import Illustration5 from './assets/Illustration (4).svg';
import Illustration6 from './assets/Illustration (5).svg';
import Illustration7 from './assets/Illustration (7).svg';
import p1 from './assets/p1.png';
import p2 from './assets/p2.png';
import p3 from './assets/p3.png';
import p4 from './assets/p4.png';
import p5 from './assets/p5.png';
import p6 from './assets/p6.png';



export default function PositivusLanding() {
  const [activeTestimonial, setActiveTestimonial] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedProcess, setExpandedProcess] = useState(0);
  const [contactType, setContactType] = useState('say-hi');

  const services = [
    {
      title: 'Search engine optimization',
      bg: 'bg-gray-100',
      textColor: 'text-black',
      icon: Illustration1
    },
    {
      title: 'Pay-per-click advertising',
      bg: 'bg-[#B9FF66]',
      textColor: 'text-black',
      icon: Illustration2
    },
    {
      title: 'Social Media Marketing',
      bg: 'bg-[#191A23]',
      textColor: 'text-white',
      icon: Illustration3
    },
    {
      title: 'Email Marketing',
      bg: 'bg-gray-100',
      textColor: 'text-black',
      icon: Illustration4
    },
    {
      title: 'Content Creation',
      bg: 'bg-[#B9FF66]',
      textColor: 'text-black',
      icon: Illustration5
    },
    {
      title: 'Analytics and Tracking',
      bg: 'bg-[#191A23]',
      textColor: 'text-white',
      icon: Illustration6
    }
  ];

  const caseStudies = [
    {
      text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.'
    },
    {
      text: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.'
    },
    {
      text: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.'
    }
  ];

  const team = [
    { name: 'John Smith', role: 'CEO and Founder', experience: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy', image: p1 },
    { name: 'Jane Doe', role: 'Director of Operations', experience: '7+ years of experience in project management and team leadership. Strong organizational and communication skills', image: p2 },
    { name: 'Michael Brown', role: 'Senior SEO Specialist', experience: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization', image: p3 },
    { name: 'Emily Johnson', role: 'PPC Manager', experience: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis', image: p4 },
    { name: 'Brian Williams', role: 'Social Media Specialist', experience: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement', image: p5 },
    { name: 'Sarah Kim', role: 'Content Creator', experience: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries', image: p6 }
  ];

  const processSteps = [
    {
      title: 'Consultation',
      description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
    },
    { title: 'Research and Strategy Development', description: 'We conduct thorough research and develop a comprehensive strategy.' },
    { title: 'Implementation', description: 'We execute the strategy with precision and care.' },
    { title: 'Monitoring and Optimization', description: 'We continuously monitor and optimize for best results.' },
    { title: 'Reporting and Communication', description: 'Regular updates and transparent communication throughout.' },
    { title: 'Continual Improvement', description: 'We constantly refine and improve our approach.' }
  ];

  const testimonials = [
    {
      text: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
      author: 'John Smith',
      position: 'Marketing Director at XYZ Corp'
    },
    {
      text: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
      author: 'John Smith',
      position: 'Marketing Director at ABC Inc'
    },
    {
      text: 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
      author: 'John Smith',
      position: 'Marketing Director at DEF Ltd'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={Icon} alt="Positivus logo" className="w-8 h-8" />
            <span className="text-2xl font-bold">Positivus</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="hover:text-gray-600">About us</a>
            <a href="#services" className="hover:text-gray-600">Services</a>
            <a href="#cases" className="hover:text-gray-600">Use Cases</a>
            <a href="#pricing" className="hover:text-gray-600">Pricing</a>
            <a href="#blog" className="hover:text-gray-600">Blog</a>
            <button className="px-6 py-3 border-2 border-black rounded-xl hover:bg-black hover:text-white transition-colors">
              Request a quote
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4">
            <a href="#about" className="hover:text-gray-600">About us</a>
            <a href="#services" className="hover:text-gray-600">Services</a>
            <a href="#cases" className="hover:text-gray-600">Use Cases</a>
            <a href="#pricing" className="hover:text-gray-600">Pricing</a>
            <a href="#blog" className="hover:text-gray-600">Blog</a>
            <button className="px-6 py-3 border-2 border-black rounded-xl">Request a quote</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Navigating the digital landscape for success
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <button className="bg-[#191A23] text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors">
              Book a consultation
            </button>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gray-100 rounded-3xl flex items-center justify-center">
              <img src={Illustration} alt="Announcement illustration" className="w-40 h-40 md:w-56 md:h-56" />
            </div>
          </div>
        </div>

        {/* Logos */}
        <div className="mt-16 flex justify-center opacity-60">
          <img src={Logotypes} alt="Logotypes" className="w-full max-w-[79rem]" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <div className="inline-block bg-[#B9FF66] px-2 py-1 rounded mb-4">
            <h2 className="text-3xl font-bold">Services</h2>
          </div>
          <p className="text-lg">
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bg} ${service.textColor} rounded-3xl p-12 border-2 border-black`}
            >
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-auto inline-block bg-[#B9FF66] text-black px-2 rounded w-fit">
                  {service.title}
                </h3>
                <div className="flex items-end justify-between mt-8">
                     <button className={`flex items-center gap-2 ${service.textColor === 'text-white' ? 'text-white' : 'text-black'}`}>
                    <span className="flex items-center gap-2">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${service.textColor === 'text-white' ? 'bg-white text-black' : 'bg-black text-white'}`}>
                        <ChevronRight size={20} />
                      </div>
                      Learn more
                    </span>
                  </button>
                  <div>
                    <img src={service.icon} alt={`${service.title} icon`} className="" />
                  </div>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gray-100 rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Let's make things happen</h2>
            <p className="text-gray-700 mb-6">
              Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
            </p>
            <button className="bg-[#191A23] text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors">
              Get your free proposal
            </button>
          </div>
          <div>
            <img src={Frame19} alt="Frame 19 illustration" className="" />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <div className="inline-block bg-[#B9FF66] px-2 py-1 rounded mb-4">
            <h2 className="text-3xl font-bold">Case Studies</h2>
          </div>
          <p className="text-lg">
            Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
          </p>
        </div>

        <div className="bg-[#191A23] rounded-3xl p-12">
          <div className="grid md:grid-cols-3 gap-8 divide-x-0 md:divide-x divide-gray-700">
            {caseStudies.map((study, index) => (
              <div key={index} className="px-8 first:pl-0 last:pr-0">
                <p className="text-white mb-4">{study.text}</p>
                <button className="text-[#B9FF66] flex items-center gap-2 hover:gap-4 transition-all">
                  Learn more <img src={Icon1} alt="arrow" className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Process */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <div className="inline-block bg-[#B9FF66] px-2 py-1 rounded mb-4">
            <h2 className="text-3xl font-bold">Our Working Process</h2>
          </div>
          <p className="text-lg">Step-by-Step Guide to Achieving Your Business Goals</p>
        </div>

        <div className="space-y-6">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`border-2 border-black rounded-3xl overflow-hidden ${
                expandedProcess === index ? 'bg-[#B9FF66]' : 'bg-gray-50'
              }`}
            >
              <button
                onClick={() => setExpandedProcess(expandedProcess === index ? -1 : index)}
                className="w-full p-8 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-6">
                  <span className="text-4xl font-bold">0{index + 1}</span>
                  <span className="text-2xl font-bold">{step.title}</span>
                </div>
                <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center bg-gray-100">
                  {expandedProcess === index ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </button>
              {expandedProcess === index && (
                <div className="px-8 pb-8">
                  <div className="h-px bg-black mb-6"></div>
                  <p className="text-lg">{step.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <div className="inline-block bg-[#B9FF66] px-2 py-1 rounded mb-4">
            <h2 className="text-3xl font-bold">Team</h2>
          </div>
          <p className="text-lg">
            Meet the skilled and experienced team behind our successful digital marketing strategies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {team.map((member, index) => (
            <div key={index} className="border-2 border-black rounded-3xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <img src={member.image} alt={`${member.name} photo`} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <p className="text-sm">{member.role}</p>
                  </div>
                </div>
                <button className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                  <Linkedin size={16} />
                </button>
              </div>
              <div className="h-px bg-black mb-4"></div>
              <p className="text-sm">{member.experience}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <button className="bg-[#191A23] text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors">
            See all team
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <div className="inline-block bg-[#B9FF66] px-2 py-1 rounded mb-4">
            <h2 className="text-3xl font-bold">Testimonials</h2>
          </div>
          <p className="text-lg">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
          </p>
        </div>

        <div className="bg-[#191A23] rounded-3xl p-12">
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-opacity ${
                    index === activeTestimonial ? 'opacity-100' : 'opacity-30'
                  }`}
                >
                  <div className="border-2 border-[#B9FF66] rounded-3xl p-8 text-white">
                    <p className="mb-6">{testimonial.text}</p>
                    <div>
                      <p className="text-[#B9FF66] font-bold">{testimonial.author}</p>
                      <p className="text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={() => setActiveTestimonial(Math.max(0, activeTestimonial - 1))}
                className="text-white hover:text-[#B9FF66] transition-colors"
              >
                <ArrowLeft size={32} />
              </button>
              
              <div className="flex gap-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeTestimonial ? 'bg-[#B9FF66]' : 'bg-white'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveTestimonial(Math.min(testimonials.length - 1, activeTestimonial + 1))}
                className="text-white hover:text-[#B9FF66] transition-colors"
              >
                <ArrowRight size={32} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <div className="inline-block bg-[#B9FF66] px-2 py-1 rounded mb-4">
            <h2 className="text-3xl font-bold">Contact Us</h2>
          </div>
          <p className="text-lg">Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
        </div>

        <div className="bg-gray-100 rounded-3xl p-12 grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex gap-4 mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="contact-type"
                  checked={contactType === 'say-hi'}
                  onChange={() => setContactType('say-hi')}
                  className="w-5 h-5 accent-[#B9FF66]"
                />
                <span>Say Hi</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="contact-type"
                  checked={contactType === 'quote'}
                  onChange={() => setContactType('quote')}
                  className="w-5 h-5 accent-[#B9FF66]"
                />
                <span>Get a Quote</span>
              </label>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border-2 border-black rounded-xl"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Email*</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border-2 border-black rounded-xl"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">Message*</label>
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-black rounded-xl"
                ></textarea>
              </div>
              <button className="w-full bg-[#191A23] text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors">
                Send Message
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src={Illustration7} alt="Contact illustration" className="" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#191A23] text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <img src={Icon} alt="Positivus logo" className="w-8 h-8 invert" />
                <span className="text-2xl font-bold">Positivus</span>
              </div>
              <div className="space-y-2">
                <div className="inline-block bg-[#B9FF66] text-black px-3 py-1 rounded">
                  Contact us:
                </div>
                <p>Email: info@positivus.com</p>
                <p>Phone: 555-567-8901</p>
                <p>Address: 1234 Main St</p>
                <p>Moonstone City, Stardust State 12345</p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-8">
              <div className="flex gap-8">
                <a href="#about" className="hover:text-[#B9FF66]">About us</a>
                <a href="#services" className="hover:text-[#B9FF66]">Services</a>
                <a href="#cases" className="hover:text-[#B9FF66]">Use Cases</a>
                <a href="#pricing" className="hover:text-[#B9FF66]">Pricing</a>
                <a href="#blog" className="hover:text-[#B9FF66]">Blog</a>
              </div>

              <div className="flex gap-4">
                <button className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-[#B9FF66] transition-colors">
                  <Linkedin size={20} />
                </button>
                <button className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-[#B9FF66] transition-colors">
                  <Facebook size={20} />
                </button>
                <button className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-[#B9FF66] transition-colors">
                  <Twitter size={20} />
                </button>
              </div>

              <div className="flex gap-4 w-full max-w-md">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-3 bg-[#292A32] border-2 border-gray-700 rounded-xl text-white placeholder-gray-400"
                />
                <button className="bg-[#B9FF66] text-black px-6 py-3 rounded-xl hover:bg-[#a3e655] transition-colors whitespace-nowrap">
                  Subscribe to news
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">© 2023 Positivus. All Rights Reserved.</p>
            <a href="#privacy" className="text-sm underline hover:text-[#B9FF66]">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
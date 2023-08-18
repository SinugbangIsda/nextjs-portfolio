import React from 'react';
import { Container } from '@/components';
import ContactForm from './form';
import { BsTelephoneXFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { TiLocation } from "react-icons/ti";

const contactItems = [
  {
    label: "marcuoperario@gmail.com",
    icon: <MdEmail />
  },
  {
    label: "+63 956 298 1040",
    icon: <BsTelephoneXFill />
  },
  {
    label: "Alfonso Angliongto Sr., Davao City",
    icon: <TiLocation />
  },
]

const ContactSection = () => {
  return (
    <section 
      id = "contact"
      className = "w-full h-full"
    >
      <Container>
        <div className = "border-t border-[#2C3031]">
          <div className = "mt-4 sm:mt-20 space-y-10">
            <h2 className = "text-3xl">
              Contact Me
            </h2>
            <div className = "flex flex-col sm:flex-row gap-10">
              <div className = "w-full flex flex-col space-y-3">
                <h1 className = "font-bold text-5xl">
                  Get in Touch!
                </h1>
                <p className = "text-xl text-[#7D8590]">
                  Ready to connect? Have a question or an idea? I'm here to listen. Whether you prefer using the form, or dropping me an email, I'm all ears. Let's bring your thoughts to life!
                </p>
                { contactItems.map((val, i) => (
                  <div
                    key = { i }
                    className = "flex items-center gap-4 text-lg"
                  >
                    { val.icon }
                    <span>
                      { val.label }
                    </span>
                  </div>
                ))}
              </div>
              <div className = "w-full">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ContactSection;
import { useRef, useState } from "react";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import { grid } from "../assets";
import { Gradient } from "./design/Roadmap";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactMessage, setContactMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Make sure your template has these variables defined
    const templateParams = {
      user_name: formRef.current.name.value,
      user_email: formRef.current.email.value,
      user__message: formRef.current.message.value
    };

    console.log(templateParams);

    emailjs.send(
      "service_jbqc9yo",
      "template_cf81pgc",
      templateParams,  // Changed from formRef.current to templateParams
      {
        publicKey:"dHZ7QpTwL2xvsRVeL"}
    )
    .then(() => {
      setContactMessage('Message sent successfully');
      formRef.current.reset();
      
      setTimeout(() => {
        setContactMessage('');
      }, 5000);
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      setContactMessage('Message not sent (service error)');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <Section className="overflow-hidden" id="contact">
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="Get in touch with us" />

        <div className="relative p-0.25 rounded-[2.5rem] bg-n-6">
          <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
            <div className="absolute top-0 left-0 max-w-full">
              <img
                className="w-full"
                src={grid}
                width={550}
                height={550}
                alt="Grid"
              />
            </div>
            <div className="relative z-1">
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="mb-8">
                  <label className="block body-2 text-n-1 mb-4" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    className="w-full px-6 py-4 bg-n-7 rounded-xl body-2 text-n-1 border border-n-6 focus:border-n-5 transition-colors"
                    type="text"
                    id="name"
                    name="user_name"  // Make sure this matches template
                    required
                  />
                </div>

                <div className="mb-8">
                  <label className="block body-2 text-n-1 mb-4" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="w-full px-6 py-4 bg-n-7 rounded-xl body-2 text-n-1 border border-n-6 focus:border-n-5 transition-colors"
                    type="email"
                    id="email"
                    name="user_email"  // Make sure this matches template
                    required
                  />
                </div>

                <div className="mb-8">
                  <label className="block body-2 text-n-1 mb-4" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    className="w-full px-6 py-4 bg-n-7 rounded-xl body-2 text-n-1 border border-n-6 focus:border-n-5 transition-colors min-h-[150px]"
                    id="message"
                    name="user__message"  // Make sure this matches template
                    required
                  />
                </div>

                <div className="flex justify-between items-center">
                  {contactMessage && (
                    <p className={`body-2 ${
                      contactMessage.includes('successfully') 
                        ? 'text-green-500' 
                        : 'text-red-500'
                    }`}>
                      {contactMessage}
                    </p>
                  )}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={isSubmitting ? 'opacity-50' : ''}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Gradient />
      </div>
    </Section>
  );
};

export default Contact;
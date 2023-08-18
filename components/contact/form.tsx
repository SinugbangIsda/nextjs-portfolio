"use client"

import React, {
  useState,
  useRef,
  useEffect
} from 'react';
import { FormInput } from "@/components";
import emailjs from '@emailjs/browser';

interface FormProps {
  email: string;
  firstname: string;
  lastname: string;
  message: string;
};

const INTIAL_FORM_DATA: FormProps = {
  email: "",
  firstname: "",
  lastname: "",
  message: ""
};

const ContactForm = () => {
  const [ formData, setFormData ] = useState<FormProps>(INTIAL_FORM_DATA);
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ success, setSuccess ] = useState<string>("");
  const [ error, setError ] = useState<string>();

  const form = useRef<any>();
  const { sendForm } = emailjs;

  const handleSubmit = () => {
    setLoading(true);
    sendForm("service_to3qk67", "template_lj1i1y7", form.current,"RaY9UgJd0OXYAHiYH")
    .then(res => {
      setTimeout(() => {
        setFormData(INTIAL_FORM_DATA);
        setLoading(false);
        setSuccess("Message sent!")
      }, 1000);
    })
    .catch(err => {
      setTimeout(() => {
        setFormData(INTIAL_FORM_DATA);
        setLoading(false);
        setError(err);
      }, 1000);
    })
    .finally(() => {
      setTimeout(() => {
        setSuccess("");
        setError("")
        setLoading(false);
        setError("");
      }, 10000);
    });
  };

  return (
    <form 
      className = "flex flex-col space-y-6"
      onSubmit = {(e) => { 
        e.preventDefault();
        handleSubmit();
      }}
      ref = { form }
    >
      <div className = "flex flex-col sm:flex-row gap-4 w-full">
        <FormInput 
          placeholder = "John"
          label = "First Name"
          type = "text"
          value = { formData.firstname }
          onChange = {(e) => {
            setFormData({ 
              ...formData, 
              firstname: e.target.value 
            });
          }}
          name = "firstname"
          required
        />
        <FormInput 
          placeholder = "Doe"
          label = "Last Name"
          type = "text"
          value = { formData.lastname }
          onChange = {(e) => {
            setFormData({ 
              ...formData, 
              lastname: e.target.value 
            });
          }}
          name = "lastname"
          required
        />
      </div>
      <FormInput 
        placeholder = "name@email.com"
        label = "Email Address"
        type = "email"
        value = { formData.email }
        onChange = {(e) => {
          setFormData({ 
            ...formData, 
            email: e.target.value 
          });
        }}
        name = "email"
        required
      />
      <FormInput 
        placeholder = "Enter Message"
        label = "Message"
        type = "textarea"
        value = { formData.message }
        onChange = {(e) => {
          setFormData({ 
            ...formData, 
            message: e.target.value
          });
        }}
        name = "message"
        required
      />
      <button
        type = "submit"
        className = "w-full border border-[#2C3031] text-white rounded-lg hover:bg-white hover:text-black duration-300 p-4 font-bold"
      >
        Submit
      </button>
      { loading && (
        <div className = "w-full bg-[#e5973e] text-white p-4 rounded-lg">
          <span className = "font-bold">
            Submitting form...
          </span>
        </div>
      )}
      { success &&(
        <div className = "w-full bg-[#3ee554] text-white p-4 rounded-lg">
          <span className = "font-bold">
            { success }
          </span>
        </div>
      )}
      { error && (
        <div className = "w-full bg-[#E53E3F] text-white p-4 rounded-lg">
          <span className = "font-bold">
            { error }
          </span>
        </div>
      )}
    </form>
  )
};

export default ContactForm;
import React, { ChangeEvent } from 'react';

interface FormInputProps {
    type: string;
    placeholder: string;
    label: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    name: string;
};

const FormInput = ({
    type,
    placeholder,
    label,
    value,
    onChange,
    name,
    required  
}: FormInputProps) => {
  return (
    <div className = "flex flex-col space-y-2 w-full h-full">
        <div className = "flex flex-row items-center gap-1.5">
            <span>
                { label }
            </span>
            { required && (
                <span className = "text-[#E53E3F]">
                    *
                </span>
            )}
        </div>
        { type != "textarea" ? 
            <input 
                type = { type }
                placeholder = { placeholder }
                value = { value }
                onChange = { onChange }
                required = { required }
                className = "w-full border border-[#2C3031] bg-transparent rounded-lg p-4"
                name = { name }
                autoComplete = "off"
            />
            
        :
            <textarea 
                placeholder = { placeholder }
                value = { value }
                onChange = { onChange }
                required = { required }
                className = "w-full border border-[#2C3031] bg-transparent rounded-lg p-4 resize-none h-60"
                name = { name }
                autoComplete = "off"
            />
        }
    </div>
  )
}

export default FormInput;
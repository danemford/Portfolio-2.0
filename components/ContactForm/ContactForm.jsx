'use client'

import { useForm } from '@formspree/react';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("moqzzanr");
    if (state.succeeded) {
      return <div>Thank you - Your form has been submitted!</div>
    };
    return (
        <form onSubmit={handleSubmit} method="POST" className='flex flex-col rounded-lg p-6 shadow-lg mb-6'>
           <h3 className="font-semibold mb-6">Drop me a message via this form to get in touch</h3>
           <div className="flex flex-col sm:flex-row mb-6">
             <input type="text" name="First Name" placeholder="First Name" className='border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:p-2 p-2 mb-6 sm:mb-0' />
             <input type="text" name="Last Name" placeholder=" Last Name" className='border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:ml-2 placeholder:p-2 p-2' />
            </div>
           <input type="email" name="Email" placeholder="Email" className="border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 mb-6 placeholder:p-2 p-2" />
           <textarea rows="3" name="Message" placeholder="Message" className="block w-full border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 mb-6 placeholder:p-2 p-2"></textarea>
           <button className="w-20 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:shadow-gray-400 mb-6 p-2 font-semibold" type="submit" disabled={state.submitting}>Submit</button>
        </form>
       );
  };

    
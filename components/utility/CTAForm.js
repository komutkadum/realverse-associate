import { sendEmail } from '@/lib/sendEmail';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

function CTAForm() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  return (
    <div className="bg-white px-5 py-5 shadow-xl rounded-lg text-primary-dark">
      <h1 className="text-lg text-center font-extrabold">
        Have queries? Talk to an expert
      </h1>
      <form
        ref={form}
        className="grid gap-y-4 py-4 text-base font-normal"
        onSubmit={(e) => sendEmail(e, setLoading, form, router)}
      >
        <div className="grid gap-y-2">
          <label className="font-bold">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="rounded-md text-sm border-gray-400"
            name="user_name"
            required
          />
        </div>
        <div className="grid gap-y-2">
          <label className="font-bold">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-md text-sm border-gray-400"
            name="user_email"
            required
          />
        </div>
        <div className="grid gap-y-2">
          <label className="font-bold">Mobile</label>
          <input
            type="number"
            placeholder="Enter your phone number"
            className="rounded-md text-sm border-gray-400"
            required
            name="user_phone"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            className="focus:ring-0 focus:outline-none"
            required
            name="whatsapp"
          />
          <label className="text-sm ml-2">
            I agree to receive updates on WhatsApp
          </label>
        </div>
        <textarea
          className="hidden"
          name="message"
          defaultValue={`Request a callback for ${router.asPath}`}
        ></textarea>
        <button className="px-4 relative py-2.5 text-sm btn-bg font-bold rounded-lg bg-amber-500 hover:bg-amber-600">
          {loading ? 'submitting...' : 'Request a Callback'}
          <div className="absolute h-3 w-3 animate-ping bg-white right-1 top-1 rounded-full opacity-70"></div>
        </button>
      </form>
    </div>
  );
}

export default CTAForm;

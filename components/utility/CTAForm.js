function CTAForm() {
  return (
    <div className="bg-white px-5 py-5 shadow-xl rounded-lg text-primary-dark">
      <h1 className="text-lg text-center font-extrabold">
        Have queries? Talk to an expert
      </h1>
      <form className="grid gap-y-4 py-4 text-base font-normal">
        <div className="grid gap-y-2">
          <label className="font-bold">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="rounded-md text-sm border-gray-400"
            required
          />
        </div>
        <div className="grid gap-y-2">
          <label className="font-bold">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-md text-sm border-gray-400"
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
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            className="focus:ring-0 focus:outline-none"
            required
          />
          <label className="text-sm ml-2">
            I agree to receive updates on WhatsApp
          </label>
        </div>
        <button className="px-4 relative py-2.5 text-sm btn-bg font-bold rounded-lg bg-amber-500 hover:bg-amber-600">
          Request a Callback
          <div className="absolute h-3 w-3 animate-ping bg-white right-1 top-1 rounded-full opacity-70"></div>
        </button>
      </form>
    </div>
  );
}

export default CTAForm;

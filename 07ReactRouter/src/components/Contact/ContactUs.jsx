const contactItems = [
  {
    label: 'Acme Inc, Street, State, Postal Code',
    paths: [
      'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
      'M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    ],
  },
  {
    label: '+44 1234567890',
    paths: [
      'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    ],
  },
  {
    label: 'info@acme.org',
    paths: [
      'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    ],
  },
];

const fields = [
  { id: 'name', type: 'text', label: 'Full Name', autoComplete: 'name' },
  { id: 'email', type: 'email', label: 'Email', autoComplete: 'email' },
  { id: 'tel', type: 'tel', label: 'Telephone Number', autoComplete: 'tel' },
];

const inputClass =
  'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 font-medium text-gray-800 transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200';

function ContactUs() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-gray-100 shadow-lg md:grid-cols-2">
        <div className="bg-gradient-to-br from-orange-50 to-gray-100 p-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-800 sm:text-4xl">Get in touch</h1>
          <p className="mt-2 text-lg font-medium text-gray-600">Fill in the form to start a conversation</p>

          <ul className="mt-8 space-y-5">
            {contactItems.map(({ label, paths }) => (
              <li key={label} className="flex items-center gap-4 text-gray-700">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-orange-700"
                    aria-hidden="true"
                  >
                    {paths.map((d) => (
                      <path key={d} d={d} />
                    ))}
                  </svg>
                </span>
                <span className="font-semibold tracking-wide">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <form className="flex flex-col justify-center gap-4 bg-white p-8" onSubmit={(e) => e.preventDefault()}>
          {fields.map(({ id, type, label, autoComplete }) => (
            <div key={id}>
              <label htmlFor={id} className="sr-only">
                {label}
              </label>
              <input
                type={type}
                name={id}
                id={id}
                placeholder={label}
                autoComplete={autoComplete}
                className={inputClass}
              />
            </div>
          ))}

          <button
            type="submit"
            className="rounded-lg bg-orange-700 px-6 py-3 font-bold text-white transition duration-300 ease-in-out hover:bg-orange-600 md:w-32"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs

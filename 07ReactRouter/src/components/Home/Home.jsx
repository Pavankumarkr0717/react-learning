import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <section className="grid items-center gap-10 py-12 sm:py-20 md:grid-cols-2">
        <div className="flex justify-center">
          <img className="w-56 drop-shadow-xl sm:w-80" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="Remote preview" />
        </div>

        <div className="space-y-6 text-center md:text-right">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Download Now
            <span className="block text-orange-700">Lorem Ipsum</span>
          </h1>
          <p className="ml-auto max-w-md text-gray-600">
            Get the app and take control with a clean, fast and simple experience.
          </p>
          <Link
            className="inline-flex items-center rounded-lg bg-orange-700 px-6 py-3 font-medium text-white shadow-md transition hover:bg-orange-800"
            to="/"
          >
            <svg fill="white" width="24" height="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
            </svg>
            <span className="ml-2">Download now</span>
          </Link>
        </div>
      </section>

      <section className="grid place-items-center pb-16">
        <img className="w-40 sm:w-72" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="Remote" />
        <h2 className="mt-10 text-center text-2xl font-medium text-gray-900 sm:text-4xl">Lorem Ipsum Yojo</h2>
      </section>
    </div>
  );
}

export default Home

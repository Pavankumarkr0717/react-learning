export default function About() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-8 md:flex md:items-center md:gap-10 md:space-y-0 lg:gap-12">
          <div className="md:w-5/12">
            <img
              className="rounded-2xl shadow-lg"
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="Team working on a startup"
            />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl font-bold text-gray-900 md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
              accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
              aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-4">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
              Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

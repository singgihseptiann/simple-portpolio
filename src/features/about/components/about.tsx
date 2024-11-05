import TitleSection from "@/components/title.section";

const About: React.FC = () => {
  return (
    <div className="flex flex-col-reverse items-start md:flex-row md:items-center">
      <div className="flex-1 md:pr-4">
        <TitleSection title="About" />
        <h1 className="text-2xl font-bold text-gray-800 md:text-4xl dark:text-white">
          Singgih Septian Nugraha
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, debitis
          praesentium est totam accusamus eos, id magnam adipisci ipsa officia
          deleniti quidem. Quidem temporibus accusamus hic. Porro deserunt cum
          doloremque natus id similique blanditiis, eveniet rerum assumenda!
          Vitae odio corrupti harum eius sunt totam ut incidunt accusantium
          autem! Temporibus excepturi recusandae at iste ab. Vero praesentium
          vitae sunt ea repudiandae consectetur error enim in ratione, mollitia
          non autem odio voluptatibus perspiciatis laboriosam? Omnis veritatis,
          dolore reiciendis eos delectus temporibus velit quis iste dicta
          eligendi nobis incidunt tempora quam cum minima maxime nihil nam.
          Quis, harum saepe veniam officiis culpa aperiam.
        </p>
      </div>
      <img
        src="https://via.placeholder.com/150"
        alt="Descriptive Alt Text"
        className="mb-4 h-auto w-full rounded-md md:mb-0 md:w-1/4"
      />
    </div>
  );
};

export default About;

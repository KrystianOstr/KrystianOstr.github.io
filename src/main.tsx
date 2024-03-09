import ReactDOM from "react-dom/client";
import "./index.css";

interface Experience {
  description: string;
  year: number;
}

interface Cv {
  photo: string;
  name: string;
  lastName: string;
  position: string;
  experience: Experience[];
  education: string[];
}

const cvData: Cv = {
  photo: `https://placehold.co/400x400?text=KO`,
  name: "Krystian",
  lastName: "Ostr",
  position: "Developer",
  experience: [
    {
      description:
        "Lorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem loremLorem lorem",
      year: 2000,
    },
    {
      description:
        "Ipsum ipsumIpsum psum ipsumIpsum ipsumIpsum ipsumIpsum ipsumIpsum ",
      year: 2005,
    },
  ],
  education: ["firstClass", "secondClass", "thirdClass"],
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <main className="mt-6  grid grid-cols-3  gap-4 text-center">
    <header className="text-5xl font-bold text-center mb-12 col-span-3">{`CV ${cvData.name} ${cvData.lastName}`}</header>
    <aside className="text-4xl grid justify-items-center ">
      <h2 className="font-semibold">Personal data</h2>
      <img
        className="rounded-full w-60 my-10"
        src={cvData.photo}
        alt="myPhoto"
      />
      <p className="text-xl font-semibold">{`${cvData.name} ${cvData.lastName}`}</p>
      <p className="text-xl font-medium">{cvData.position}</p>
    </aside>

    <section className="col-span-2">
      <h2 className="text-2xl font-semibold pt-8">Experience</h2>
      <ul className="p-4">
        {cvData.experience.map((item) => {
          return (
            <li key={item.description}>
              <strong>{item.year}</strong> - {item.description}
            </li>
          );
        })}
      </ul>
      <h2 className="text-2xl font-semibold pt-8">Education</h2>
      <ul className="p-4">
        {cvData.education.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </section>
  </main>
);

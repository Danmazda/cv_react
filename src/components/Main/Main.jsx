import { projectsObj } from "../Project/objects";
import { Project } from "../Project/Project";

export const Main = (props) => {
  return (
    <main>
      <section
        id="introduction"
        className=" container mx-auto h-screen bg-slate-600"
      >
        <h1>Danilo Procópio</h1>
        <p>FullStack Web developer</p>
      </section>

      <section
        id="portfolio"
        className="container flex flex-wrap p-4 bg-slate-400 mx-auto h-screen"
      >
        <h2 className="basis-full">Projects</h2>
        {projectsObj.map((project) => (
          <Project props={{ ...project }}></Project>
        ))}
      </section>
    </main>
  );
};

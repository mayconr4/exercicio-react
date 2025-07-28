import { useEffect } from "react";

export default function ClassicRock() {
  useEffect(() => {
    document.title = "ClassickRock | Meu App React";
  }, []);

  return (
    <section>
      <h2>Classic Rock 👌</h2>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ut sint
        pariatur, laudantium error quasi aspernatur reiciendis accusamus tempore
        ab maiores rerum voluptatibus earum exercitationem quam vero eos
        veritatis nam?
      </p>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ut sint
        pariatur, laudantium error quasi aspernatur reiciendis accusamus tempore
        ab maiores rerum voluptatibus earum exercitationem quam vero eos
        veritatis nam?
      </p>
    </section>
  );
}

import { useEffect } from "react";

export default function RockProgressivo() {
  useEffect(() => {
    document.title = "RockProgressivo | Meu App React";
  }, []);
  return (
    <section>
      <h2>Rock Progressivo ✌️</h2>

      <p>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          quisquam illo vitae amet laborum, ex corporis nesciunt ipsam placeat
          porro debitis natus tempora, accusantium tempore. Eius optio enim
          incidunt minima!
        </span>
        <span>
          Sequi expedita natus doloribus repellendus pariatur tempora culpa
          excepturi eligendi quis aliquam laudantium autem, reprehenderit
          recusandae minus, eum illo consequuntur eaque. Iste laborum est, quasi
          nisi obcaecati quidem dolor molestiae.
        </span>
      </p>
    </section>
  );
}

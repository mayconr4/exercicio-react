import { useEffect } from "react";

export default function HeavyMetal() {
  useEffect(() => {
    document.title = "HeavyMetal | Meu App React";
  }, []);
  return (
    <section>
      <h2>Heavy Metal 😤</h2>

      <p>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ut
          nam rerum quas quia, architecto dolore atque, asperiores quis vel
          consequuntur vero. Neque labore recusandae ex totam nostrum. Quasi,
          est!
        </span>
        <span>
          Ut, eaque perferendis aliquid officia nesciunt, quasi aliquam
          necessitatibus itaque minima cupiditate deserunt fugiat magni vel
          atque distinctio illum quod? Alias harum ut praesentium. Accusantium
          consectetur repudiandae ea perferendis reprehenderit.
        </span>
      </p>
    </section>
  );
}

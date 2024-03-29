import s from "./TestimonialsSection.module.css";

import testimonialsPhoto from "../../../assets/images/main_comp_testimonials.png"

const TestimonialsSection = () => {
  return (
    <div className={s.container}>
      <ul className={s.list}>
        <li>
          <h2>Testimonials</h2>
        </li>
        <li className={s.text}>
          <p>
            Welcome to our Testimonials section, where our users share their
            experiences firsthand. Discover the stories behind our those who
            moved to US via U4U program
          </p>
        </li>
        <li className={s.photo}>
          <img src={testimonialsPhoto} alt="photo3" />
        </li>
      </ul>
    </div>
  );
};

export default TestimonialsSection;

import s from "./DocumentEducational.module.css";
import NavBtnsPages from "../../../UI/NavBtnsPages/NavBtnsPages";

const DocumentEducational = () => {
  return (
    <div className={s.container}>
      <a href="https://usahello.org/education/learn-english-language/esl-online-courses-apps/">
        <p className={s.text_link}>
          A complete list of free English classes online and other helpful
          resources{" "}
        </p>
      </a>
      <ul className={s.list}>
        <li className={s.item}>
          <h3>English Language Courses</h3>
          <p>
            Many community colleges and adult education centers across the
            United States offer free or low-cost English as a Second Language
            (ESL) courses. Organizations such as the Literacy Councils
            (proliteracy.org) and local libraries often provide language
            learning resources and classes. Additionally, websites like USA
            Learns (usalearns.org) offer free online English courses designed
            for adults.
          </p>
        </li>
        <li className={s.item}>
          <h3>Enrolling Children in School</h3>
          <p>
            Children in the USA are entitled to free public education from
            kindergarten through 12th grade. To enroll your child, contact the
            local school district office in your area of residence. You will
            need to provide proof of your child's age, usually through a birth
            certificate or passport, proof of residency (such as a utility bill
            or lease agreement), and vaccination records. The U.S. Department of
            Education's website (ed.gov) has resources and information about the
            public education system.
          </p>
        </li>
        <li className={s.item}>
          <h3>Applying for University</h3>
          <p>
            For higher education, universities and community colleges offer
            various programs for international students. Start by visiting the
            College Board (collegeboard.org) for information on college
            applications, financial aid, and scholarship opportunities. For
            Ukrainians seeking financial assistance, the Institute of
            International Education (iie.org) provides resources and support
            programs for international students, including emergency funding and
            scholarships.
          </p>
        </li>
        <li className={s.item}>
          <h3>Additional Resources</h3>
          <p>
            Educational advising centers, like those affiliated with
            EducationUSA (educationusa.state.gov), offer guidance to
            international students on applying to U.S. colleges and
            universities, including advice on selecting schools, preparing
            applications, and understanding the U.S. educational system.
          </p>
          <p className={s.text_bottom}>
            There are over 1,200 community and junior college campuses across
            the United States and nearly all of them offer some sort of ESL
            classes. With the help of scholarships from a college, government or
            private institutions, you may even be able to study English for free
            at these colleges.
          </p>
        </li>
        <p className={s.text_more}>For more information you can visit our Telegram channel.</p>
      </ul>
      <NavBtnsPages/>
    </div>
  );
};

export default DocumentEducational;

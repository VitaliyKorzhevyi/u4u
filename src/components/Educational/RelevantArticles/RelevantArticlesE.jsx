import s from "./RelevantArticlesE.module.css";

const RelevantArticlesE = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Relevant Articles:</h2>
      <div className={s.cont}>
        <ul className={s.list}>
          <li>
            <a className={s.text} href="https://www.betterteam.com/job-boards">
              Job Boards
            </a>
          </li>
          <li>
            <a
              className={s.text}
              href="https://www.esldirectory.com/esl-program-search/usa/"
            >
              A national directory of English Second Language schools and
              organizations
            </a>
          </li>

          <li>
            <a
              className={s.text}
              href="https://www.fmcsa.dot.gov/registration/commercial-drivers-license/how-do-i-get-commercial-drivers-license"
            >
              Getting your CDL in the USA
            </a>
          </li>
          <li>
            <a
              className={s.text}
              href="https://www.adeccojobsforukraine.com/"
            >
              A job portal to help Ukrainians find work. 
            </a>
          </li>
          <li>
            <a
              className={s.text}
              href="https://www.higheredimmigrationportal.org/policy/expanding-refugee-access-to-in-state-tuition/"
            >
              A state by state guide on college tuition. 
            </a>
          </li>
          <li>
            <p >Want to get into hair, makeup, and other various beauty vocations?</p>
            <a
              className={s.text}
              href="https://www.nextinsurance.com/blog/cosmetology-license/"
            >
              How to
            </a>
          </li>
          <li>
            <a
              className={s.text}
              href="https://www.associatedhairprofessionals.com/cosmetologist-state-board-info"
            >
             State regulations
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RelevantArticlesE;

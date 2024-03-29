import s from "./RelevantArticlesC.module.css";

const RelevantArticlesC = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Relevant Articles:</h2>
      <div className={s.cont}>
        <ul className={s.list}>
          <li>
            <a
              className={s.text}
              href="https://www.patriotsoftware.com/blog/accounting/average-cost-living-by-state/"
            >
              Cost of living by state
            </a>
          </li>
          <li>
            <a
              className={s.text}
              href="https://www.uscis.gov/humanitarian/temporary-protected-status/TPS-Ukraine"
            >
              Temporary Protected Status Designated Country: Ukraine
            </a>
          </li>
          <li>
            <a
              className={s.text}
              href="https://www.cbp.gov/travel/us-citizens/advance-parole"
            >
              Advance Parole
            </a>
          </li>
          <li>
            <a
              className={s.text}
              href="https://www.boundless.com/immigration-resources/the-h-1b-visa-explained/"
            >
              H1B, Explained
            </a>
          </li>
          <li>
            <a className={s.text} href="https://www.usa.gov/green-card-lottery">
              Green Card lottery
            </a>
          </li>
          <li>
            <a
              className={s.text}
              href="https://ukrainetaskforce.org/can-you-travel-outside-the-u-s-on-humanitarian-parole-uniting-for-ukraine/"
            >
              Traveling outside the US on humanitarian parole
            </a>
          </li>

          <li>
            <a
              className={s.text}
              href="https://www.uscis.gov/green-card/green-card-eligibility-categories"
            >
              Green card eligibility categories
            </a>
          </li>
          <li>
            <a
              className={s.text}
              href="https://www.uscis.gov/scams-fraud-and-misconduct/avoid-scams/find-legal-services#:~:text=To%20help%20you%20find%20an,free%20or%20for%20little%20cost."
            >
              Looking for legal services in the US? Here is some guidance from
              the US govt
            </a>
          </li>

          <li>
            <a
              className={s.text}
              href="https://homeabroadinc.com/moving-to-the-usa-the-ultimate-guide-for-newcomers/"
            >
              A guide to a new resident of the USA
            </a>
          </li>

          <li>
            <a
              className={s.text}
              href="https://www.tsa.gov/real-id#:~:text=You%20must%20present%20an%20acceptable,your%20identity%20cannot%20be%20verified"
            >
              Documents needed to fly within the US
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RelevantArticlesC;

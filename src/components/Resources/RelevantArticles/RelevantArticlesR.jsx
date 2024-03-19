import s from "./RelevantArticlesR.module.css";

const RelevantArticlesR = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Relevant Articles:</h2>
      <div className={s.cont}>
        <ul className={s.list}>
          <li>
            <a
              className={s.text}
              href="https://www.forbes.com/advisor/health-insurance/best-health-insurance-companies/"
            >
              Another perspective on the best healthcare marketplace plans
            </a>
          </li>
          <li>
            <a
              className={s.text}
              href="https://visaguide.world/international-health-insurance/us/"
            >
              A comprehensive guide to the health insurance system in the US
            </a>
          </li>
          <li className={s.item}>
            <p>Support Groups for Immigrants:</p>
          </li>
          <li>
            <a
              className={s.text}
              href="https://www.acf.hhs.gov/orr/grant-funding/key-state-contacts"
            >
              Each state has a refugee coordinator and here is a directory with
              contact info
            </a>
          </li>
          <li>
            <a
              className={s.text}
              href="https://www.stilt.com/blog/2020/07/what-does-a-work-permit-allow-you-to-do/"
            >
              General guidance on work permits or EAD
            </a>
          </li>
          <li>
            <a
              className={s.text}
              href="https://www.youtube.com/watch?v=5pmRUGU5q9g&ab_channel=KatefromtheUSA"
            >
              How to I-765 work auth form
            </a>
          </li>

          <li>
            <a
              className={s.text}
              href="https://visitukraine.today/blog/933/uniting-for-ukraine-u4u-in-the-usa-how-to-send-a-request-to-extend-a-travel-permit"
            >
              Uniting for Ukraine travel authorization extension
            </a>
          </li>
          <li>
            <a
              className={s.text}
              href="https://www.bls.gov/regions/mid-atlantic/data/averageretailfoodandenergyprices_usandmidwest_table.htm"
            >
              Average cost of standard food products & energy in US per region
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RelevantArticlesR;

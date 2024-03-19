import NavBtnsPages from "../../../UI/NavBtnsPages/NavBtnsPages";
import s from "./DocumentResources.module.css";

const DocumentResources = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Document</h2>
      <ul className={s.list_text}>
        <li>
          For Ukrainians who have recently arrived in the USA, obtaining the
          necessary documentation is a crucial step toward settling in and
          accessing services. Here are the guidelines on how to obtain key
          documents:
        </li>
        <li>
          Upon arrival in the USA, one of the first steps for Ukrainian
          nationals is to apply for a <span>Social Security Number (SSN)</span>,
          which is essential for employment, opening a bank account, and
          accessing government services. You can apply for an SSN at your local
          Social Security office; find the nearest one by visiting the Social
          Security Administration's website at ssa.gov. To apply, you'll need to
          provide specific documentation, including your passport and
          immigration documents.
        </li>
        <li>
          Another critical document is the{" "}
          <span>Employment Authori zation Document </span>
          (EAD), which grants you the right to work in the USA. To apply for an
          EAD, you need to file Form I-765 with U.S. Citizenship and Immigration
          Services (USCIS) either online or by mail. Detailed instructions and
          eligibility criteria can be found on the USCIS website at uscis.gov.
        </li>
        <li>
          In addition to the SSN and EAD, enrolling in{" "}
          <span>health insurance</span>, registering for a driver's license at
          your local Department of Motor Vehicles (DMV), and understanding your
          tax obligations are important steps. Each state has different rules
          for driver's licenses and health insurance, so it's crucial to check
          the official state websites or visit local offices for guidance.
        </li>
        <li>
          Remember, while navigating these processes, numerous nonprofit
          organizations and community groups offer assistance to Ukrainian
          immigrants. Don't hesitate to reach out to them for help with
          applications and finding the necessary resources.
        </li>
      </ul>
      <ul className={s.list_urls}>
        <li>
          <a href="https://www.uscis.gov/green-card/green-card-processes-and-procedures/employment-authorization-document">
            Employment Authorization Document
          </a>
        </li>
        <li>
          <a href="https://www.ssa.gov/forms/ss-5.pdf">SSN</a>
        </li>
        <li>
          <a href="0">How to get Driver’s License in the US</a>
        </li>{" "}
      </ul>
      <p className={s.text_more}>
        For more information you can visit our Telegram channel.
      </p>
      <NavBtnsPages />
    </div>
  );
};

export default DocumentResources;

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
            <a className={s.text} href="https://www.esldirectory.com/esl-program-search/usa/">
            A national directory of English Second Language schools and organizations
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RelevantArticlesE
import NavBtnsPages from "../../../UI/NavBtnsPages/NavBtnsPages";
import s from "./DocumentCommunity.module.css";

const DocumentCommunity = () => {
  return (
    <div className={s.container}>
      <p className={`${s.list_text} ${s.text_first}`}>
        The cost of living in the United States varies significantly across
        different states and cities, influenced by factors such as housing,
        healthcare, groceries, transportation, and taxes. For immigrants,
        finding a state with a welcoming community, strong job opportunities,
        affordable living costs, and supportive services is crucial. Here's a
        brief overview of the cost of living in various states and some of the
        best states for immigrants based on these criteria:
      </p>
      <h3>States with Lower Cost of Living:</h3>
      <ul className={s.list}>
        <li>
          <h4>Mississippi:</h4>
          <p className={s.list_text}>
            Known for having the lowest cost of living in the U.S., Mississippi
            offers affordable housing and living expenses, though job
            opportunities in certain sectors may be limited.
          </p>
        </li>
        <li>
          <h4>Arkansas:</h4>
          <p className={s.list_text}>
            Offers low housing costs and overall affordability, with a growing
            job market in cities like Little Rock.
          </p>
        </li>
        <li>
          <h4>Oklahoma:</h4>
          <p className={s.list_text}>
            Has affordable living costs, particularly in terms of housing, and a
            diverse economy with opportunities in sectors like energy and
            aviation.
          </p>
        </li>
        <li>
          <h4 className={s.sub_title_accent}>
            States with Higher Cost of Living but Great Opportunities for
            Immigrants: <br/><span className={s.text_accent}>California:</span>
          </h4>
          <p className={s.list_text}>
            While it has one of the highest costs of living, especially in
            cities like San Francisco and Los Angeles, California is known for
            its diverse population, strong job market in technology,
            entertainment, and agriculture, and supportive policies for
            immigrants.
          </p>
        </li>
        <li>
          <h4>New York:</h4>
          <p className={s.list_text}>
            Offers a vast array of cultural experiences and job opportunities,
            especially in New York City, but comes with high living costs. New
            York State provides numerous resources for immigrants, including
            legal assistance and language programs.
          </p>
        </li>
        <li>
          <h4>New Jersey:</h4>
          <p className={s.list_text}>
            Located near New York City and Philadelphia, New Jersey offers a
            high standard of living, excellent public schools, and a diverse
            population, making it attractive for immigrants, though it also has
            high living costs.
          </p>
        </li>
        <li>
          <h4 className={s.sub_title_accent}>Best States for Immigrants:<br/> Texas:</h4>
          <p className={s.list_text}>
            With cities like Houston, Dallas, and Austin, Texas is known for its
            strong job market, affordable living, and diverse communities. Texas
            has a significant immigrant population and offers a variety of
            resources and community support.
          </p>
        </li>
        <li>
          <h4>Florida:</h4>
          <p className={s.list_text}>
            Offers a warm climate, no state income tax, and a growing job
            market, particularly in tourism, healthcare, and agriculture.
            Florida's diverse communities and immigrant-friendly services make
            it a popular choice.
          </p>
        </li>
        <li>
          <h4>Illinois:</h4>
          <p className={s.list_text}>
            Home to Chicago, a city with a rich history of immigration and a
            diverse population, Illinois offers robust job opportunities,
            especially in manufacturing, services, and tech. Illinois provides
            various immigrant support services, though the cost of living in
            Chicago is higher than in other parts of the state.
          </p>
          <p className={`${s.list_text} ${s.text_two}`}>
            When considering moving to a new state, it's important for
            immigrants to research not only the cost of living but also
            community resources, job opportunities, and state and local policies
            regarding immigration. Websites like the U.S. Bureau of Economic
            Analysis <a className={s.text_url} href="https://www.bea.gov/">(bea.gov)</a> and local immigrant support organizations can
            provide valuable information for making an informed decision.
          </p>
        </li>
      </ul>

      <p className={s.text_more}>For more information you can visit our Telegram channel.</p>
      <NavBtnsPages/>
    </div>
  );
};

export default DocumentCommunity;

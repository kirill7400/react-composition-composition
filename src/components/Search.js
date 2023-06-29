/**
 * Данный компонент хранит все остальные компоненты для страницы поиска
 * @returns {JSX.Element}
 * @constructor
 */

import News from "./News";
import SearchComponent from "./SearchComponent";
import Bottom from "./Bottom";

function Search() {
  let tabs, newsItems, searchItems, bottomItems

  return(
    <div>
      <News tabs={ tabs } newsItems={ newsItems }/>
      <SearchComponent items={ searchItems }/>
      <Bottom bottomItems={ bottomItems }/>
    </div>
  )
}

export default Search
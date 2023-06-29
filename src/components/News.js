/**
 * Компонент принимает список табов и список новостей для табов.
 * Список новостей передаётся как 1 объект с id таба для отображения новостей под конкретным табом
 * @param {tabs, newsItems}
 * @returns {JSX.Element}
 * @constructor
 */

import Currency from "./Currency";

function News({ tabs, newsItems }) {
  return(
    <>
      <div>content</div>
      <Currency/>
    </>
  )
}

export default News
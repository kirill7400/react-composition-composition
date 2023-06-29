/**
 * Компонент для отображения элементов под Яндекс поиском.
 * На вход получает список всех элементов для отображения, в списке есть обязательный параметр type для того что бы понять, какой контент будет в элементе.
 * @param bottomItems - список элементов для рендера
 * @returns {JSX.Element}
 * @constructor
 */

import Weather from "./Weather";
import List from "./List";
import Text from "./Text";

function Bottom({ bottomItems }) {
  let items = bottomItems.map(item => {
    switch (item.type) {
      case 'weather':
        return(<Weather/>)
      case 'list':
        return (<List list={ item.list } imgHeader={ item.imgHeader } imgList={ item.imgList }/>)
      default:
        return(<Text text={ item.text } imgHeader={ item.imgHeader }/>)
    }
  })

  return(
    <div>
      { items }
    </div>
  )
}

export default Bottom
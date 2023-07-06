import sortByViews from "../sortByViews";
import { nanoid } from "nanoid";
import Video from "../Video";
import Article from "../Article";
import PropTypes from 'prop-types'

export default function List(props) {
  return props.list.map(item => {
    let HOCcomponent;
    switch (item.type) {
      case 'video':
        HOCcomponent = sortByViews(Video);
        return (
          <HOCcomponent key={nanoid()} {...item} />
        );
      case 'article':
        HOCcomponent = sortByViews(Article)
        return (
          <HOCcomponent key={nanoid()} {...item} />
        );
      default:
        return (
          <div className="item item-article">
            <h3 className='error'>Произошла неизвестная ошибка...</h3>
          </div>
        )
    }
  });
};

List.propTypes = {
  list: PropTypes.array.isRequired
}
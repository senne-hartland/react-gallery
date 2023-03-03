import {ShowSuggestionsProp} from './types'

const ShowSuggestions = ({inputRef, historyText}: ShowSuggestionsProp) => {
    return <> <ul className='search__section__ul' >{historyText.map(hist => {
      if(inputRef.current) {
          return <li className='search__section__item' key={hist}>{hist}</li>
       } else {
        return <li key=''></li>
       }
      }
    )}
  </ul>
</>
}

export default ShowSuggestions
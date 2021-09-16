import SearchResults from '../component/searchResults';

export default function searchResults(props) {
    return(
        <div>
            <SearchResults latLng={props.latLng} />
        </div>
    )
}
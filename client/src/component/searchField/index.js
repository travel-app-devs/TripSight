import style from './style.module.css';
import React, { useEffect, useState, useContext } from 'react';
import PlaceContext from '../../context/PlaceContext';
import { get } from 'lodash';


const SearchField = () => {
    const backgroundTwo = window.location.pathname === '/' ? style.heroSearchResultButton : style.searchFieldResults;
    const [selectedPrediction, setSelectedPrediction] = useState({})
    const [searchValue, setSearchValue] = useState("");
    const thePlace = useContext(PlaceContext)
    const [predictions, setPredictions] = useState([])
    const handleChange = (event) => {
        event.preventDefault()
        let searchValueInput = event.target.value;
        setSearchValue(searchValueInput);
    }
    const googleAutocomplete = async text =>
        new Promise((resolve, reject) => {
            if (!text) {
                return reject("Need valid text input")
            }

            try {
                new window.google.maps.places.AutocompleteService().getPlacePredictions(
                    { input: text },
                    resolve
                )
            } catch (e) {
                reject(e)
            }
        })

    // useEffect(() => {
    //     const handleDebounce = setTimeout(async () => {
    //         try {
    //             if (!searchReq) {
    //                 return
    //             }

    //             const nextPredictions = await googleAutocomplete(searchValue)
    //             setPredictions(nextPredictions)
    //         } catch (e) {
    //             console.error(e)
    //         }
    //     }, 400)

    //     return () => {
    //         clearTimeout(handleDebounce)
    //     }
    // }, [searchValue, 400]);

    const handlePredictionSelection = (e, prediction) => {
        e.preventDefault();
        setSelectedPrediction(prediction?.structured_formatting?.main_text);
        setSearchValue(prediction?.structured_formatting?.main_text);
        thePlace.setPlace(prediction?.structured_formatting?.main_text);
        thePlace.getPlaceLatLng(prediction?.structured_formatting?.main_text)
        // setSearchReq("");
        setPredictions([]); 
    }

    const handleSearch = async () => {
        console.log(searchValue);
        // setSearchReq(searchValue);
        // console.log(searchReq);
        try {
            const nextPredictions = await googleAutocomplete(searchValue)
            setPredictions(nextPredictions)
        } catch (e) {
            console.error(e)
        }
    }



    return (
        <div className={style.heroForm}>
            <form>
                <input
                    id={style.heroSearchForm}
                    name="predictionSearch"
                    placeholder="Find A Place!"
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    autocomplete="off"
                />
                <button id={style.findPlaceBtn} onClick={(e) => {
                    e.preventDefault();
                    handleSearch();
                    }}>▶</button>
                <ul className={`${backgroundTwo}`}>
                    {predictions?.map(prediction => (
                        <li key={prediction?.place_id}>
                            <button 
                                onClick={e => {
                                    handlePredictionSelection(e, prediction);
                                }}
                                onKeyDown={e => handlePredictionSelection(e, prediction)}
                            >
                                {prediction?.structured_formatting?.main_text || "Not found"}
                            </button>
                        </li>
                    ))}
                </ul>
            </form>
        </div>
    )
}

export default SearchField;
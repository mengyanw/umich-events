import './EventStarButton.css'
import { useMemo } from 'react';

const EventStarButton = (props) => {
    // this is the same as
    // const tossedOverIsStarred = props.tossedOverIsStarred;
    // const  handMeDownSetStarStateFunction = props.t handMeDownSetStarStateFunction;

    // These props are part of the parent component's state -- that means if the
    // value changes, React sees it as a "state change" and will rebuild every
    // component using that state, based on the current values.
    const { tossedOverIsStarred, handMeDownSetStarStateFunction, setStarredEvents, title} = props;

    const getStarMessage = () => {
        if (tossedOverIsStarred) {
            return 'U GOT STARD ' + Date.now();
        } else {
            return 'ADD STAR ' + Date.now();
        }
    };

    const starButtonHandler = (e) => {
        setStarredEvents((previousList) => {
            // If tossedOverIsStarred is TRUE, we are about to un-star it.
            // remove the item from the list.
            if (tossedOverIsStarred) {
                return previousList.filter((value) => value !== title);
            } else {
                // Would also work
                // previousList.push(title);
                // return previousList
                return [...previousList, title];
            }
        });
        handMeDownSetStarStateFunction((previousValue) => {
            return !previousValue;
        });
    };

    // This function isn't currently used -- it's the approach
    // that would stop unnecessary re-rendering of EVERY button
    // after starring one event.
    // useMemo is advanced... you won't need to know this for anything
    // you're graded on, but thought it might be of interest.
    // to use this instead change this in return()-
    //<div>{getStarMessage()}</div>
    //to
    //<div>️{theStarMessage}</div>
    // (no parentheses as it the 'useMemo' already returns the
    // value needed )
    const theStarMessage = useMemo(() => {
        if (tossedOverIsStarred) {
            return 'U GOT STAR' + Date.now();
        } else {
            return 'add star' + Date.now();
        }
    }, [tossedOverIsStarred])
    // In the line above, we're saying "don't re-compute theStarMessage"
    // unless `tossedOverIsStarred` in THIS component has changed value.

    return (
      <button onClick={starButtonHandler} className={tossedOverIsStarred ? 'starred' : 'not-starred'}>
          ⭐️<div>{getStarMessage()}</div>
      </button>
    );
}

export default EventStarButton;
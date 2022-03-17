import './EventStarButton.css'

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

    return (
      <button onClick={starButtonHandler} className={tossedOverIsStarred ? 'starred' : 'not-starred'}>
          ⭐️<div>{getStarMessage()}</div>
      </button>
    );
}

export default EventStarButton;
import './StarredEvents.css'

const StarredEvents = (props) => {
    // This is equivalent to:
    // const starredList = props.starredList;
    console.log('props in starred events', props);
    const { starredList } = props;

    const starredEventsOutput = () => {
        if (starredList.length === 0) {
            return 'No starred events';
        } else {

            return starredList.join(', ')
        }
    }

    return (
        <div className="event starred-events">
            <h2>STARRED EVENTS</h2>
            {starredEventsOutput()}
        </div>)
}

export default StarredEvents;
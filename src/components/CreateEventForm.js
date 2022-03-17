import './CreateEventForm.css'
import {useState} from "react";

const CreateEventForm = (props) => {
    const [theTitle, setTheTitle] = useState('');
    const [theDescription, setTheDescription] = useState('');
    const [theDate, setTheDate] = useState('');
    const [theStartTime, setTheStartTime] = useState('');
    const [theEndTime, setTheEndTime] = useState('');

    const [formData, setFormData] = useState({});
    // formData.theTitle
    // formData.theDescription



    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if (!theTitle || !theDescription || !theDate || !theStartTime || !theEndTime) {
            setMessage('No empty values allowed');
            setStatus('error')
        } else {
            setMessage(`You added the event ${theTitle}!`);
            setTimeout(() => {
                setMessage('');
            }, 4000);
            console.log('the start', theStartTime)
            props.setUmichEvents((currentEvents) => {
                return [
                    ...currentEvents,
                    {
                        event_title: theTitle,
                        description: theDescription,
                        date_start: theDate,
                        time_start: `${theStartTime}:00`,
                        time_end: `${theEndTime}:00`,
                    },
                ];
            });

            setStatus('success')
            setTheTitle('');
            setTheDescription('');
            setTheDate('');
            setTheStartTime('');
            setTheEndTime('');
        }
    }

    return (
        <div className='create-new-event'>
            <h2>Create New Event</h2>
            <div className={'message ' + status}>{message}</div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title</label>
                    <input
                        type='text'
                        value={theTitle}
                        onChange={(e) => setTheTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        onChange={(e) => setTheDescription(e.target.value)}
                        value={theDescription}
                    >
                    </textarea>

                </div>
                <div>
                    <label>Date</label>
                    <input
                        type='date'
                        value={theDate}
                        onChange={(e) => setTheDate(e.target.value)}
                    />
                </div>
                <div>
                    <label>Start Time</label>
                    <input
                        type='time'
                        value={theStartTime}
                        onChange={(e) => setTheStartTime(e.target.value)}
                    />
                </div>
                <div>
                    <label>End Time</label>
                    <input
                        type='time'
                        value={theEndTime}
                        onChange={(e) => setTheEndTime(e.target.value)}
                    />
                </div>
                <div>
                    <button type='submit'>Create Event</button>
                </div>
            </form>
        </div>
    );
}

export default CreateEventForm;
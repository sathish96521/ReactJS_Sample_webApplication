import { useState } from 'react';
import LinkData from './Link';
import User from './SampleClass';
import Comment from '../useState/Comment';
import Loading from '../useState/Loading';
import UserForm from '../useState/UserForm';
import Users from '../useState/Users';
import Theme from '../useState/Theme';
import SampEffect from '../useEffect/SampEffect';
import Todos from '../useEffect/todos';
import UserDashboard from '../useContextHook/UsersDashboard';

const NishaSingla = () => {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <Todos />

            <div className="App">
                <h1>Counter {counter}</h1>
                <button onClick={() => setCounter(value => value + 1)}>+</button>
                {counter < 5 && <SampEffect counter={counter} />}
            </div>
            <Theme />
            <Users />
            <UserForm />
            <Loading />
            <Comment />

            <LinkData href='sathish 1'
                title='React data 1'
                content='Content 1'
            />

            <LinkData href='sathish 2'
                title='React data 12'
                content='Content 2'
            />

            <LinkData href='sathish 3'
                title='React data 3'
                content='Content 3'
            />

            <User user="Sathish kumar" />
            <UserDashboard />

        </>
    )
}

export default NishaSingla;
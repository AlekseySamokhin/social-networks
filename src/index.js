import state, {subscribe} from './redux/state';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (state) => {
    root.render(
        <App
            updateNewMessageText={store.updateNewMessageText.bind(store)}
            updateNewPostText={store.updateNewPostText.bind(store)}
            addPost={store.addPost.bind(store)}
            addMessage={store.addMessage.bind(store)}
            state={state}/>
    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
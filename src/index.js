import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (state) => {
    root.render(<App dispatch={store.dispatch.bind(store)} store={store} state={state}/>);
};

rerenderEntireTree(store.getState());


store.subscribe(() => {
    const state = store.getState();
    rerenderEntireTree(state)
});
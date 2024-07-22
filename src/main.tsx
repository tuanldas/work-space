import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './store';
import AppRouters from './routing/AppRouters.tsx';
import './i18n'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                    <AppRouters/>
                    <ReactQueryDevtools initialIsOpen={true}/>
                </QueryClientProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
);

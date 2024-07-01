import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {createRoot} from 'react-dom/client';
import {MetronicI18nProvider} from './_metronic/i18n/Metronici18n';
import './_metronic/assets/sass/style.react.scss';
import './_metronic/assets/fonticon/fonticon.css';
import './_metronic/assets/keenicons/duotone/style.css';
import './_metronic/assets/keenicons/outline/style.css';
import './_metronic/assets/keenicons/solid/style.css';
import './_metronic/assets/sass/style.scss';
import {Chart, registerables} from 'chart.js';
import {store} from './store';
import {Provider} from 'react-redux';
import {AppRoutes} from './Routers/AppRouters.tsx';

Chart.register(...registerables);
const queryClient = new QueryClient();

const container = document.getElementById('root');
if (container) {
    createRoot(container).render(
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <MetronicI18nProvider>
                    <AppRoutes/>
                </MetronicI18nProvider>
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </Provider>
    );
}

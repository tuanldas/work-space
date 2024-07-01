import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {MetronicI18nProvider} from './_metronic/i18n/Metronici18n';
import './_metronic/assets/sass/style.react.scss';
import './_metronic/assets/fonticon/fonticon.css';
import './_metronic/assets/keenicons/duotone/style.css';
import './_metronic/assets/keenicons/outline/style.css';
import './_metronic/assets/keenicons/solid/style.css';
import './_metronic/assets/sass/style.scss';
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables);
const queryClient = new QueryClient();

const container = document.getElementById('root');
if (container) {
    createRoot(container).render(
        <QueryClientProvider client={queryClient}>
            <MetronicI18nProvider>
                <App/>
            </MetronicI18nProvider>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
}

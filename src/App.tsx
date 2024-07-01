import {Suspense} from 'react';
import {LayoutProvider, LayoutSplashScreen} from './_metronic/layout/core';
import {I18nProvider} from './_metronic/i18n/i18nProvider.tsx';
import {ThemeModeProvider} from './_metronic/partials';
import {Outlet} from 'react-router-dom';
import {MasterInit} from './_metronic/layout/MasterInit.tsx';

function App() {

    return (
        <>
            <Suspense fallback={<LayoutSplashScreen/>}>
                <I18nProvider>
                    <LayoutProvider>
                        <ThemeModeProvider>
                            <Outlet/>
                            <MasterInit/>
                        </ThemeModeProvider>
                    </LayoutProvider>
                </I18nProvider>
            </Suspense>
        </>
    );
}

export default App;

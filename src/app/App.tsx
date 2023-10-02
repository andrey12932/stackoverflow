import {classNames} from "shared/lib/classNames/classNames";
import cls from './App.module.scss';
import {Suspense} from "react";
import {AppRouter} from "app/providers/router";
import {Loader} from "shared/ui";
import {Header} from "widgets";

interface AppProps {
    className?: string
}

const App = (props: AppProps) => {
    const {
        className
    } = props;

    return (
        <div className={classNames(cls.App, {}, [className])}>
            <Header />
            <Suspense fallback={<Loader />}>
                <AppRouter />
            </Suspense>
        </div>
    );
};

export default App;
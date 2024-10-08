import {lazy, Suspense} from "react";
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const LazyButton = lazy(() => sleep(2000).then(() => import('./LazyButton')));
    const LazyBUtton2 = lazy(() => sleep(1000).then(() => import('./LazyButton2')));

export default function LazyBasic() {
    return (
        <Suspense fallback={<p>Now Loading...</p>}>
            <LazyButton />
            <LazyBUtton2 />
        </Suspense>
    );
}
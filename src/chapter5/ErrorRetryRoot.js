import {ErrorBoundary} from "react-error-boundary";
import ErrorRetryThrow from "./ErrorRetryThrow";
import ErrorFallback from "./ErrorFallback";

export default function ErrorRetryRoot() {
    const handleFallBack = ({ error, resetErrorBoundary }) => {
        const handleClick = () => resetErrorBoundary();
        return (
            <div>
                <h4>以下のエラーが発生しました。</h4>
                <p>{error.message}</p>
                <button type="button" onClick={handleClick}>
                    Retry
                </button>
            </div>
        );
    }
    const handleReset = () => console.log('Retry!!');

    // return (
    //     <>
    //         <h3>Error Boundaryの基本</h3>
    //         <ErrorBoundary fallbackRender={handleFallBack} onReset={handleReset}>
    //             <ErrorRetryThrow />
    //         </ErrorBoundary>
    //     </>
    // );

    return (
        <div>
            <h3>Error Boundaryの基本</h3>
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleReset}>
                <ErrorRetryThrow/>
            </ErrorBoundary>
        </div>
    );
}
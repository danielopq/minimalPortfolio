// useComponentLoader.ts
import { useState, useEffect, useRef, RefObject } from 'react';

interface UseComponentLoaderResult {
    loading: boolean;
    progress: number;
    componentRef: RefObject<HTMLDivElement>;
}

const useComponentLoader = (): UseComponentLoaderResult => {
    const [loading, setLoading] = useState<boolean>(true);
    const [progress, setProgress] = useState<number>(0);
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const elements = componentRef.current?.querySelectorAll('img, [style*="background-image"]') || [];
        let resourcesLoaded = 0;

        const handleResourceLoad = () => {
            resourcesLoaded += 1;
            const newProgress = (resourcesLoaded / elements.length) * 100;
            setProgress(newProgress);

            if (resourcesLoaded === elements.length) {
                setLoading(false);
                setProgress(100);
            }
        };

        if (elements.length === 0) {
            setLoading(false);
            setProgress(100);
        } else {
            elements.forEach((el) => {
                if (el instanceof HTMLImageElement && el.complete) {
                    handleResourceLoad();
                } else if (el instanceof HTMLImageElement) {
                    el.addEventListener('load', handleResourceLoad);
                    el.addEventListener('error', handleResourceLoad);
                } else {
                    handleResourceLoad(); // Consider background images as loaded
                }
            });
        }

        return () => {
            elements.forEach((el) => {
                if (el instanceof HTMLImageElement) {
                    el.removeEventListener('load', handleResourceLoad);
                    el.removeEventListener('error', handleResourceLoad);
                }
            });
        };
    }, []);

    return { loading, progress, componentRef };
};

export default useComponentLoader;

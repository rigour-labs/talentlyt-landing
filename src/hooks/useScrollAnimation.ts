import { useState, useEffect, useRef } from 'react';

interface Options extends IntersectionObserverInit {
    triggerOnce?: boolean;
}

export function useScrollAnimation(options: Options = { threshold: 0.1, triggerOnce: true }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                if (options.triggerOnce) {
                    observer.unobserve(entry.target);
                }
            } else if (!options.triggerOnce) {
                setIsVisible(false);
            }
        }, options);

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options.threshold, options.root, options.rootMargin, options.triggerOnce]);

    return { ref, isVisible };
}

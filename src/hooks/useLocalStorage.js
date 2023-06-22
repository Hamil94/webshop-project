import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedValue = localStorage.getItem(key);
            setValue(storedValue ? JSON.parse(storedValue) : defaultValue);
        }
    }, [key, defaultValue]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value]);

    return [value, setValue];
};

export default useLocalStorage;

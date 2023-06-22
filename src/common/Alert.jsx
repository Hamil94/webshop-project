import { useEffect } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";

const Alert = ({ alert, handleClose }) => {
    useEffect(() => {
        let timer;
        if (alert?.autoClose) {
            timer = setTimeout(() => {
                handleClose();
            }, 9000);
        }

        return () => {
            clearTimeout(timer); // cleanup on unmount
        };
    }, [alert, handleClose]);

    if (!alert?.active) {
        return null; // Don't render anything if alert is not active
    }

    return (
        <div className="bg-indigo-100 p-5 w-full rounded mb-8">
            <div className="flex space-x-3">
                <div className="flex-1 leading-tight text-sm text-black font-medium">
                    {alert.message}
                </div>
                <button
                    type="button"
                    aria-label="Close alert"
                    onClick={handleClose}
                >
                    <XCircleIcon className="w-6 h-6 text-gray-600" />
                </button>
            </div>
        </div>
    );
};

export default Alert;

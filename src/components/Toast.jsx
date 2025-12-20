import { useCallback, useEffect } from "react";

function Toast({ id, message, type, removeToast }) {
    const handleRemove = useCallback(() => {
        setTimeout(() => {
            removeToast(id);
        }, 3300);
    }, [id, removeToast]);

    useEffect(() => {
        const timer = setTimeout(() => {
            handleRemove();
        }, 3000)
    
        // Cleanup timer
        return () => clearTimeout(timer);
    }, [handleRemove]);

    return (
        <div className={`toast-item toast-${type}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
                <span>{type === 'added' ? '✅' : '🗑️'}</span>
                <span>{message}</span>
            </div>
            <button onClick={() => removeToast(id)}
                className="toast-close"
                aria-label="Close notification"
                >
                &times;
            </button>
        </div>
    );
};

export default Toast; 
export default function FlashMessage({ className, message = "" }) {
    return (
        <div
            className={`flex bg-green-100 rounded p-4 mb-4 text-sm to-green-700 ${className}`}
        >
            {message}
        </div>
    );
}

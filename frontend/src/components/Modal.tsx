import Close from "@mui/icons-material/Close";

interface ModalProps {
    isOpen: boolean;
    onClose: React.MouseEventHandler<any>;
    children: React.ReactNode;
    className?: string;
}

export default function Modal({ isOpen, onClose, children, className = "w-[800px] max-w-[90%]" } : ModalProps) {
    return (
        <div onClick={onClose} className={`
            fixed inset-0 flex justify-center items-center
            transition-colors
            ${isOpen ? "visible bg-black/20" : "invisible"}
            z-100
        `}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
                    bg-seqDarkGray rounded-xl shadow p-4 transition-all relative
                    ${className}
                    ${isOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"}
                `}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 p-1 rounded-lg text-red-400 scale-150"
                >
                    <Close />
                </button>
                {children}
            </div>
        </div>
    )
}
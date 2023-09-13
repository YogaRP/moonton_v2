import PropTypes from "prop-types";
import "../../css/button.css";

Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    disabled: PropTypes.bool,
    processing: PropTypes.bool,
    children: PropTypes.node,
};

export default function Button({
    type = "submit",
    className = "",
    variant = "primary",
    disabled,
    processing,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={` rounded-2xl py-[13px] text-center w-full ${
                disabled && "opacity-30"
            } btn-${variant} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

import "./Button.scss";

function Button({text, className, href, newTab}) {
    return (
        <div className={className}>
            <a className="main-button" href={href} target={newTab && "_blank"}>
                {text}
            </a>
        </div>
    )
}

export default Button;

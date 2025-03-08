"use client";

import { FaShareAlt, FaInstagram, FaAt, FaFacebookF } from "react-icons/fa";
import PropTypes from "prop-types";
import {useState} from "react";

export default function SocialPanel({ variant, positionVariant }) {
    const [copied, setCopied] = useState(false);

    const copyLink = async () => {
        try {
            const currentURL = typeof location !== "undefined" ? location.href : "";
            await navigator.clipboard.writeText(currentURL);
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
        } catch (e) {
            console.error("Failed to copy link", e);
        }
    };


    // Which icon wrapper classes to use based on variant
    const iconWrapperClass =
        variant === "light" ? "social-icon-white" : "social-icon-black";

    // Which panel position
    const panelPositionClass =
        positionVariant === "hero" ? "social-panel-hero" : "social-panel-center";

    return (
        <div className={`social-panel ${panelPositionClass}`}>
            {/* If you need the share icon link */}
            <button
                onClick={copyLink}
            >
                <div className="relative flex items-center space-x-2 glass-white px-3 py-3 rounded-full shadow-md font-semibold group">
                    <FaShareAlt
                        className={`text-${variant === "light" ? "white" : "black"} text-xl`}
                    />
                </div>
            </button>

            {copied && (
                <span className={"absolute top-[-2rem] text-xs bg-gray-900 text-white px-3 py-1 rounded-md opacity-90 transition-opacity duration-300"}>
                    Link copied!
                </span>
            )}

            <div className="flex flex-col items-center space-y-2 glass-white p-1 rounded-full shadow-md">
                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className={iconWrapperClass}>
                        <FaInstagram
                            className={`text-${variant === "light" ? "white" : "black"} text-xl`}
                        />
                    </div>
                </a>

                <a
                    href="https://www.threads.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className={iconWrapperClass}>
                        <FaAt
                            className={`text-${variant === "light" ? "white" : "black"} text-xl`}
                        />
                    </div>
                </a>

                <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className={iconWrapperClass}>
                        <FaFacebookF
                            className={`text-${variant === "light" ? "white" : "black"} text-xl`}
                        />
                    </div>
                </a>
            </div>
        </div>
    );
}

// PropTypes for runtime type-checking
SocialPanel.propTypes = {
    variant: PropTypes.oneOf(["light", "dark"]),
    positionVariant: PropTypes.oneOf(["hero", "center"]),
};

// Default props
SocialPanel.defaultProps = {
    variant: "light",
    positionVariant: "hero",
};

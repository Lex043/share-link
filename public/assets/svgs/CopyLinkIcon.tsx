import React from "react";

export default function CopyLinkIcon(
    props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            fill="none"
            viewBox="0 0 21 20"
            {...props}
        >
            <path
                fill="#737373"
                d="M11.154 14.65a.94.94 0 0 1 0 1.329l-.464.464a4.689 4.689 0 0 1-6.631-6.631l1.884-1.884a4.688 4.688 0 0 1 6.432-.194.941.941 0 0 1-1.25 1.407 2.812 2.812 0 0 0-3.857.115l-1.883 1.88a2.813 2.813 0 1 0 3.978 3.979l.464-.464a.937.937 0 0 1 1.327 0Zm5.788-11.093a4.695 4.695 0 0 0-6.632 0l-.464.464a.94.94 0 0 0 1.328 1.328l.464-.464a2.813 2.813 0 1 1 3.979 3.978l-1.884 1.885a2.812 2.812 0 0 1-3.858.112.94.94 0 1 0-1.25 1.406 4.688 4.688 0 0 0 6.43-.19l1.884-1.884a4.695 4.695 0 0 0 .003-6.633v-.002Z"
            />
        </svg>
    );
}

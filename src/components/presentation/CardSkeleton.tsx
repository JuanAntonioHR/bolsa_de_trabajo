import React from "react"
import ContentLoader from "react-content-loader"

export function CardSkeleton() {
    return (
        <ContentLoader 
            speed={2}
            width={420}
            height={250}
            viewBox="0 0 420 250"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="20" y="10" rx="3" ry="3" width="220" height="17" /> 
            <rect x="20" y="107" rx="3" ry="3" width="370" height="14" /> 
            <rect x="310" y="12" rx="8" ry="8" width="78" height="17" /> 
            <rect x="320" y="169" rx="3" ry="3" width="67" height="11" /> 
            <rect x="20" y="194" rx="3" ry="3" width="370" height="17" /> 
            <rect x="20" y="171" rx="3" ry="3" width="145" height="11" /> 
            <rect x="20" y="81" rx="3" ry="3" width="370" height="14" /> 
            <rect x="20" y="219" rx="3" ry="3" width="145" height="13" /> 
            <rect x="245" y="219" rx="3" ry="3" width="145" height="13" /> 
            <rect x="20" y="54" rx="3" ry="3" width="370" height="17" />
        </ContentLoader>
    );
}
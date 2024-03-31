import React from 'react'

export default function Circle() {
    return (
        <div>
            <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="red" />
                        <stop offset="100%" stop-color="blue" />
                    </linearGradient>
                </defs>
                <rect x="10" y="10" width="180" height="180" rx="10" ry="10" fill="url(#gradient)" />
            </svg>
        </div>
    )
}

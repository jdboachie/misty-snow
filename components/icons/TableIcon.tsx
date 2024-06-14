export const TableIcon = ({ className }: { className?: string }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"  fill="none" className={className}>
            <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" stroke-width="1.5"></ellipse>
            <path d="M7 10.8418C7.60158 11.0226 8.27434 11.1716 9 11.2817" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
            <path d="M20 12C20 13.6569 16.4183 15 12 15C7.58172 15 4 13.6569 4 12" stroke="currentColor" stroke-width="1.5"></path>
            <path d="M7 17.8418C7.60158 18.0226 8.27434 18.1716 9 18.2817" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
            <path d="M20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5" stroke="currentColor" stroke-width="1.5"></path>
        </svg>
    )
}

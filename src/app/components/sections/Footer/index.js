
function Footer() {
    return (
        <footer className="p-3 bg-black rounded-lg shadow md:px-6 md:py-6 dark:bg-black-400">
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="https://facebook.com/coder.arifalmas/" className="hover:underline" target="_blank" rel="noreferrer">Arif Almas</a>. All Rights Reserved.
            </span>
        </footer>
    )
}

export default Footer
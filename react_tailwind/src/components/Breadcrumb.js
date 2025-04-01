import React from "react"

const Breadcrumb = () => {
    return (
        <nav className="container-fluid">
            <ol className="list-reset py-4 pl-4 rounded flex bg-grey-light text-grey">
                <li className="px-2"><a href="#" className="no-underline text-indigo">Home</a></li>
                <li>/</li>
                <li className="px-2"><a href="#" className="no-underline text-indigo">Library</a></li>
                <li>/</li>
                <li className="px-2">Data</li>
            </ol>
        </nav>
    )
}

export default Breadcrumb;
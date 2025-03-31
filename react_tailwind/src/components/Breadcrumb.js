import React from "react"

const Breadcrumb = () => {
    return (
        <nav class="container">
            <ol class="list-reset py-4 pl-4 rounded flex bg-grey-light text-grey">
                <li class="px-2"><a href="#" class="no-underline text-indigo">Home</a></li>
                <li>/</li>
                <li class="px-2"><a href="#" class="no-underline text-indigo">Library</a></li>
                <li>/</li>
                <li class="px-2">Data</li>
            </ol>
        </nav>
    )
}

export default Breadcrumb;
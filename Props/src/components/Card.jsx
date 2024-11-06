import React from 'react'

const Card = (props) => {
    console.log("props", props)
    return (
        <>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 border mb-2">
                <img className="w-4 h-4 md:w-20 md:h-auto rounded-xl" src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="" width="150" height="150" />
                <div className="pt-6 md:p-4 text-center md:text-left space-y-2">
                    <blockquote>
                        <p className="text-sm">
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It’s easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                          {props.username}
                        </div>
                        <div className="text-slate-700 dark:text-slate-500">
                            {props.role || "Employee"}
                        </div>
                    </figcaption>
                </div>
            </figure>
        </>
    )
}

export default Card

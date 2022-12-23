import React from 'react';

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Josh Nichols</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Engineer & Web Developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                I'm a software engineer and web developer with a passion for creating and developing things to help people. I have a background in computer science and a love for learning new technologies.
                I'm currently working as a IT professional at Lowe's Home Improvement. You can find my{' '}
                <a
                    href="https://github.com/jcnichols22"
                    target="_blank"
                    className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
                    rel="noreferrer noopener"
                >
                    Github
                </a>{' '}
                repository here.
            </p>
        </div>
    )
}

export default Intro;
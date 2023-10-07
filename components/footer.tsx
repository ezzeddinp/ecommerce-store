import React from "react";

const Footer = () => {
    return (
        <footer className="h-full bg-white dark:bg-black">
            <div className="mx-auto py-10 pt-[280px] sm:pt-[170px] md:pt-[550px] lg:pt-[180px] h-full">
                <p className="text-center text-xs text-black dark:text-zinc-200">
                    &copy; 2023 E-Store, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

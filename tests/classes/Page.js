class Page {
    open(path) {
        browser.url(path);

        // Add custom logic here if needed

        // If every page in your app has the same type of loading you can wait for that here
        // instead of doing it in every open() method in all the page objects

        return this;
    }
}

export default Page;
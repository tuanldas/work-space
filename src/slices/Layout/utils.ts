const changeHTMLAttribute = (attribute: string, value: string): boolean => {
    if (document.documentElement) {
        document.documentElement.setAttribute(attribute, value);
    }
    return true;
};

export { changeHTMLAttribute };

function validateUrl(url) {
    
    return /^(((https?)|(ftp)):\/\/)?(((www)|(ftp))\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b[-a-zA-Z0-9()@:%_\+.~#?&//=]*$/.test(url)
}

export { validateUrl }
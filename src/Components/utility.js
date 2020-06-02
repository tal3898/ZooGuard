export const goToPath = (path, context) => {
    var requestingPath = path;
    if (requestingPath == '') {
        requestingPath = '/';
    }

    var requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            path: requestingPath
        })
    }

    fetch('/nodeData', requestOptions)
        .then(response => response.json())
        .then(responseData => {
            context.currPath = path;
            context.currChildren = responseData.children;
            context.currData = responseData.data;
            context.updateContext(context);
        }).catch(error => {
            console.error("NG error: ", error)
        });;
};

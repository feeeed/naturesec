function customJivoOpen(){
    let params = {start: 'call'};
    let apiResult = jivo_api.open(params);
    if (apiResult.result === 'fail') {
        console.log('Widget failed to open');
    } else {
        console.log('Widget open successfully');
    }
}


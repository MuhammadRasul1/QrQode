export const isParsable = (data) => {
    let isValiJSON = true;

    try {
        JSON.parse(data);
    } catch (e) {
        isValiJSON = false;
    }
    return isValiJSON;
}
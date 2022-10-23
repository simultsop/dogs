
export const getUid = (): string => {
    if (process.client) {
        const uid = localStorage.getItem('uniqueIdentifier');
        if (uid === null) {
            const newUid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
            localStorage.setItem('uniqueIdentifier', newUid);
            return newUid;
        } else {
            return uid
        }
    } else {
        return
    }
}

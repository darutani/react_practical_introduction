export default function wrapPromise(promise) {
    let status = 'pending';
    let data;
    let wrapper = promise.then(
        result => {
            status = 'fulfilled';
            data = result;
        },
        e => {
            status = 'reject';
            data = e;
        }
    );

    return {
        get() {
            switch (status) {
                case 'fulfilled':
                    return data;
                case 'reject':
                    throw data;
                case 'pending':
                    throw wrapper;
                default:
                    break;
            }
        }
    };
}
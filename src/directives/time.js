/**
 * Created by panwenhua on 16/10/1.
 */
export default {
    bind () {

    },
    update () {
        this.el.innerHTML = new Date();
        this.timeout = setInterval(() => {
            this.el.innerHTML = new Date();
        })
    },
    unbind () {
        clearInterval(this.timeout);
    }
};
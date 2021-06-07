const vm = Vue.createApp({
    data(){
        return{
            perspective: 100,
            rotatex: 0,
            rotatey: 0,
            rotatez: 0,
            isCopied: false,
            title: 'CSS3 Perspective Playground'
        }
    },
    computed:{
        box(){
            return {
                transform: `
                perspective(${this.perspective}px)
                rotateX(${this.rotatex}deg)
                rotateY(${this.rotatey}deg)
                rotateZ(${this.rotatez}deg)`
            }
        }
    },
    methods: {
        reset(){
            this.perspective = 100
            this.rotatex = 0
            this.rotatey = 0
            this.rotatez = 0
        },
        copy(){
            const el = document.createElement('textarea')
            this.isCopied = true;
            el.setAttribute('readonly', '')
            el.value = `transform: ${this.box.transform}`
            el.style.position = "absolute"
            el.style.left = '-9999'
            
            document.body.appendChild(el)
            el.select()
            document.execCommand('copy')
            
            document.body.removeChild(el)

        }
    },
    watch: {
        isCopied(){
            this.title = "Copied to the clipboard"
            setTimeout(() => {
                this.title = "CSS3 Perspective Playground"
                this.isCopied = false;
            }, 1000)
        }
    }
}).mount('#app')
const app = new Vue({
    el: '#app',
    data: {
        num1: 0,
        num2: 0,
        operator: '+',
        total: 0
    },
    computed: {
        calcTotal: function() {
            if (this.operator == '+') {
                return this.num1 + this.num2;
            } else if (this.operator == '-') {
                return this.num1 - this.num2;
            } else if (this.operator == '*') {
                return this.num1 * this.num2;
            } else if (this.operator == '/') {
                return this.num1 / this.num2;
            } else {
                return 'No operator chosen, try again!';
            }
            
        }
    },
    methods: {
        resetFields: function() {
            this.num1 = 0,
            this.num2 = 0,
            this.operator = '+',
            this.total = 0
        }
    }
});
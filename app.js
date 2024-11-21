const app = new Vue({
    el: '#app',
    data: {
        num1: 0,
        num2: 0,
        operator: '+',
        total: 0
    },
    methods: {
        resetFields: function() {
            this.num1 = 0,
            this.num2 = 0,
            this.operator = '+',
            this.total = 0
        },
        setOperator: function(op) {
            this.operator = op;
        },
        calcTotal: function() {
            let newValue;
            if (this.operator == '+') {
                newValue = this.num1 + this.num2;
            } else if (this.operator == '-') {
                newValue = this.num1 - this.num2;
            } else if (this.operator == '*') {
                newValue = this.num1 * this.num2;
            } else if (this.operator == '/' && this.num2 === 0) {
                newValue = 'Please don\'t divide by zero!';
            } else if (this.operator == '/') {
                newValue = this.num1 / this.num2;
            } else {
                newValue = 'I do not know how you broke this, but you did.';
            };
            console.log("num1 = ", this.num1, "num2 = ", this.num2, "operator = ", this.operator, "total = ", this.total);
            this.$set(this, 'total', newValue);
        }

    },
    computed: {
    }
});
Vue.component('star-rating', VueStarRating.default);

let app = new Vue({
    el: '#app',
    data: {
        number: '',
        max: '',
        current: {
            title: '',
            img: '',
            alt: ''
        },
        loading: true,
        addedName: '',
        addedComment: '',
        comments: {},
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        ratings: {},

    },
    created() {
        this.xkcd();
    },
    methods: {
        async xkcd() {
            try {
                this.loading = true;
                let url = 'https://xkcd.now.sh/?comic=';
                if (this.number === '') {
                    url += 'latest';
                } else {
                    url += this.number;
                }
                const response = await axios.get(url);
                this.current = response.data;
                this.loading = false;
                this.number = response.data.num;
            } catch (error) {
                this.error = this.max;
                console.log(error);
            }
        },
        previousComic() {
            this.number = this.current.num - 1;
            if (this.number < 1)
                this.number = 1;
        },
        nextComic() {
            this.number = this.current.num + 1;
            if (this.number > this.max)
                this.number = this.max
        },
        getRandom(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum and minimum are inclusive
        },
        randomComic() {
            this.number = this.getRandom(1, this.max);
        },
        firstComic() {
            this.number = 1;
        },
        lastComic() {
            this.number = this.max;
        },
        addComment() {
            let today = new Date()
            let display_date = this.months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear() + ", " + today.getHours() + ":" + today.getMinutes()

            if (today.getMinutes() === 0) {
                display_date += "00"
            } else if (today.getMinutes() < 10) {
                display_date += 0
                display_date += today.getMinutes()
            }

            if (!(this.number in this.comments))
                Vue.set(app.comments, this.number, new Array);
            this.comments[this.number].push({
                author: this.addedName,
                text: this.addedComment,
                date: display_date,
            });
            this.addedName = '';
            this.addedComment = '';
        },
        setRating(rating) {
            if (!(this.number in this.ratings))
                Vue.set(this.ratings, this.number, {
                    sum: 0,
                    total: 0
                });
            this.ratings[this.number].sum += rating;
            this.ratings[this.number].total += 1;
        }
    },
    computed: {
        month() {
            var month = new Array;
            if (this.current.month === undefined)
                return '';
            month[0] = "January";
            month[1] = "February";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "August";
            month[8] = "September";
            month[9] = "October";
            month[10] = "November";
            month[11] = "December";
            return month[this.current.month - 1];
        },
        currentAverageRating() {
            if (this.ratings[this.number]) {
                return (this.ratings[this.number].sum / this.ratings[this.number].total).toFixed(1)
            } else {
                return 0
            }

        }
    },
    watch: {
        number(value, oldvalue) {
            if (oldvalue === '') {
                this.max = value;
            } else {
                this.xkcd();
            }
        },
    },
});
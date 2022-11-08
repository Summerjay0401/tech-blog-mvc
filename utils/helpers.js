module.exports = {
    format_time: (date) => {
        return date.toLocaleDateString("en-US");
    },
    format_summary: (content) => {
        if (content.length > 300) {
            return content.substring(0, 300) + "...";
        } else {
            return content;
        }
    },
    check: (value, comparator) => {
        return (value === comparator) ? 'You must be logged in to view your dashboard!' : '';
    }
};
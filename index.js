/**
 * Converts provided time string to ms.
 * @param {string} timestring
 * @param {string} separator - String to separate different times, defaultly ""
 * @returns {number}
 */
module.exports = (timestring, separator = "") => {
    let split = [];
    if(separator === "") {
        for(let i = 0; i < timestring.length; ++i) {
            if((isNaN(+timestring[i]) && timestring[i] !== ".") && (!isNaN(+timestring[i + 1]) || !timestring[i + 1])) {
                split.push(timestring.substring(0, i + 1));
                timestring = timestring.slice(i + 1);
                i = 0;
            }
        }
    } else {
        split = timestring.split(separator);
    }

    const d = "*24*60*60*1000";
    const h = "*60*60*1000";
    const m = "*60*1000";
    const s = "*1000";

    split = split.map(time => {
        time = time.replace(/[^a-zA-Z0-9.]/g, "").toLowerCase();
        time = time.replace("days", d)
            .replace("day", d)
            .replace("hours", h)
            .replace("hour", h)
            .replace("hrs", h)
            .replace("minutes", m)
            .replace("minute", m)
            .replace("min", m)
            .replace("seconds", s)
            .replace("second", s)
            .replace("secs", s)
            .replace("sec", s)
            .replace("d", d)
            .replace("h", h)
            .replace("m", m)
            .replace("s", s);
        if(time.indexOf("*") < 0) return parseInt(time);

        let [result, ...multipliers] = time.split("*");
        for(const multiply of multipliers) result *= multiply;
		
        return result;
    });

    return split.reduce((a, b) => a + b);
}
var myLogging = function (myLogging) { }
let fs = require("fs");
const path = './givenData.json';

myLogging.jsonLogging = function jsonLogging(myObject) {
    try {
        if (fs.existsSync(path)) {
            fs.readFile(path, 'utf8', (err, data) => {
                if (err) {
                    console.error(err)
                    return
                }
                console.log(data);
                var existingData = JSON.parse(data);
                existingData.student.push(myObject);
                console.log(existingData);
                var myStr = JSON.stringify(existingData);
                debugger;
                fs.writeFile(path, myStr, err => {
                    if (err) {
                        console.error(err)
                        return
                    }
                    console.log('Saved!');
                })
            })
        } else {
            console.log("Does not exist");
            let Myinfo = {
                student: []
            };
            debugger;
            Myinfo.student.push(myObject)
            var myStr = JSON.stringify(Myinfo);
            fs.appendFile(path, myStr, function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
        }
    } catch (err) {
        console.error(err)
    }
}

module.exports = myLogging;
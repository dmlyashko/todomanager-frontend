"use strict";
var TomorrowData = (function () {
    function TomorrowData() {
    }
    TomorrowData.prototype.createDb = function () {
        var tomorrowTasks = [
            {
                id: 1,
                name: '111Task 1',
                start_time: '9:00',
                end_time: '10:00',
                status: 'todo'
            },
            {
                id: 2,
                name: '111Task 2',
                start_time: '10:00',
                end_time: '11:00',
                status: 'todo'
            },
            {
                id: 3,
                name: 'Task 3',
                start_time: '11:00',
                end_time: '12:00',
                status: 'todo'
            },
            {
                id: 4,
                name: 'Task 4',
                start_time: '12:00',
                end_time: '13:00',
                status: 'todo'
            },
            {
                id: 5,
                name: 'Task 5',
                start_time: '13:00',
                end_time: '14:00',
                status: 'todo'
            }
        ];
        return { tomorrowTasks: tomorrowTasks };
    };
    return TomorrowData;
}());
exports.TomorrowData = TomorrowData;
//# sourceMappingURL=tomorrow-data.js.map
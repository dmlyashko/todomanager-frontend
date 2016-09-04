import {InMemoryDbService} from 'angular2-in-memory-web-api';

export class TasksData implements InMemoryDbService {
    createDb() {
        let todayTasks = [
            {
                id: 1,
                name: 'Task 1',
                start_time: '9:00',
                end_time: '10:00',
                status: 'todo'
            },
            {
                id: 2,
                name: 'Task 2',
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

        let tomorrowTasks = [
            {
                id: 10,
                name: 'Task 6',
                start_time: '9:00',
                end_time: '10:00',
                status: 'todo'
            },
            {
                id: 11,
                name: 'Task 7',
                start_time: '10:00',
                end_time: '11:00',
                status: 'todo'
            },
            {
                id: 12,
                name: 'Task 8',
                start_time: '11:00',
                end_time: '12:00',
                status: 'todo'
            },
            {
                id: 13,
                name: 'Task 9',
                start_time: '12:00',
                end_time: '13:00',
                status: 'todo'
            },
            {
                id: 14,
                name: 'Task 10',
                start_time: '13:00',
                end_time: '14:00',
                status: 'todo'
            }
        ];

        let scheduledTasks = [
            {
                'section_id': 'this_week',
                'section_title': 'This week',
                'days': [
                    {
                        'date': '1st of September',
                        'tasks': [
                            {
                                id: 14,
                                name: 'Task 20',
                                start_time: '13:00',
                                end_time: '14:00',
                                status: 'todo'
                            },
                            {
                                id: 14,
                                name: 'Task 21',
                                start_time: '13:00',
                                end_time: '14:00',
                                status: 'todo'
                            },
                            {
                                id: 14,
                                name: 'Task 22',
                                start_time: '13:00',
                                end_time: '14:00',
                                status: 'todo'
                            },
                            {
                                id: 14,
                                name: 'Task 23',
                                start_time: '13:00',
                                end_time: '14:00',
                                status: 'todo'
                            },
                        ]
                    },
                    {
                        'date': '2nd of September',
                        'tasks': [
                            {
                                id: 14,
                                name: 'Task 30',
                                start_time: '13:00',
                                end_time: '14:00',
                                status: 'todo'
                            },
                            {
                                id: 14,
                                name: 'Task 31',
                                start_time: '13:00',
                                end_time: '14:00',
                                status: 'todo'
                            },
                            {
                                id: 14,
                                name: 'Task 32',
                                start_time: '13:00',
                                end_time: '14:00',
                                status: 'todo'
                            },
                            {
                                id: 14,
                                name: 'Task 33',
                                start_time: '13:00',
                                end_time: '14:00',
                                status: 'todo'
                            },
                        ]
                    }
                ]
            },
            {
                'section_id': 'this_month',
                'section_title': 'This month',
                'days': [
                    {
                        'date': '9th of September',
                        'tasks': [
                            {
                                id: 14,
                                name: 'Task 40',
                                start_time: '13:00',
                                end_time: '14:00',
                                status: 'todo'
                            },
                            {
                                id: 14,
                                name: 'Task 41',
                                start_time: '13:00',
                                end_time: '14:00',
                                status: 'todo'
                            },
                            {
                                id: 14,
                                name: 'Task 42',
                                start_time: '13:00',
                                end_time: '14:00',
                                status: 'todo'
                            },
                            {
                                id: 14,
                                name: 'Task 43',
                                start_time: '13:00',
                                end_time: '14:00',
                                status: 'todo'
                            },
                        ]
                    }
                ]
            },
        ];

        return {todayTasks, tomorrowTasks, scheduledTasks};
    }
}
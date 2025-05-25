//localStorage.clear()

const employees = [
    {
        id: 1,
        firstName: "John",
        email: "john.doe@example.com",
        password: "123",
        taskCounts : {
            active: 2,
            newTask: 1,
            completed: 1,
            failed: 0
        },
        task: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Prepare Monthly Report",
                taskDescription: "Compile and prepare the monthly sales report.",
                taskDate: "2024-06-01",
                category: "Reporting"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Update Client Database",
                taskDescription: "Update the contact information for all clients.",
                taskDate: "2024-05-20",
                category: "Database"
            }
        ]
    },
    {
        id: 2,
        firstName: "Jane",
        email: "jane.smith@example.com",
        password: "123",
        taskCounts : {
            active: 1,
            newTask: 1,
            completed: 0,
            failed: 0
        },
        task: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Organize Team Meeting",
                taskDescription: "Schedule and organize the weekly team meeting.",
                taskDate: "2024-06-03",
                category: "Meetings"
            }
        ]
    },
    {
        id: 3,
        firstName: "Alice",
        email: "alice.williams@example.com",
        password: "1234",
        taskCounts : {
            active: 0,
            newTask: 0,
            completed: 1,
            failed: 1
        },
        task: [
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Submit Expense Report",
                taskDescription: "Submit the expense report for last month.",
                taskDate: "2024-05-28",
                category: "Finance"
            }
        ]
    },
    {
        id: 4,
        firstName: "Bob",
        email: "bob.johnson@example.com",
        password: "123",
        taskCounts : {
            active: 1,
            newTask: 0,
            completed: 0,
            failed: 0
        },
        task: [
            {
                active: true,
                newTask: false,
                completed: false,
                failed: false,
                taskTitle: "Review Project Proposal",
                taskDescription: "Review the new project proposal and provide feedback.",
                taskDate: "2024-06-05",
                category: "Projects"
            }
        ]
    },
    {
        id: 5,
        firstName: "Carol",
        email: "carol.brown@example.com",
        password: "123",
        taskCounts : {
            active: 0,
            newTask: 0,
            completed: 1,
            failed: 0
        },
        task: [
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Conduct Training Session",
                taskDescription: "Conduct a training session for new employees.",
                taskDate: "2024-05-30",
                category: "Training"
            }
        ]
    }
];

const admin = {
    id: 1,
    firstName: "Admin",
    email: "admin@example.com",
    password: "admin123"
};

export default employees;

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage=()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    console.log(employees,admin)
    return {employees,admin}
}

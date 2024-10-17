export interface Project {
    src: string;
    title: string;
    category: string;
    description: string; // Add this if you want a description
}

const projects: Project[] = [
    {
        src: '/images/Untitled.jpeg', // Ensure this path is correct
        title: 'Project One',
        category: 'Web Development',
        description: 'A description of Project One',
    },
    {
        src: '/images/Untitled.jpeg', // Update this to a valid path
        title: 'Project Two',
        category: 'Mobile Development',
        description: 'A description of Project Two',
    },
    {
        src: '/images/Untitled.jpeg', // Update this to a valid path
        title: 'Project Three',
        category: 'Mobile Development',
        description: 'A description of Project Three',
    },
    {
        src: '/images/Untitled.jpeg', // Update this to a valid path
        title: 'Project Three',
        category: 'Mobile Development',
        description: 'A description of Project Three',
    },
    {
        src: '/images/Untitled.jpeg', // Update this to a valid path
        title: 'Project Three',
        category: 'Mobile Development',
        description: 'A description of Project Three',
    },

    // Add more projects with valid image paths as needed
];

export default projects;

export interface Project {
    id: number;
    src: string;
    title: string;
    category: string;
    description: string;
}

const projects: Project[] = [
    {
        id: 1,
        src: '/images/Untitled.jpeg',
        title: 'Project One',
        category: 'Web Development',
        description: 'A description of Project One',
    },
    {
        id: 2,
        src: '/images/Untitled.jpeg',
        title: 'Project Two',
        category: 'Mobile Development',
        description: 'A description of Project Two',
    },
    {
        id: 3,
        src: '/images/Untitled.jpeg',
        title: 'Project Three',
        category: 'Mobile Development',
        description: 'A description of Project Three',
    },
    {
        id: 4,
        src: '/images/Untitled.jpeg',
        title: 'Project Four',
        category: 'Mobile Development',
        description: 'A description of Project Four',
    },
    {
        id: 5,
        src: '/images/Untitled.jpeg',
        title: 'Project Five',
        category: 'Mobile Development',
        description: 'A description of Project Five',
    },
];

export default projects;

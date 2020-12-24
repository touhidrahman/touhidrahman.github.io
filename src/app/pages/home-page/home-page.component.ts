import {Component} from '@angular/core';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
    jobs = [
        {
            companyName: 'CHECK24 Vergleichsportal GmbH',
            role: 'Frontend Developer',
            period: 'May 2020 - Present',
            location: 'Cologne, Germany',
            responsibilities: [
                'Develop and refine the #1 comparison website in Germany.',
                'Work with Product Managers in Agile SCRUM team for quality software delivery.',
            ],
        },
        {
            companyName: 'Mobile2b GmbH',
            role: 'Frontend Developer',
            period: 'Aug 2019 - Mar 2020',
            location: 'Cologne, Germany',
            responsibilities: [
                'Upgraded Angular v5 to v8.',
                'Added charting library to display the complex data intuitively.',
                'Developed a realtime chat microservice backend in Nestjs and integrated it with the frontend.',
                'Enforced autoformat with prettier, organized code architecture and best practices, etc.',
            ],
        },
        {
            companyName: 'Acomodeo UG',
            role: 'Frontend Developer',
            period: 'Aug 2017 - Mar 2019',
            location: 'Frankfurt a.M, Germany',
            responsibilities: [
                'Prototyped and implemented new UI / UX.',
                'Added features to the apartment management system which handles 400k properties.',
                'Upgraded Angular v1 to v5, implemented state management through NGRX.',
            ],
        },
        {
            companyName: 'Novoair Ltd',
            role: 'Web Developer',
            period: 'Aug 2015 - Sep 2016',
            location: 'Dhaka, Bangladesh',
            responsibilities: [
                'Single - handedly upgraded airline website from PHP(no framework) to Codeigniter.',
                'Designed and implemented  UI from scratch.Developed a CMS for the site.',
                'Developed the Career & Media websites using Wordpress.',
                'Maintained company social media profiles, SEO and Ad campaigns.',
                'Designed graphics and  marketing materials using Adobe photoshop & Illustrator.',
            ],
        },
    ]

    educations = [
        {
            university: 'Hochschule Fulda University of Applied Sciences',
            program: 'M.Sc',
            major: 'Global Software Development',
            period: '2016 - 2018',
            location: 'Germany',
        },
        {
            university: 'Bangladesh Institute of Management',
            program: 'PGD',
            major: 'Computer Science',
            period: '2014',
            location: 'Bangladesh',
        },
        {
            university: 'Bangladesh University of Professionals',
            program: 'B.Sc',
            major: 'Aeronautics',
            period: '2007 - 2009',
            location: 'Bangladesh',
        },
    ]

    skills = [
        'Angular',
        'TypeScript',
        'Javascript',
        'NodeJS',
        'Express',
        'NestJS',
        'Redux Pattern',
        'State Management',
        'Charting Library',
        'HTML',
        'CSS / SASS',
        'Bootstrap',
        'Angular Material',
        'Tailwind CSS',
        'PHP',
        'Python',
        'Ionic / Android  Development',
        'Linux',
        'Git',
        'Cloud Computing',
        'Agile / SCRUM',
        'JIRA',
        'Adobe Creative Suite',
    ]
}

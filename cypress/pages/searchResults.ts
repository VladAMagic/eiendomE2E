import { ProjectCard } from '../pageComponents/projectCard'

export const SearchResultsPage = {
    resultProjects: ProjectCard.projectCard,
    buildingTypeFilterButton: '#filters > div:nth-child(1) > div:nth-child(1)',
    bedroomsFilterButton: '#filters > div:nth-child(1) > div:nth-child(7)',
    townhouseFilterCheckbox: '#filters [data-testid="townhouse"]',
    submitFilterButton: '.z-20 > .py-4 > .btn-gray',
    bedroomsMoreThan5Checkbox: '.z-20 > .mx-4 > :nth-child(6)',
}

export class ProjectModel {
    name: string;
    description: string;
    language: Object;
    constructor(name: string,description: string, language: string) {
        this.name = name;
        this.description = description;
        this.language = language;
    }
}

export type projectProps = {
    project : ProjectModel
    color : string
}
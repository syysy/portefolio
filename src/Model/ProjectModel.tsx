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
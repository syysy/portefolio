export class ProjectModel {
    name: string;
    language: Object;
    constructor(name: string, language: string) {
        this.name = name;
        this.language = language;
    }
}
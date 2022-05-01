export class Project {
    public id: number;
    public title: string;
    public description: string;
    // public pictures: string[];

    public constructor(id: number, title: string, description: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        // this.pictures = pictures;
    }

    public toString() {
        return "Id: " + this.id + " Title: " + this.title + " Description: " + this.description;
    }

}

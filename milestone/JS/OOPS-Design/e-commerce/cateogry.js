export class Category{
    static categoryCounter = 0;
    constructor(  categoryName, categoryDescription){
        this.categoryID = Category.categoryCounter++;
        this.categoryName = categoryName;
        this.categoryDescription = categoryDescription;
        
    } 

}
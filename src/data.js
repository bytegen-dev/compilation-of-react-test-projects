function Person(name,age, id, img, visible){
    this.name = name
    this.age = age
    this.id = id
    this.img = img
    this.visible = visible
}

export default [
    new Person("Unity", 10, 1, "logo512.png", 1),
    new Person("Joel", 16, 2, "logo512.png", 0),
    new Person("Isaac", 19, 3, "logo512.png", 1),
    new Person("Emmanuel", 22, 4, "logo512.png", 1),
    new Person("Goodnews", 22, 5, "logo512.png", 1),
    new Person("Christopher", 21, 6, "logo512.png", 0),
    new Person("Samuel", 18, 7, "logo512.png", 0),
    new Person("Marvellous", 19, 8, "logo512.png", 1),
]
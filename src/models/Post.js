export default class Post {
  constructor(title, image) {
    this.title = title
    this.img = image
    this.date = new Date()
  }

  toString() {
    return JSON.stringify({
      title: this.title,
      date: this.date.toJSON(),
      img: this.img
    })
  }
}
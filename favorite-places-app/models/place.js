class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; // { lat:0.23123, lgn:125.434}
    this.id = new Date().toString() + Math.random().toString();
  } 
}

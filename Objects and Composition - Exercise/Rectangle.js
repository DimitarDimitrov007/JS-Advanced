function rectangle(width, height, color) {

    let rect = {
        width: Number(width),
        height: Number(height),
        color: color[0].toUpperCase() + color.substring(1),
        calcArea() {
            return Number(this.width * this.height);
        }
    }

    return rect;
}
rectangle(4, 5, 'red');
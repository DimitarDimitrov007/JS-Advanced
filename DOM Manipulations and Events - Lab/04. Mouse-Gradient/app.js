function attachGradientEvents() {
    let gradientElement = document.getElementById("gradient");
    let resultElement = document.getElementById("result");

    let handler = (e) => {
        let firstEl = Number(e.offsetX);
        let secondEl = Number(e.target.offsetWidth);
        let percent = Math.floor((firstEl / secondEl) * 100);
        resultElement.textContent = percent + "%";

    }
    gradientElement.addEventListener("mousemove" ,handler );
    
}
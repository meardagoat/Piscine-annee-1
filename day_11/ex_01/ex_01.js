function display_weather_chart(longitude, latitude) {
    const image = document.createElement("img")
    image.src = "https://www.7timer.info/bin/civil.php?lon=" + longitude + "&lat=" + latitude
    document.body.appendChild(image)
}

display_weather_chart(2.333333, 48.866667)